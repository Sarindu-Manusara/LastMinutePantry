import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import styles from '../../styles/Authentication/AdminLoginFormStyles'; // Import the separated stylesheet
import { IP_ADDRESS } from "@env";

const AdminLoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    // Basic validation to ensure fields are not empty
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
  
    try {
      // Make a POST request to login
      console.log("IP Address: ", IP_ADDRESS);
      const response = await axios.post(`http://${IP_ADDRESS}:5000/auth/admin/login`, {
        email,
        password,
      });
  
      const { name, role } = response.data;
  
      // Mapping of roles to screens
      const roleNavigationMap = {
        'Vendor Manager': 'VendorManagerScreenVendor',
        'User Manager': 'UserManagerDashboard',
        'Review Manager': 'ReviewAdminDashboard',
        'Payment Manager': 'PaymentManagerPaymnetDash',
        'Notification Manager': 'AdminNotificationDashboard',
        'Delivery Manager': 'DeliveryManagerDashboard',
        'Order and Reservation Manager': 'OrderHomeScreen',
        'Delivery Personnel Manager': 'DeliveryPersonnelManagerDashboard',
      };
  
      // Logic to redirect based on role and name
      if (role === 'admin') {
        const targetScreen = roleNavigationMap[name];
        if (targetScreen) {
          navigation.navigate(targetScreen);
        } else {
          Alert.alert('Unknown Manager');
        }
      } else {
        Alert.alert('You are not authorized');
      }
    } catch (error) {
      // Log the full error for debugging purposes
      console.log('Login Error:', error);
  
      // Handle different error structures gracefully
      if (error.response && error.response.data && error.response.data.message) {
        Alert.alert('Login Failed', error.response.data.message);
      } else {
        Alert.alert('Login Failed', 'Something went wrong. Please try again.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Text style={styles.lastMinute}>Last Minute</Text> <Text style={styles.pantry}>Pantry</Text>
        </Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>LOG IN</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Admin Email"
          placeholderTextColor="#000000"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#000000"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AdminLoginForm;
