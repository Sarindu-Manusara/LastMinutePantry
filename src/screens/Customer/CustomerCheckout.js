// CustomerCheckout.js
import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native'; // Correct import for the checkbox
import styles from '../../styles/Customer/CustomerCheckoutStyles'; // Importing the external stylesheet

const CustomerCheckout = () => {
  return (
    <View style={styles.CustomerCheckout}>
      <Text style={styles.CustomerCheckoutTitle}>Checkout</Text>
    </View>
  );
};

export default CustomerCheckout;
