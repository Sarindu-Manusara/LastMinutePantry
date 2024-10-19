import React, {useCallback, useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../../styles/Customer/CustomerOrderConfirmationStyles';
import OrderStage1 from '../../assets/images/customer/OrderStage1.png';
import download from '../../assets/images/customer/download.png';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import {Buffer} from 'buffer';
import axios from 'axios';

const CustomerOrderConfirmation = ({route}) => {
  const {orderData} = route.params;
  const navigation = useNavigation();
  const [data, setData] = useState({});

  const baseUrl = 'http://192.168.130.190:5000';

  const deleteOrder = async orderNo => {
    try {
      await fetch(`${baseUrl}/api/orders/${orderNo}`, {
        method: 'DELETE',
      });
      alert('Order deleted successfully');
      navigation.navigate('Select a Store');
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchOrderDetails();
    }, []),
  );

  const handleDownloadPdf = async () => {
    const response = await axios.get(
      `${baseUrl}/api/orders/report/${orderData.OrderNo}`,
      {
        responseType: 'arraybuffer',
      },
    );

    const base64 = Buffer.from(response.data, 'binary').toString('base64');
    const path = `${RNFS.DocumentDirectoryPath}/report.pdf`;
    await RNFS.writeFile(path, base64, 'base64');
    await Share.open({url: `file://${path}`, title: 'Download Report'});
  };

  const fetchOrderDetails = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/api/orders/${orderData.OrderNo}`,
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching order details:', error);
    }
  };

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={styles.rootWrapper}>
      <View style={styles.subWrapper}>
        <Image source={OrderStage1} style={styles.stageImage} />

        <View style={styles.customerDetails}>
          <View style={styles.detail}>
            <Text style={styles.text}>Order Number</Text>
            <Text style={styles.text}>{data.OrderNo}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.text}>Customer Name</Text>
            <Text style={styles.text}>{data.Name}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.text}>Contact Number</Text>
            <Text style={styles.text}>{data.Phone}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.text}>NIC</Text>
            <Text style={styles.text}>{data.NIC}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.text}>Email</Text>
            <Text style={styles.text}>{data.Email}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.text}>Address</Text>
            <Text style={styles.text}>{data.Address}</Text>
          </View>
        </View>

        <View style={styles.orderDetails}>
          <View>
            {data?.cartItems?.map((item, index) => (
              <View key={index} style={styles.detail}>
                <Text style={styles.text}>{item.productName}</Text>
                <Text style={styles.text}>Rs. {item.price}</Text>
                <Text style={styles.text}>Quantity {item.quantity}</Text>
              </View>
            ))}
            <View style={styles.detail}>
              <Text style={styles.text}>SubTotal</Text>
              <Text style={styles.text}>Rs. {data.total}</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.text}>Discount</Text>
              <Text style={styles.text}>Rs. {data.discount}</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.text}>Total</Text>
              <Text style={styles.text}>Rs. {data.subtotal}</Text>
            </View>
          </View>
        </View>
        <View style={styles.oType}>
          <Text> Order Type : {data.OrderType}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            handleDownloadPdf();
          }}
          style={styles.dwnloadBtn}>
          <Image source={download} style={styles.downloadImage} />
          <Text style={styles.downloadButtonText}>Download Pdf</Text>
        </TouchableOpacity>

        <View style={styles.btnWrapper}>
          <TouchableOpacity
            style={styles.updateBtn}
            onPress={() => navigation.navigate('Order edit', {order: data})}>
            <Text style={styles.homeButtonText}>Update Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              deleteOrder(data.OrderNo);
            }}
            style={styles.dltBtn}>
            <Text style={styles.homeButtonText}>Delete Order</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.paymentBtnWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CustomerCreditCardScreen', { orderData });
            }}
            style={styles.paymentBtn}>
            <Text style={styles.homeButtonText}>Go To Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomerOrderConfirmation;
