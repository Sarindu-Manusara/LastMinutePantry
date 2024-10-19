import React, { useState, useEffect } from 'react';
import { Text, View, Image, Pressable, Alert, ScrollView, TextInput, Dimensions } from 'react-native';
import axios from 'axios'; // Axios for handling HTTP requests
import RNHTMLtoPDF from 'react-native-html-to-pdf'; // Library for generating PDFs
import styles from '../../../styles/Delivery/admin/DeliveryManagerDashboardStyles'; // Import the stylesheet for Delivery Manager
import { IP_ADDRESS } from "@env"; // Your IP address for API
import Share from 'react-native-share'; // Import for sharing the generated report

const DeliveryManagerDashboard = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  const [deliveries, setDeliveries] = useState([]);
  const [filteredDeliveries, setFilteredDeliveries] = useState([]); // State for filtered deliveries
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Fetch all delivery details when the component mounts
  useEffect(() => {
    fetchDeliveries();
  }, []);

  // Function to fetch deliveries from the backend
  const fetchDeliveries = async () => {
    try {
      const response = await axios.get(`http://${IP_ADDRESS}:5000/deliveries/deliveries`); // Replace with your backend URL
      setDeliveries(response.data);
      setFilteredDeliveries(response.data); // Initialize filtered deliveries with all deliveries
    } catch (error) {
      console.error('Error fetching deliveries:', error);
      Alert.alert('Error', 'Failed to fetch delivery details');
    }
  };

  // Function to delete a delivery
  const deleteDelivery = async (id) => {
    try {
      await axios.delete(`http://${IP_ADDRESS}:5000/deliveries/deliveries/${id}`);
      Alert.alert('Success', 'Delivery deleted successfully');
      fetchDeliveries(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting delivery:', error);
      Alert.alert('Error', 'Failed to delete delivery');
    }
  };

  // Function to handle editing a delivery
  const editDelivery = (id) => {
    navigation.navigate('DeliveryManagerEditDelivery', { deliveryId: id }); // Navigate to the EditDelivery screen
  };

  // Function to generate a report for the selected delivery and share the PDF
  const generateReport = async (delivery) => {
    try {
      // Define the HTML content for the PDF
      const htmlContent = `
        <h1>Delivery Report</h1>
        <p><strong>Delivery ID:</strong> ${delivery.deliveryId}</p>
        <p><strong>Address:</strong> ${delivery.address}</p>
        <p><strong>Postal Code:</strong> ${delivery.postalCode}</p>
        <p><strong>Date:</strong> ${new Date(delivery.date).toDateString()}</p>
        <p><strong>Delivery Note:</strong> ${delivery.deliveryNote || 'N/A'}</p>
      `;

      // Generate the PDF
      const options = {
        html: htmlContent,
        fileName: `Delivery_Report_${delivery.deliveryId}`,
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

  // Function to handle search by delivery address
  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term state
    const filtered = deliveries.filter(delivery =>
      delivery.address.toLowerCase().includes(term.toLowerCase()) // Case-insensitive search by address
    );
    setFilteredDeliveries(filtered); // Update the filtered deliveries state
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
        <Text style={styles.dashboardTitle}>Delivery Manager Dashboard</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search by Address..."
        placeholderTextColor={'#000000'}
        value={searchTerm}
        onChangeText={handleSearch}
      />

      {/* Deliveries List */}
      <ScrollView>
        {filteredDeliveries.map((delivery) => (
          <View
            key={delivery._id}
            style={[styles.cardContainer, screenWidth < 768 ? styles.cardMobile : styles.cardDesktop]}
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Delivery ID: {delivery.deliveryId}</Text>
              <Text style={styles.cardText}>Address: {delivery.address}</Text>
              <Text style={styles.cardText}>Postal Code: {delivery.postalCode}</Text>
              <Text style={styles.cardText}>Date: {new Date(delivery.date).toDateString()}</Text>
              <Text style={styles.cardText}>Delivery Note: {delivery.deliveryNote || 'N/A'}</Text>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              <Pressable style={styles.iconButton} onPress={() => generateReport(delivery)}>
                <Image style={styles.icon} source={require('../../../assets/images/vendor/Admin/report.png')} />
              </Pressable>
              <Pressable style={styles.iconButton} onPress={() => editDelivery(delivery._id)}>
                <Image style={styles.icon} source={require('../../../assets/images/vendor/Admin/edit.png')} />
              </Pressable>
              <Pressable style={styles.iconButton} onPress={() => deleteDelivery(delivery._id)}>
                <Image style={styles.icon} source={require('../../../assets/images/vendor/Admin/delete.png')} />
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>

      
    </View>
  );
};

export default DeliveryManagerDashboard;
