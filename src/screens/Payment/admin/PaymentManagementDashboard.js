import React, { useState, useEffect } from 'react';
import { Text, View, Image, Pressable, Alert, ScrollView, TextInput, Dimensions } from 'react-native';
import axios from 'axios'; // Axios for handling HTTP requests
import RNHTMLtoPDF from 'react-native-html-to-pdf'; // Library for generating PDFs
import styles from '../../../styles/Payment/admin/PaymentManagementDashboardStyles'; // Import the stylesheet
import { IP_ADDRESS } from "@env";
import Share from 'react-native-share'; // Import for sharing the generated report

const PaymentManagerPaymnetDash = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  const [payments, setPayments] = useState([]);
  const [filteredPayments, setFilteredPayments] = useState([]); // State for filtered payments
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Fetch all payment details when the component mounts
  useEffect(() => {
    fetchPayments();
  }, []);

  // Function to fetch payments from the backend
  const fetchPayments = async () => {
    try {
      console.log("IP Address: ", IP_ADDRESS);
      const response = await axios.get(`http://${IP_ADDRESS}:5000/payments/`); // Replace with your backend URL
      setPayments(response.data);
      setFilteredPayments(response.data); // Initialize filtered payments with all payments
    } catch (error) {
      console.error('Error fetching payments:', error);
      Alert.alert('Error', 'Failed to fetch payment details');
    }
  };

  // Function to delete a payment
  const deletePayment = async (id) => {
    try {
      await axios.delete(`http://${IP_ADDRESS}:5000/payments/${id}`);
      Alert.alert('Success', 'Payment deleted successfully');
      fetchPayments(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting payment:', error);
      Alert.alert('Error', 'Failed to delete payment');
    }
  };

  // Function to handle editing a payment
  const editPayment = (id) => {
    navigation.navigate('PaymentManagerEditPayment', { paymentId: id }); // Navigate to the EditPayment screen
  };

  // Function to generate a report for the selected payment and share the PDF
  const generateReport = async (payment) => {
    try {
      // Define the HTML content for the PDF
      const htmlContent = `
        <h1>Payment Report</h1>
        <p><strong>Payment ID:</strong> ${payment.paymentId}</p>
        <p><strong>Product Name:</strong> ${payment.productName}</p>
        <p><strong>Due Date:</strong> ${new Date(payment.dueDate).toDateString()}</p>
        <p><strong>Total Amount:</strong> Rs.${payment.totalAmount}</p>
      `;

      // Generate the PDF
      const options = {
        html: htmlContent,
        fileName: `Payment_Report_${payment.paymentId}`,
        directory: 'Download',
      };

      const file = await RNHTMLtoPDF.convert(options);

      // Share the generated PDF
      const shareOptions = {
        title: 'Share PDF Report',
        url: `file://${file.filePath}`,
        type: 'application/pdf',
        showAppsToView: true,
      };

      await Share.open(shareOptions);
    } catch (error) {
      console.error('Error generating report:', error);
      Alert.alert('Error', 'Failed to generate or share PDF report');
    }
  };

  // Function to handle search by payment ID
  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term state
    const filtered = payments.filter(payment =>
      payment.paymentId.toLowerCase().includes(term.toLowerCase()) // Case-insensitive search by payment ID
    );
    setFilteredPayments(filtered); // Update the filtered payments state
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={styles.lastMinute}>Last Minute</Text>
          <Text> </Text>
          <Text style={styles.pantry}>Pantry</Text>
        </Text>
      </View>

      {/* Dashboard Header */}
      <View style={styles.dashboardHeader}>
        <Text style={styles.dashboardTitle}>Payment Manager Dashboard</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search by Payment ID..."
        placeholderTextColor={'#000000'}
        value={searchTerm}
        onChangeText={handleSearch}
      />

      {/* Payments List */}
      <ScrollView>
        {filteredPayments.map((payment) => (
          <View
            key={payment._id}
            style={[styles.cardContainer, screenWidth < 768 ? styles.cardMobile : styles.cardDesktop]}
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Pay_ID: {payment.paymentId}</Text>
              <Text style={styles.cardText}>Product Name: {payment.productName}</Text>
              <Text style={styles.cardText}>Due Date: {new Date(payment.dueDate).toDateString()}</Text>
              <Text style={styles.cardText}>Total Amount: Rs.{payment.totalAmount}</Text>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              <Pressable style={styles.iconButton} onPress={() => generateReport(payment)}>
                <Image style={styles.icon} source={require('../../../assets/images/vendor/Admin/report.png')} />
              </Pressable>
              <Pressable style={styles.iconButton} onPress={() => editPayment(payment._id)}>
                <Image style={styles.icon} source={require('../../../assets/images/vendor/Admin/edit.png')} />
              </Pressable>
              <Pressable style={styles.iconButton} onPress={() => deletePayment(payment._id)}>
                <Image style={styles.icon} source={require('../../../assets/images/vendor/Admin/delete.png')} />
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Plus Button to Add New Payment */}
      <Pressable
        style={styles.plusButton}
        onPress={() => navigation.navigate('PaymentManagerAddPayment')} // Navigate to Add Payment form
      >
        <Image style={styles.plusIcon} source={require('../../../assets/images/vendor/Admin/plusicon.png')} />
      </Pressable>
    </View>
  );
};

export default PaymentManagerPaymnetDash;
