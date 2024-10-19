// AdminNotificationDashboard.js
import React, { useState, useEffect } from 'react'; // Correct import of useState and useEffect
import { Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import axios from 'axios'; // Axios for handling HTTP requests
import styles from '../../../styles/Notification/admin/AdminNotificationDashboardStyles'; // Import the stylesheet
import { useNavigation } from '@react-navigation/native';
import { IP_ADDRESS } from "@env";

const AdminNotificationDashboard = () => {

  const [notifications, setNotifications] = useState([]);
  const [filteredNotifications, setFilteredNotifications] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All'); // Track the selected filter
  const navigation = useNavigation();

  // Fetch all notifications when the component mounts
  useEffect(() => {
    fetchNotifications();
  }, []);

  // Function to fetch notifications from the backend
  const fetchNotifications = async () => {
    try {
      console.log("IP Address: ", IP_ADDRESS);
      const response = await axios.get(`http://${IP_ADDRESS}:5000/notifications/`); // Replace with your backend URL
      setNotifications(response.data);
      setFilteredNotifications(response.data); // Set filtered notifications to all initially
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  // Function to delete a notification
  const deleteNotification = async (id) => {
    try {
      console.log("IP Address: ", IP_ADDRESS);
      await axios.delete(`http://${IP_ADDRESS}:5000/notifications/${id}`);
      Alert.alert('Success', 'Notification deleted successfully');
      fetchNotifications(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting notification:', error);
      Alert.alert('Error', 'Failed to delete notification');
    }
  };

  // Function to handle managing (editing) a notification
  const manageNotification = (id) => {
    // Navigate to the Edit Notification form and pass the notification ID as a parameter
    navigation.navigate('AdminEditNotificationForm', { notificationId: id });
  };

  // Function to filter notifications based on user role
  const filterNotifications = (role) => {
    setSelectedFilter(role);
    if (role === 'All') {
      setFilteredNotifications(notifications);
    } else {
      const filtered = notifications.filter((notification) => notification.userRole === role);
      setFilteredNotifications(filtered);
    }
  };

  return (
    <View style={styles.adminNotificationDashboard}>
      {/* Header Section */}
      <View style={[styles.maintext, styles.maintextPosition]}>
        <Text style={styles.lastMinutePantryContainer}>
          <Text style={styles.lastMinute}>Last Minute</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.pantry}>Pantry</Text>
        </Text>
      </View>

      {/* Notification Dashboard Title */}
      <View style={styles.myProducts}>
        <Text style={styles.notificationDashboard}>Notification Dashboard</Text>
        <Image
          style={[styles.myProductsChild, styles.productsLayout]}
          resizeMode="cover"
          source={require('../../../assets/images/vendor/search.png')}
        />
        <Image
          style={[styles.myProductsItem, styles.productsLayout]}
          resizeMode="cover"
          source={require('../../../assets/images/vendor/Vnav1.png')}
        />
      </View>

      

      {/* Manage Notification Button */}
      <TouchableOpacity 
        style={[styles.buttonWrapper, styles.buttonWrapperFlexBox]} 
        onPress={() => navigation.navigate('AdminNotificationForm')} // Corrected navigation
      >
        <Text style={styles.button}>Add Notification</Text>
      </TouchableOpacity>

      {/* Filter Buttons */}
      <View style={styles.filterButtons}>
        <TouchableOpacity
          style={[
            styles.newItemsWrapper,
            styles.wrapperShadowBox,
            selectedFilter === 'All' && styles.activeFilter, // Add active style if selected
          ]}
          onPress={() => filterNotifications('All')}
        >
          <Text style={styles.newItems}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.offersWrapper,
            styles.wrapperShadowBox,
            selectedFilter === 'Vendor' && styles.activeFilter, // Add active style if selected
          ]}
          onPress={() => filterNotifications('Vendor')}
        >
          <Text style={styles.newItems}>Vendor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ordersWrapper,
            styles.wrapperShadowBox,
            selectedFilter === 'Customer' && styles.activeFilter, // Add active style if selected
          ]}
          onPress={() => filterNotifications('Customer')}
        >
          <Text style={styles.newItems}>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.driverWrapper,
            styles.wrapperShadowBox,
            selectedFilter === 'Driver' && styles.activeFilter, // Add active style if selected
          ]}
          onPress={() => filterNotifications('Driver')}
        >
          <Text style={styles.newItems}>Driver</Text>
        </TouchableOpacity>
      </View>

      {/* Notification Items */}
      <ScrollView style={styles.notificationsList}>
        {filteredNotifications.map((notification) => (
          <View key={notification._id} style={styles.notificationItem}>
            <Text style={styles.notificationTitle}>
              {notification.itemName}
              <Text style={styles.expiryText}>
                {' '}
                Expires in {Math.ceil((new Date(notification.expiryDate) - new Date()) / (1000 * 60 * 60 * 24))} days
              </Text>
            </Text>
            <Text style={styles.itemID}>Item ID - {notification._id}</Text>
            <View style={styles.itemContent}>
              {notification.image && (
                <Image
                  style={styles.itemImage}
                  resizeMode="contain"
                  source={{ uri: `http://${IP_ADDRESS}:5000/${notification.image}` }}
                />
              )}
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.manageButton}
                  onPress={() => manageNotification(notification._id)}
                >
                  <Text style={styles.buttonText}>Manage</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteNotification(notification._id)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.userType}>User - {notification.userRole}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AdminNotificationDashboard;
