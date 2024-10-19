import React, { useEffect, useState } from "react";
import { Image, View, Text, ScrollView, Pressable, Alert } from "react-native";
import axios from "axios";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "../../styles/Vendor/VendorProfileScreenStyles"; // Import external styles
import { IP_ADDRESS } from "@env"; // Ensure you have this set up in your .env file

const VendorProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { vendorId } = route.params; // Retrieve vendorId from route params
  const [vendorData, setVendorData] = useState(null);

  const fetchVendorData = async () => {
    try {
      const response = await axios.get(`http://${IP_ADDRESS}:5000/vendors/${vendorId}`);
      setVendorData(response.data);
    } catch (error) {
      console.error("Error fetching vendor data:", error);
      Alert.alert("Error", "Failed to load vendor data.");
    }
  };

  useEffect(() => {
    if (vendorId) {
      fetchVendorData(); // Fetch vendor information based on vendorId
    }
  }, [vendorId]);

  if (!vendorData) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading vendor information...</Text>
      </View>
    );
  }

  return (
    <View style={styles.vendorProfile}>
      {/* Display Vendor Name */}
      <View style={styles.vendorHeader}>
        <Text style={styles.vendorName}>{vendorData.name}</Text>
        <Text style={styles.contactEmail}>{vendorData.email}</Text>
        <Text style={styles.phoneNumber}>{vendorData.phone}</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.frameScrollViewContent}>
        {/* Membership Info */}
        <View style={styles.membershipSection}>
          <Text style={styles.membershipStatus}>Membership: {vendorData.membershipLevel || 'Standard'}</Text>
          <Text style={styles.membershipExpiry}>Expires on {vendorData.membershipExpiry || 'N/A'}</Text>
          <Pressable style={styles.manageMembershipButton}>
            <Text style={styles.manageMembershipText}>Manage Membership</Text>
          </Pressable>
        </View>

        {/* Vendor Stats */}
        <View style={styles.statsSection}>
          <Text style={styles.statsTitle}>Vendor Stats</Text>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Total Products Sold:</Text>
            <Text style={styles.statValue}>{vendorData.totalProductsSold || '0'}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Total Revenue:</Text>
            <Text style={styles.statValue}>LKR {vendorData.totalRevenue || '0'}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Average Rating:</Text>
            <Text style={styles.statValue}>{vendorData.averageRating || 'N/A'}</Text>
          </View>
        </View>

        {/* Vendor Settings */}
        <View style={styles.settingsSection}>
          <Text style={styles.settingsTitle}>Settings</Text>
          <Pressable style={styles.settingsOption}>
            <Text style={styles.optionText}>Account Settings</Text>
            <Image style={styles.arrowIcon} source={require('../../assets/images/vendor/arrow_right.png')} />
          </Pressable>
          <Pressable style={styles.settingsOption}>
            <Text style={styles.optionText}>Payment Methods</Text>
            <Image style={styles.arrowIcon} source={require('../../assets/images/vendor/arrow_right.png')} />
          </Pressable>
          <Pressable style={styles.settingsOption}>
            <Text style={styles.optionText}>Notification Preferences</Text>
            <Image style={styles.arrowIcon} source={require('../../assets/images/vendor/arrow_right.png')} />
          </Pressable>
          <Pressable style={styles.settingsOption}>
            <Text style={styles.optionText}>Order History</Text>
            <Image style={styles.arrowIcon} source={require('../../assets/images/vendor/arrow_right.png')} />
          </Pressable>
        </View>

        {/* Logout */}
        <Pressable style={styles.logoutButton} onPress={() => navigation.navigate('VendorLoginScreen')}>
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('VendorDashboard', { vendorId })}>
          <Image style={styles.navIcon} source={require('../../assets/images/vendor/Vnav1.png')} />
          <Text style={styles.navText}>Dashboard</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('VendorProducts', { vendorId })}>
          <Image style={styles.navIcon} source={require('../../assets/images/vendor/Vnav2.png')} />
          <Text style={styles.navText}>Products</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('VendorOrdersScreen', { vendorId })}>
          <Image style={styles.navIcon} source={require('../../assets/images/vendor/Vnav3.png')} />
          <Text style={styles.navText}>Orders</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('VendorOrdersScreen', { vendorId })}>
          <Image style={styles.navIcon} source={require('../../assets/images/vendor/Vnav4.png')} />
          <Text style={styles.navText}>Notifications</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('VendorProfileScreen', { vendorId })}>
          <Image style={styles.navIcon} source={require('../../assets/images/vendor/Vnav5-active.png')} />
          <Text style={[styles.navText, { color: '#109415' }]}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default VendorProfileScreen;
