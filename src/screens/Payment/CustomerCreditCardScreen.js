import React, { useState } from "react";
import { Text, View, TextInput, Pressable, Alert, Dimensions, ScrollView } from "react-native";
import axios from "axios"; // Axios for handling HTTP requests
import styles from "../../styles/Payment/CustomerCreditCardScreenStyles"; // Import styles
import { IP_ADDRESS } from "@env"; // Import IP_ADDRESS from environment variables

const CustomerCreditCardScreen = ({ navigation, route }) => {
    const screenWidth = Dimensions.get("window").width;

    // Destructure the order details passed from the previous screen
    const { orderData } = route.params; // Access the whole orderData object
    const { totalAmount } = orderData; // Destructure specific fields from orderData

    // State variables for form inputs
    const [nameOnCard, setNameOnCard] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState(""); // Changed to a simple string
    const [cvc, setCVC] = useState("");

    // Validate card number (Example: 16 digits)
    const validateCardNumber = (number) => {
        const cardNumberPattern = /^[0-9]{16}$/;
        return cardNumberPattern.test(number);
    };

    // Validate CVC (Example: 3-4 digits)
    const validateCVC = (cvc) => {
        const cvcPattern = /^[0-9]{3,4}$/;
        return cvcPattern.test(cvc);
    };

    // Handle form submission
    const handleAddPayment = async () => {
        // Validate inputs
        if (!nameOnCard || nameOnCard.length < 3) {
            Alert.alert("Error", "Please enter a valid name on the card.");
            return;
        }

        if (!validateCardNumber(cardNumber)) {
            Alert.alert("Error", "Please enter a valid 16-digit card number.");
            return;
        }

        if (!expiryDate) {
            Alert.alert("Error", "Please enter an expiry date.");
            return;
        }

        if (!validateCVC(cvc)) {
            Alert.alert("Error", "Please enter a valid 3-4 digit CVC.");
            return;
        }

        // Prepare payment method object
        const paymentMethod = {
            nameOnCard,
            cardNumber,
            expiryDate, // Expiry date as a string from input
            cvc,
            totalAmount, // Correctly include totalAmount
        };

        console.log("Submitting payment method:", paymentMethod); // Debugging statement

        // Send data to the backend
        try {
            console.log("IP ADDRESS:", IP_ADDRESS);
            const response = await axios.post(`http://${IP_ADDRESS}:5000/paymenthMethods/payment-methods`, paymentMethod);
            console.log("Payment response:", response.data); // Log backend response

            Alert.alert("Success", "Payment information added successfully");

            // Reset form after successful submission
            setNameOnCard("");
            setCardNumber("");
            setExpiryDate("");
            setCVC("");

            // Navigate to the PaymentProcessing screen after successful payment submission
            navigation.navigate("PaymentProcessing", {
                totalAmount: totalAmount,
            });

        } catch (error) {
            console.error("Error uploading payment:", error.response?.data || error.toJSON());  // Enhanced error log
            Alert.alert("Error", error.response?.data?.message || "Failed to add payment information");
        }
    };

    return (
        <ScrollView>
            <View style={styles.mainText}>
                <Text style={styles.lastMinutePantryContainer}>
                    <Text style={styles.lastMinute}>Last Minute</Text>
                    <Text style={styles.text}> </Text>
                    <Text style={styles.pantry}>Pantry</Text>
                </Text>
            </View>
            <Text style={styles.creditDebit}>Credit / Debit card</Text>
            <View style={styles.form}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Name On Card</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Enter Name On Card"
                        placeholderTextColor="#737171"
                        value={nameOnCard}
                        onChangeText={setNameOnCard}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Card Number</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Enter Card Number"
                        placeholderTextColor="#737171"
                        value={cardNumber}
                        onChangeText={setCardNumber}
                        keyboardType="numeric"
                        maxLength={16}
                    />
                </View>
                <View style={styles.row}>
                    <View style={styles.halfInputWrapper}>
                        <Text style={styles.inputLabel}>Expiry Date</Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="MM/YY"
                            placeholderTextColor="#737171"
                            value={expiryDate}
                            onChangeText={setExpiryDate}
                        />
                    </View>
                    <View style={styles.halfInputWrapper}>
                        <Text style={styles.inputLabel}>CVC</Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Enter CVC"
                            placeholderTextColor="#737171"
                            value={cvc}
                            onChangeText={setCVC}
                            keyboardType="numeric"
                            maxLength={4}
                        />
                    </View>
                </View>
            </View>

            <Text style={styles.note}>Please provide your own payment information.</Text>

            <View style={styles.buttons}>
                <Pressable style={styles.buttonWrapper} onPress={handleAddPayment}>
                    <Text style={styles.button}>Submit</Text>
                </Pressable>
                <Pressable style={styles.buttonWrapper} onPress={() => navigation.goBack()}>
                    <Text style={styles.button}>Go Back</Text>
                </Pressable>
            </View>

            <View style={styles.paymentMethod}>
            </View>
        </ScrollView>
    );
};

export default CustomerCreditCardScreen;
