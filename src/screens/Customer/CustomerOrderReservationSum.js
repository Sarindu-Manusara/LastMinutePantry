import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import OrderStage1 from '../../assets/images/customer/OrderStage1.png';
import name from '../../assets/images/customer/name.png';
import nic from '../../assets/images/customer/nic.png';
import phone from '../../assets/images/customer/phone.png';
import atSign from '../../assets/images/customer/atSign.png';
import styles from '../../styles/Customer/CustomerOrderReservationSumStyle';

import backArrow from '../../assets/images/customer/backArrow.png';
import {useNavigation} from '@react-navigation/native';

const CustomerOrderReservationSum = ({route, navigation}) => {
  const {type, cartItems, subtotal, discount, total} = route.params;

  const goback = useNavigation();

  const [formData, setFormData] = useState({
    name: 'gihan',
    phone: '0710816191',
    nic: '200011902707',
    email: 'gihan@gmail.com',
    address: 'asdasdsad', 
    agree: false,
  });

  const handleInputChange = (field, value) => {
    setFormData({...formData, [field]: value});
  };

  const handleSubmit = async () => {
    if (!formData.agree) {
      Alert.alert('Error', 'Please agree to the terms and conditions');
      return;
    }
  
    const validOrderType = type === 'Reservation' ? 'Pickup' : type; 
    const orderData = {
      OrderNo: `ORD-${Date.now()}`,
      Name: formData.name,
      Phone: formData.phone,
      NIC: formData.nic,
      Email: formData.email,
      Address: formData.address,
      OrderType: validOrderType, 
      cartItems,
      couponCode: '',
      subtotal,
      discount,
      total,
      totalItems: cartItems.reduce((total, item) => total + item.quantity, 0),
    };

    
  
    try {
      const response = await fetch('http://192.168.130.190:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to submit order. Status: ${response.status}, Message: ${
            errorData.message || 'Unknown error.'
          }`,
        );
      }
  
      const result = await response.json();
      Alert.alert('Success', `${type} details submitted successfully!`);

      navigation.navigate('Order Summary', { orderData: { ...result , cartItems : orderData.cartItems} });
  
      setFormData({
        name: '',
        phone: '',
        nic: '',
        email: '',
        address: '',
        agree: false,
      });
    } catch (error) {
      Alert.alert('Error', error.message);
      console.error('Order Submission Error:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      {goback.canGoBack() && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image name="arrow-back" size={24} source={backArrow} />
        </TouchableOpacity>
      )}
      <View style={styles.container}>
        <Image source={OrderStage1} style={styles.stageImage} />
        <View style={styles.iconConatiner}>
          <Image source={name} style={styles.inputFieldIcon} />
          <Text style={styles.inputFieldName}>Name</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Name (Required)"
          value={formData.name}
          onChangeText={value => handleInputChange('name', value)}
        />

        <View style={styles.iconConatiner}>
          <Image source={phone} style={styles.inputFieldIcon} />
          <Text style={styles.inputFieldName}>Phone</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone (Required)"
          keyboardType="phone-pad"
          value={formData.phone}
          onChangeText={value => handleInputChange('phone', value)}
        />

        <View style={styles.iconConatiner}>
          <Image source={nic} style={styles.inputFieldIcon} />
          <Text style={styles.inputFieldName}>NIC</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter NIC (Required)"
          value={formData.nic}
          onChangeText={value => handleInputChange('nic', value)}
        />

        <View style={styles.iconConatiner}>
          <Image source={atSign} style={styles.inputFieldIcon} />
          <Text style={styles.inputFieldName}>Email Address</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Email Address (Required)"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={value => handleInputChange('email', value)}
        />

        <View style={styles.iconConatiner}>
          <Text style={styles.inputFieldName}>Address</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Address (Required)"
          value={formData.address}
          onChangeText={value => handleInputChange('address', value)}
        />

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={formData.agree}
            onValueChange={() => handleInputChange('agree', !formData.agree)}
            boxType="square"
          />
          <Text style={styles.checkboxLabel}>Agree to Terms & Conditions</Text>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CustomerOrderReservationSum;
