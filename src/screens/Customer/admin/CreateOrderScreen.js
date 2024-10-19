import React, {useState} from 'react';
import {
  View,
  TextInput,
  Alert,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CustomerAdminHeader from '../../CustomerAdminHeader';
import styles from '../../../styles/Customer/admin/CreateOrderScreenStyles';

import backArrow from '../../../assets/images/customer/backArrow.png';
import {useNavigation} from '@react-navigation/native';

export default function CreateOrderScreen({navigation}) {
  const baseUrl = 'http://192.168.130.190:5000';
  const goback = useNavigation();

  const [order, setOrder] = useState({
    Name: '',
    Phone: '',
    NIC: '',
    Email: '',
    OrderType: '',
    Address: '',
    Total: '',
    Discount: '',
  });

  const [errors, setErrors] = useState({});

  const validateOrder = () => {
    let valid = true;
    let newErrors = {};

    if (!order.Name.trim()) {
      newErrors.Name = 'Name is required';
      valid = false;
    } else if (/[^a-zA-Z\s]/.test(order.Name)) {
      newErrors.Name = 'Name must contain only letters and spaces';
      valid = false;
    }
    if (!order.Phone.trim() || !/^\d{10}$/.test(order.Phone)) {
      newErrors.Phone = 'Valid phone number is required (10 digits)';
      valid = false;
    }
    if (!order.NIC.trim() || isNaN(order.NIC)) {
      newErrors.NIC = 'Valid NIC must be a number';
      valid = false;
    }
    if (!order.Email.trim() || !/\S+@\S+\.\S+/.test(order.Email)) {
      newErrors.Email = 'Valid email is required';
      valid = false;
    }
    if (!order.Address.trim()) {
      newErrors.Address = 'Address is required';
      valid = false;
    }
    if (!order.Total.trim() || isNaN(order.Total)) {
      newErrors.Total = 'Valid total amount is required';
      valid = false;
    }
    if (order.Discount && isNaN(order.Discount)) {
      newErrors.Discount = 'Discount must be a number';
      valid = false;
    }
    if (!order.OrderType) {
      newErrors.OrderType = 'Order Type is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSave = async () => {
    if (!validateOrder()) return;

    try {
      await fetch(`${baseUrl}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      Alert.alert('Success', 'Order created successfully');
      navigation.goBack();
    } catch (error) {
      console.error('Error creating order:', error);
      Alert.alert('Error', 'Failed to create order. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {goback.canGoBack() && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image name="arrow-back" size={24} source={backArrow} />
        </TouchableOpacity>
      )}
      <CustomerAdminHeader name={'Add Order Details'} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputFieldWrappper}>
          <Text>Placed By</Text>
          {errors.Name && <Text style={styles.errorText}>{errors.Name}</Text>}
          <TextInput
            placeholder="Name"
            value={order.Name}
            onChangeText={text => setOrder({...order, Name: text})}
            style={styles.inputField}
          />
        </View>

        <View style={styles.inputFieldWrappper}>
          <Text style={styles.label}>Contact number</Text>
          {errors.Phone && <Text style={styles.errorText}>{errors.Phone}</Text>}
          <TextInput
            placeholder="Phone"
            value={order.Phone}
            onChangeText={text => setOrder({...order, Phone: text})}
            keyboardType="phone-pad"
            style={styles.inputField}
          />
        </View>

        <View style={styles.inputFieldWrappper}>
          <Text style={styles.label}>Email</Text>
          {errors.Email && <Text style={styles.errorText}>{errors.Email}</Text>}
          <TextInput
            placeholder="Email"
            value={order.Email}
            onChangeText={text => setOrder({...order, Email: text})}
            keyboardType="email-address"
            style={styles.inputField}
          />
        </View>

        <View style={styles.inputFieldWrappper}>
          <Text style={styles.label}>Address</Text>
          {errors.Address && (
            <Text style={styles.errorText}>{errors.Address}</Text>
          )}
          <TextInput
            placeholder="Address"
            value={order.Address}
            onChangeText={text => setOrder({...order, Address: text})}
            style={styles.inputField}
          />
        </View>

        <View style={styles.inputFieldWrappper}>
          <Text style={styles.label}>NIC</Text>
          {errors.NIC && <Text style={styles.errorText}>{errors.NIC}</Text>}
          <TextInput
            placeholder="NIC"
            value={order.NIC}
            onChangeText={text => setOrder({...order, NIC: text})}
            style={styles.inputField}
          />
        </View>

        <View style={styles.inputFieldWrappper}>
          <Text style={styles.label}>Total</Text>
          {errors.Total && <Text style={styles.errorText}>{errors.Total}</Text>}
          <TextInput
            placeholder="Total"
            value={order.Total}
            onChangeText={text => setOrder({...order, Total: text})}
            keyboardType="numeric"
            style={styles.inputField}
          />
        </View>

        <View style={styles.inputFieldWrappper}>
          <Text style={styles.label}>Discount</Text>
          {errors.Discount && (
            <Text style={styles.errorText}>{errors.Discount}</Text>
          )}
          <TextInput
            placeholder="Discount"
            value={order.Discount}
            onChangeText={text => setOrder({...order, Discount: text})}
            keyboardType="numeric"
            style={styles.inputField}
          />
        </View>

        <View style={styles.inputFieldWrappper}>
          <Text style={styles.label}>Order Type</Text>
          {errors.OrderType && (
            <Text style={styles.errorText}>{errors.OrderType}</Text>
          )}
          <Picker
            selectedValue={order.OrderType}
            onValueChange={itemValue =>
              setOrder({...order, OrderType: itemValue})
            }>
            <Picker.Item label="Delivery" value="Delivery" />
            <Picker.Item label="Pickup" value="Pickup" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.btnStyles} onPress={handleSave}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
