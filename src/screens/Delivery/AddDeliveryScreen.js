import React, { useState } from "react";
import { Text, View, TextInput, Pressable, Alert, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import axios from "axios"; // Import axios for API requests
import styles from "../../styles/Delivery/AddDeliveryScreenStyles"; // Import styles
import { IP_ADDRESS } from "@env"; // Import IP_ADDRESS from environment variables

const AddDeliveryScreen = () => {
  // Get screen width and height for responsiveness
  const { width, height } = Dimensions.get("window");

  // State variables for form inputs
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [date, setDate] = useState(""); // Date field (you can use a date picker)
  const [deliveryNote, setDeliveryNote] = useState("");

  // Validate postal code (Example validation: must be 5 digits)
  const validatePostalCode = (postalCode) => {
    const postalCodePattern = /^[0-9]{5}$/;
    return postalCodePattern.test(postalCode);
  };

  // Handle form submission to add a delivery
  const handleAddDelivery = async () => {
    // Validate inputs
    if (!address) {
      Alert.alert("Error", "Address is required.");
      return;
    }

    if (!postalCode) {
      Alert.alert("Error", "Postal code is required.");
      return;
    }

    if (!validatePostalCode(postalCode)) {
      Alert.alert("Error", "Postal code must be exactly 5 digits.");
      return;
    }

    if (!date) {
      Alert.alert("Error", "Date is required.");
      return;
    }

    // Send data to the backend
    try {
      const response = await axios.post(`http://${IP_ADDRESS}:5000/deliveries/deliveries`, {
        address,
        postalCode,
        date,
        deliveryNote,
      });

      Alert.alert("Success", "Delivery added successfully");
      // Clear form after successful submission
      setAddress("");
      setPostalCode("");
      setDate("");
      setDeliveryNote("");
    } catch (error) {
      Alert.alert("Error", error.response?.data?.message || "Failed to add delivery");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} // Adjust offset if needed
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.addDeliveryDashboard}>
          <View style={styles.maintextParent}>
            <View style={[styles.maintext, styles.maintextFlexBox]}>
              <Text style={[styles.lastMinutePantryContainer, styles.inputLabelTypo]}>
                <Text style={styles.lastMinute}>Last Minute</Text>
                <Text style={styles.text}>{` `}</Text>
                <Text style={styles.pantry}>Pantry</Text>
              </Text>
            </View>
            <View style={[styles.myProducts, styles.maintextFlexBox]}>
              <Text style={[styles.addDelivery, styles.addTypo]}>Add Delivery</Text>
            </View>
          </View>

          {/* Form Fields */}
          <View style={styles.instanceParent}>
            <View style={styles.inputLabelParent}>
              <Text style={[styles.inputLabel, styles.inputLabelTypo]}>Address</Text>
              <TextInput
                style={styles.instanceChildBorder}
                placeholder="Enter Address"
                placeholderTextColor="#737171"
                value={address}
                onChangeText={setAddress}
              />
            </View>

            <View style={styles.inputLabelParent}>
              <Text style={[styles.inputLabel, styles.inputLabelTypo]}>Postal Code</Text>
              <TextInput
                style={styles.instanceChildBorder}
                placeholder="Enter Postal Code"
                placeholderTextColor="#737171"
                value={postalCode}
                onChangeText={setPostalCode}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputLabelParent}>
              <Text style={[styles.inputLabel, styles.inputLabelTypo]}>Date</Text>
              <TextInput
                style={styles.instanceChildBorder}
                placeholder="Enter Date (YYYY-MM-DD)"
                placeholderTextColor="#737171"
                value={date}
                onChangeText={setDate}
              />
            </View>

            <View style={styles.inputLabelParent}>
              <Text style={[styles.inputLabel, styles.inputLabelTypo]}>Delivery Note</Text>
              <TextInput
                style={styles.instanceChildBorder}
                placeholder="Enter Delivery Note"
                placeholderTextColor="#737171"
                value={deliveryNote}
                onChangeText={setDeliveryNote}
              />
            </View>
          </View>

          {/* Submit Button */}
          <View style={styles.addDeliveryDashboardInner}>
            <Pressable style={styles.addDeliveryWrapper} onPress={handleAddDelivery}>
              <Text style={[styles.addDelivery1, styles.addTypo]}>Add Delivery</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddDeliveryScreen;
