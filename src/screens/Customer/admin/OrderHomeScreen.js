import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import info from '../../../assets/images/customer/info.png';
import edit from '../../../assets/images/customer/edit2.png';
import deleteIcon from '../../../assets/images/customer/delete3.png';
import CustomerAdminHeader from '../../CustomerAdminHeader';
import backArrow from '../../../assets/images/customer/backArrow.png';
import report from '../../../assets/images/customer/report.png';
import styles from '../../../styles/Customer/admin/OrderHomeScreenStyles';

export default function OrderHomeScreen() {
  const baseUrl = 'http://192.168.130.190:5000';

  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/orders`);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchOrders();
    }, []),
  );

  const deleteOrder = async orderNo => {
    try {
      await fetch(`${baseUrl}/api/orders/${orderNo}`, {
        method: 'DELETE',
      });
      Alert.alert('Success', 'Order deleted successfully');
      fetchOrders();
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <View style={styles.container}>
      {navigation.canGoBack() && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image name="arrow-back" size={24} source={backArrow} />
        </TouchableOpacity>
      )}
      <CustomerAdminHeader name="Order Management Dashboard" />
      <FlatList
        data={orders}
        keyExtractor={item => item.OrderNo.toString()}
        renderItem={({item}) => (
          <View style={styles.orderListWrapper}>
            <View style={styles.orderItem}>
              <Text style={styles.orderNumText}>{item.OrderNo}</Text>
              <View style={styles.actionWrapper}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Order Details', {
                      orderNo: item.OrderNo,
                    })
                  }>
                  <Image source={info} style={styles.headerIcons} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Order Edit', {order: item})
                  }>
                  <Image source={edit} style={styles.headerIcons} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteOrder(item.OrderNo)}>
                  <Image source={deleteIcon} style={styles.headerIcons} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Order Create')}
        style={styles.btn}>
        <Text style={styles.createordertext}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Generate Order')}
        style={styles.pdfbtn}>
        <Image source={report} style={styles.reportIcn} />
        <Text style={styles.reporTxt}>Generate Report</Text>
      </TouchableOpacity>
      
    </View>
  );
}
