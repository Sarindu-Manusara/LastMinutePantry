// PaymentManagerEditPayment.js
import React, { useState, useEffect } from 'react';
import { Text, View, Image, Pressable, TextInput, Alert } from 'react-native';
import axios from 'axios'; // Axios for handling HTTP requests
import styles from '../../../styles/Payment/admin/PaymentManagerEditPaymentStyles'; // Importing styles from a separate file
import { IP_ADDRESS } from "@env";

const PaymentManagerEditPayment = ({ navigation, route }) => {

  // State variables for form inputs
  const [paymentId, setPaymentId] = useState('');
  const [productName, setProductName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [time, setTime] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [status, setStatus] = useState('');

  const paymentIdFromRoute = route.params?.paymentId; // Assume payment ID is passed via route parameters

  // Fetch the existing payment details if editing
  useEffect(() => {
    if (paymentIdFromRoute) {
      fetchPaymentDetails();
    }
  }, [paymentIdFromRoute]);

  // Function to fetch payment details
  const fetchPaymentDetails = async () => {
    try {
      console.log("IP Address: ", IP_ADDRESS);
      const response = await axios.get(`http://${IP_ADDRESS}:5000/payments/${paymentIdFromRoute}`);
      const payment = response.data;
      setPaymentId(payment.paymentId);
      setProductName(payment.productName);
      setDueDate(payment.dueDate);
      setTime(payment.time);
      setTotalAmount(payment.totalAmount.toString());
      setStatus(payment.status);
    } catch (error) {
      console.error('Error fetching payment details:', error);
      Alert.alert('Error', 'Failed to load payment details');
    }
  };

  // Function to handle form submission (Update Payment)
  const handleEditPayment = async () => {
    // Validate inputs
    if (!paymentId || !productName || !dueDate || !time || !totalAmount || !status) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Updated payment object
    const updatedPayment = {
      paymentId,
      productName,
      dueDate,
      time,
      totalAmount: parseFloat(totalAmount), // Convert to number
      status,
    };

    try {
      console.log("IP Address: ", IP_ADDRESS);
      await axios.put(`http://${IP_ADDRESS}:5000/payments/${paymentIdFromRoute}`, updatedPayment);
      Alert.alert('Success', 'Payment updated successfully');
      navigation.goBack(); // Navigate back after successful update
    } catch (error) {
      console.error('Error updating payment:', error);
      Alert.alert('Error', 'Failed to update payment');
    }
  };

  return (
    <View style={styles.paymentManagerEditPayment}>
      {/* Header */}
      <View style={styles.maintext}>
        <Text style={styles.lastMinutePantryContainer}>
          <Text style={styles.lastMinute}>Last Minute</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.pantry}>Pantry</Text>
        </Text>
      </View>

      {/* Title and navigation icons */}
      <View style={styles.arrowBackParent}>
        <Image style={styles.arrowBackIcon} resizeMode="cover" source={require('../../../assets/images/vendor/backarrow.png')} />
        <Text style={styles.editPayment}>Edit Payment</Text>
        <Image style={styles.frameChild} resizeMode="cover" source={require('../../../assets/images/vendor/Vnav1.png')} />
      </View>

      {/* Form Fields */}
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Payment_ID</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Payment ID"
            value={paymentId}
            onChangeText={setPaymentId}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Product_Name</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Product Name"
            value={productName}
            onChangeText={setProductName}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Due_Date</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Due Date (YYYY-MM-DD)"
            value={dueDate}
            onChangeText={setDueDate}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Time</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Time (HH:MM AM/PM)"
            value={time}
            onChangeText={setTime}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Total_Amount</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Total Amount"
            keyboardType="numeric"
            value={totalAmount}
            onChangeText={setTotalAmount}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Status</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Status (verified/unverified)"
            value={status}
            onChangeText={setStatus}
          />
        </View>
      </View>

      {/* Edit Payment Button */}
      <Pressable style={styles.buttonWrapper} onPress={handleEditPayment}>
        <Text style={styles.buttonText}>Edit Payment</Text>
      </Pressable>
    </View>
  );
};

export default PaymentManagerEditPayment;
