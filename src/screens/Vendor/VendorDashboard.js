import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, Pressable, ActivityIndicator } from 'react-native';
import styles from '../../styles/Vendor/vendorDashboardStyles';
import { useNavigation, useRoute } from '@react-navigation/native'; // For accessing navigation and route params
import { IP_ADDRESS } from '@env'; // To fetch IP address from environment file

const VendorDashboard = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Use to get vendorId passed from login
  const { vendorId } = route.params; // Extract vendorId passed to this screen
  const [vendorName, setVendorName] = useState('');
  const [loading, setLoading] = useState(true); // To handle loading state

  // Fetch vendor details using vendorId
  useEffect(() => {
    const fetchVendorDetails = async () => {
      try {
        const response = await fetch(`http://${IP_ADDRESS}:5000/vendors/${vendorId}`);
        const json = await response.json();
        
        if (response.ok) {
          setVendorName(json.name); // Set vendor name from the response
        } else {
          console.error('Error fetching vendor details:', json.message);
        }
      } catch (error) {
        console.error('Error fetching vendor details:', error);
      } finally {
        setLoading(false); // Hide the loader once data is fetched
      }
    };

    fetchVendorDetails();
  }, [vendorId]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>
          <Text style={styles.lastMinuteText}>Last Minute</Text> <Text style={styles.pantryText}>Pantry</Text>
        </Text>
      </View>

      <View style={styles.topBar}>
        <Pressable>
          <Image style={styles.icon} source={require('../../assets/images/vendor/placeholder-35.png')} />
        </Pressable>
        <Text style={styles.title}>Dashboard</Text>
        <Pressable>
          <Image style={styles.icon} source={require('../../assets/images/vendor/placeholder-40.png')} />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Greeting Section */}
        <View style={styles.greetingContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Text style={styles.greetingText}>Hello, {vendorName}</Text>
          )}
        </View>

        {/* Sales Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sales Overview</Text>
          <View style={styles.salesOverview}>
            <View style={styles.salesBox}>
              <Text style={styles.salesTitle}>Daily Sales</Text>
              <Text style={styles.salesAmount}>LKR 20,450/=</Text>
            </View>
            <View style={styles.salesBox}>
              <Text style={styles.salesTitle}>Weekly Sales</Text>
              <Text style={styles.salesAmount}>LKR 101,250/=</Text>
            </View>
          </View>
        </View>

        {/* Near-Expiry Products */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Near-Expiry Products</Text>
          <View style={styles.productList}>
            <View style={styles.productBox}>
              <Image style={styles.productImage} source={require('../../assets/images/vendor/placeholder-41.png')} />
              <Text style={styles.Otext}>Tomato Sauce</Text>
              <Text style={styles.stock}>Stock: 5</Text>
            </View>
            <View style={styles.productBox}>
              <Image style={styles.productImage} source={require('../../assets/images/vendor/placeholder-42.png')} />
              <Text style={styles.Otext}>Astra Butter</Text>
              <Text style={styles.stock}>Stock: 3</Text>
            </View>
          </View>
        </View>

        {/* Pending Orders */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pending Orders</Text>
          <View style={styles.orderBox}>
            <Text style={styles.Otext}>Order #123 - Processing</Text>
            <Text style={styles.Otext}>Customer: Sarindu Samarasekara</Text>
            <Pressable style={styles.readyButton}>
              <Text style={styles.buttonText}>Mark as Ready</Text>
            </Pressable>
          </View>
          <View style={styles.orderBox}>
            <Text style={styles.Otext}>Order #124 - Ready for Pickup</Text>
            <Text style={styles.Otext}>Customer: Tharaka Randeniya</Text>
            <Pressable style={styles.readyButton}>
              <Text style={styles.buttonText}>Mark as Ready</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
          <Image style={styles.navIcon} source={require('../../assets/images/vendor/Vnav1-active.png')} />
          <Text style={[styles.navText, { color: '#109415' }]}>Dashboard</Text>
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
          <Image style={styles.navIcon} source={require('../../assets/images/vendor/Vnav5.png')} />
          <Text style={styles.navText}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default VendorDashboard;
