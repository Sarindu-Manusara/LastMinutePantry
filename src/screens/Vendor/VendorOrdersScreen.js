import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Pressable, Image } from 'react-native';
import styles from '../../styles/Vendor/VendorOrdersScreenStyles';
import { useNavigation } from '@react-navigation/native';

const VendorOrdersScreen = () => {
const navigation = useNavigation();

  // Dummy data for orders
  const orders = [
    { id: 1, customer: 'Sarindu Samarasekara', items: 'Pizza, Soda', status: 'Pending' },
    { id: 2, customer: 'Tharaka Randeinya', items: 'Sauce Bottle, Creamsoda', status: 'Completed' },
    { id: 3, customer: 'Adam Thilakerathne', items: 'Astra Butter', status: 'Pending' },
    { id: 4, customer: 'Jenelia Dsouza', items: 'Bread, Milk', status: 'Pending' }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Last Minute Pantry</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {orders.map((order) => (
          <View key={order.id} style={styles.orderContainer}>
            <Text style={styles.orderId}>Order ID: {order.id}</Text>
            <Text style={styles.customerName}>Customer: {order.customer}</Text>
            <Text style={styles.orderItems}>Items: {order.items}</Text>
            <Text style={styles.status}>Status: {order.status}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, styles.completeButton]}>
                <Text style={styles.buttonText}>Complete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.cancelButton]}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
          <Image style={styles.navIcon} source={require('../../assets/images/vendor/Vnav1.png')} />
          <Text style={styles.navText}>Dashboard</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('VendorProducts')}>
          <Image style={styles.navIcon} source={require('../../assets/images/vendor/Vnav2.png')} />
          <Text style={styles.navText}>Products</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('VendorOrdersScreen')}>
          <Image style={styles.navIcon} source={require('../../assets/images/vendor/Vnav3-active.png')} />
          <Text style={[styles.navText, { color: '#109415' }]}>Orders</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Image style={styles.navIcon} source={require('../../assets/images/vendor/Vnav4.png')} />
          <Text style={styles.navText}>Notifications</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Image style={styles.navIcon} source={require('../../assets/images/vendor/Vnav5.png')} />
          <Text style={styles.navText}>Profile</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default VendorOrdersScreen;
