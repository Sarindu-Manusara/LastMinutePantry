import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import CustomerAdminHeader from '../../CustomerAdminHeader';
import edit from '../../../assets/images/customer/edit2.png';
import deleteIcon from '../../../assets/images/customer/delete3.png';
import styles from '../../../styles/Customer/admin/OrderDetailsScreenStyles';

import backArrow from '../../../assets/images/customer/backArrow.png';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

export default function OrderDetailsScreen({route, navigation}) {
  const baseUrl = 'http://192.168.130.190:5000';

  const {orderNo} = route.params;
  const [order, setOrder] = useState(null);
  const goback = useNavigation();

  useFocusEffect(
    useCallback(() => {
      fetchOrderDetails();
    }, []),
  );

  const fetchOrderDetails = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/orders/${orderNo}`);
      const data = await response.json();
      setOrder(data);
    } catch (error) {
      console.error('Error fetching order details:', error);
    }
  };

  if (!order) {
    return <Text>Loading...</Text>;
  }

  const deleteOrder = async orderNo => {
    try {
      await fetch(`${baseUrl}/api/orders/${orderNo}`, {
        method: 'DELETE',
      });
      Alert.alert('Success', 'Order deleted successfully', [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {goback.canGoBack() && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image name="arrow-back" size={24} source={backArrow} />
        </TouchableOpacity>
      )}
      <CustomerAdminHeader name="Order Details Page" />
      <View style={styles.detailsWrapper}>
        <Text style={styles.name}>
          Order Number: <Text style={styles.value}>{order.OrderNo}</Text>
        </Text>

        <Text style={styles.name}>Provided Contact Details</Text>
        <View style={styles.contactsWrapper}>
          <Text style={{fontSize: 19}}>Phone: {order.Phone}</Text>
          <Text style={{fontSize: 19}}>Email: {order.Email}</Text>
        </View>

        <Text style={styles.name}>
          Shopped from: <Text style={styles.value}>Cargils Foodcity</Text>
        </Text>

        <Text style={styles.name}>
          Order Type: <Text style={styles.value}>{order.OrderType}</Text>
        </Text>
        <Text style={styles.name}>
          Delivery Address: <Text style={styles.value}>{order.Address}</Text>
        </Text>
      </View>

      {/* Display Cart Items */}
      <View style={styles.cartItemsWrapper}>
        {/* todo */}
        {/* <Text style={styles.cartTitle}>Products</Text> */}
        {order.cartItems.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemQuantity}>
              Quantity: {item.quantity}
            </Text>
            <Text style={styles.cartItemPrice}>
              Unit Price: Rs. {item.price.toFixed(2)}
            </Text>
          </View>
        ))}

        <Text style={[styles.name, styles.disc]}>
          Discount:{' '}
          <Text style={[styles.value, styles.disc]}>
            Rs. {} {order.discount} /=
          </Text>
        </Text>

        <Text style={[styles.name, styles.total]}>
          Total:{' '}
          <Text style={[styles.value, styles.total]}>
            Rs. {} {order.total} /=
          </Text>
        </Text>
      </View>

      <View style={styles.buttonWrpper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Order Edit', {order})}>
          <Image source={edit} style={styles.headerIcons} />
          <Text style={styles.btnText}>Edit Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => deleteOrder(order.OrderNo)}>
          <Image source={deleteIcon} style={styles.headerIcons} />
          <Text style={styles.btnText}>Delete Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
