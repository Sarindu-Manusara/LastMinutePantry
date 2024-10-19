import React, { useState } from 'react';
import { Text, View, Image, TextInput, Pressable, Alert, Dimensions, ScrollView } from 'react-native';
import axios from 'axios'; // Axios for handling HTTP requests
import styles from '../../../styles/Payment/admin/PaymentManagerAddPaymentStyles'; // Import your styles
import { IP_ADDRESS } from "@env";
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker

const PaymentManagerAddPayment = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;

  // State variables for form inputs
  const [paymentId, setPaymentId] = useState('');
  const [productName, setProductName] = useState('');
  const [dueDate, setDueDate] = useState(new Date()); // Date picker state
  const [totalAmount, setTotalAmount] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false); // Control date picker visibility

  // Function to validate due date format (optional, since date picker is used)
  const validateDate = (date) => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Matches YYYY-MM-DD format
    return datePattern.test(date);
  };

  // Function to handle form submission and create a new payment
  const handleAddPayment = async () => {
    // Validate inputs
    if (!paymentId) {
      Alert.alert('Error', 'Payment ID is required.');
      return;
    }
  
    if (!/^[a-zA-Z0-9]+$/.test(paymentId)) {
      Alert.alert('Error', 'Payment ID should be alphanumeric.');
      return;
    }
  
    if (!productName || productName.length < 3 || productName.length > 50) {
      Alert.alert('Error', 'Product Name should be between 3 to 50 characters.');
      return;
    }
  
    if (!totalAmount || isNaN(totalAmount) || parseFloat(totalAmount) <= 0) {
      Alert.alert('Error', 'Total Amount should be a valid number greater than zero.');
      return;
    }
  
    // Create a new payment object
    const newPayment = {
      paymentId,
      productName,
      dueDate: dueDate.toISOString().split('T')[0], // Convert date to YYYY-MM-DD format
      totalAmount: parseFloat(totalAmount), // Convert to number
    };
  
    try {
      console.log("Sending Payment Data: ", newPayment); // Debugging: Log data being sent
      const response = await axios.post(`http://${IP_ADDRESS}:5000/payments/`, newPayment);
      console.log("Payment Created: ", response.data); // Debugging: Log response
      Alert.alert('Success', 'Payment added successfully');
      navigation.goBack(); // Navigate back after successful addition
    } catch (error) {
      console.error('Error adding payment:', error.response ? error.response.data : error.message); // Log detailed error
      Alert.alert('Error', 'Failed to add payment');
    }
  };
  

  // Date picker change handler
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || dueDate;
    setShowDatePicker(false); // Hide date picker after selection
    setDueDate(currentDate); // Set selected date
  };

  return (
    <ScrollView>
      {/* Header Section */}
      <View style={[styles.maintext, styles.maintextFlexBox]}>
        <Text style={styles.lastMinutePantryContainer}>
          <Text style={styles.lastMinute}>Last Minute</Text>
          <Text style={styles.pantry}>Pantry</Text>
        </Text>
      </View>

      {/* Add Payment Header */}
      <View style={styles.arrowBackParent}>
        <Image
          style={styles.arrowBackIcon}
          resizeMode="cover"
          source={require('../../../assets/images/vendor/backarrow.png')}
        />
        <Text style={styles.addPayment}>Add Payment</Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require('../../../assets/images/vendor/Vnav1.png')}
        />
      </View>

      {/* Form Fields */}
      <View style={styles.frameParent}>
        <View style={styles.inputLabelParent}>
          <Text style={styles.inputLabel}>Payment ID</Text>
          <TextInput
            style={styles.enterInput}
            placeholder="Enter Payment ID"
            value={paymentId}
            onChangeText={setPaymentId}
          />
        </View>

        <View style={styles.inputLabelParent}>
          <Text style={styles.inputLabel}>Product Name</Text>
          <TextInput
            style={styles.enterInput}
            placeholder="Enter Product Name"
            value={productName}
            onChangeText={setProductName}
          />
        </View>

        {/* Due Date Field with Date Picker */}
        <View style={styles.inputLabelParent}>
          <Text style={styles.inputLabel}>Due Date</Text>
          <Pressable onPress={() => setShowDatePicker(true)}>
            <View style={styles.enterInput}>
              <Text>{dueDate.toISOString().split('T')[0]}</Text>
            </View>
          </Pressable>
          {showDatePicker && (
            <DateTimePicker
              value={dueDate}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        <View style={styles.inputLabelParent}>
          <Text style={styles.inputLabel}>Total Amount</Text>
          <TextInput
            style={styles.enterInput}
            placeholder="Enter Total Amount"
            keyboardType="numeric"
            value={totalAmount}
            onChangeText={setTotalAmount}
          />
        </View>

        {/* Add Payment Button */}
        <Pressable
          style={[
            styles.buttonWrapper,
            { width: screenWidth * 0.8, alignSelf: 'center', marginTop: 20 }, // Added adjustments
          ]}
          onPress={handleAddPayment}
        >
          <Text style={styles.button}>Add Payment</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default PaymentManagerAddPayment;
