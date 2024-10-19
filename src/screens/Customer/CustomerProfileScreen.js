import React, { useEffect, useState } from "react";
import { Image, View, Text, ScrollView, Pressable, ActivityIndicator, Alert } from "react-native";
import axios from "axios";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from '../../styles/Customer/CustomerProfileScreenStyles';
import { IP_ADDRESS } from "@env"; 

const CustomerProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { customerId } = route.params; // Retrieve userId from route params
  const [customerData, setCustomerData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  const fetchCustomerData = async () => {
    try {
      // Ensure the IP_ADDRESS is properly fetched from your .env file
      console.log(`Fetching data from: http://${IP_ADDRESS}:5000/users/users/${customerId}`);
      
      // Fetch customer data from API based on userId
      const response = await axios.get(`http://${IP_ADDRESS}:5000/users/users/${customerId}`);
      console.log("Customer Data:", response.data); // Log data for debugging
      
      setCustomerData(response.data);
      setLoading(false);
    } catch (error) {
      // Detailed error logging for better troubleshooting
      console.error("Error fetching customer data:", error.response ? error.response.data : error.message);
      Alert.alert("Error", "Failed to load customer data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (customerId) {
      fetchCustomerData(); // Fetch customer data based on userId
    }
  }, [customerId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text style={styles.loadingText}>Loading customer information...</Text>
      </View>
    );
  }

  if (!customerData) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No customer data found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.userProfile}>
      {/* Profile Section */}
      <View style={styles.frameParent}>
        <Image source={require('../../assets/images/customer/addprofilepic.png')} style={styles.profileIcon} />
        <Text style={styles.sarinduSamarasekara}>{customerData.name}</Text>
        <Text style={styles.blueMember1}>{customerData.email}</Text>
        <Text style={styles.blueMember}>BLUE MEMBER</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.frameView}>
        {/* Menu Options */}
        <Pressable style={styles.parentShadowBox} onPress={() => navigation.navigate('EditCustomerProfile', { customerId })}>
          <Text style={styles.viewProfile}>View Profile</Text>
        </Pressable>
        <Pressable style={styles.parentShadowBox}>
          <Text style={styles.viewProfile}>Payment Cards</Text>
        </Pressable>
        <Pressable style={styles.parentShadowBox}>
          <Text style={styles.viewProfile}>Payment Details</Text>
        </Pressable>
        <Pressable style={styles.parentShadowBox}>
          <Text style={styles.viewProfile}>Order History</Text>
        </Pressable>
        <Pressable style={styles.parentShadowBox}>
          <Text style={styles.viewProfile}>Notification</Text>
        </Pressable>
        <Pressable style={styles.parentShadowBox}>
          <Text style={styles.viewProfile}>Favorites</Text>
        </Pressable>

        <Pressable style={styles.logoutButton} onPress={() => navigation.navigate('UserLoginCustomer')}>
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.navigationBar}>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('CustomerHomeScreen', { customerId })}>
          <Image style={styles.navIcon} source={require('../../assets/images/customer/Cnav1.png')} />
          <Text style={styles.navText}>Home</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('SearchScreen', { customerId })}>
          <Image style={styles.navIcon} source={require('../../assets/images/customer/Cnav2.png')} />
          <Text style={styles.navText}>Search</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('OrdersScreen', { customerId })}>
          <Image style={styles.navIcon} source={require('../../assets/images/customer/Cnav3.png')} />
          <Text style={styles.navText}>Orders</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('NotificationsScreen', { customerId })}>
          <Image style={styles.navIcon} source={require('../../assets/images/customer/Cnav4.png')} />
          <Text style={styles.navText}>Notifications</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('CustomerProfileScreen', { customerId })}>
          <Image style={styles.navIcon} source={require('../../assets/images/customer/Cnav5-active.png')} />
          <Text style={[styles.navText, { color: '#109415' }]}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomerProfileScreen;
