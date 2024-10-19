import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Alert,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CustomerAdminHeader from '../../CustomerAdminHeader';
import styles from '../../../styles/Customer/admin/EditOrderScreenStyles';
import backArrow from '../../../assets/images/customer/backArrow.png';
import { useNavigation } from '@react-navigation/native';

export default function EditOrderScreen({ route, navigation }) {
  const baseUrl = 'http://192.168.130.190:5000';

  const { order } = route.params;
  const [updatedOrder, setUpdatedOrder] = useState(order);
  const [errors, setErrors] = useState({});
  const goback = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (route.params?.updatedOrder) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.OrderNo === route.params.updatedOrder.OrderNo
              ? route.params.updatedOrder
              : order
          )
        );
      }
    });

    return unsubscribe;
  }, [route.params?.updatedOrder]);

  const validateOrder = () => {
    let valid = true;
    let newErrors = {};

    if (!updatedOrder.Name.trim()) {
      newErrors.Name = 'Name is required';
      valid = false;
    }
    else if (/[^a-zA-Z\s]/.test(updatedOrder.Name)) {
      newErrors.Name = 'Name must contain only letters and spaces';
      valid = false;
    }
    if (!updatedOrder.Phone.trim() || !/^\d{10}$/.test(updatedOrder.Phone)) {
      newErrors.Phone = 'Valid phone number is required (10 digits)';
      valid = false;
    }
    if (!updatedOrder.Email.trim() || !/\S+@\S+\.\S+/.test(updatedOrder.Email)) {
      newErrors.Email = 'Valid email is required';
      valid = false;
    }
    if (!updatedOrder.OrderType) {
      newErrors.OrderType = 'Order Type is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSave = async () => {
    if (!validateOrder()) return;

    try {
      const response = await fetch(`${baseUrl}/api/orders/${updatedOrder.OrderNo}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedOrder),
      });

      if (response.ok) {
        Alert.alert('Success', 'Order updated successfully');
        navigation.goBack({
          updatedOrder,
        });
      } else {
        Alert.alert('Error', 'Failed to update order');
      }
    } catch (error) {
      console.error('Error updating order:', error);
      Alert.alert('Error', 'An error occurred while updating the order.');
    }
  };

  const handleCartItemChange = (index, quantity) => {
    const updatedCartItems = updatedOrder.cartItems.map((item, i) =>
      i === index ? { ...item, quantity: Number(quantity) } : item
    );
    setUpdatedOrder({ ...updatedOrder, cartItems: updatedCartItems });
  };

  const handleRemoveCartItem = (index) => {
    const updatedCartItems = updatedOrder.cartItems.filter((_, i) => i !== index);
    setUpdatedOrder({ ...updatedOrder, cartItems: updatedCartItems });
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
      <CustomerAdminHeader name={'Edit Order Details'} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputFieldWrappper}>
          <Text style={styles.label}>Order Number</Text>
          <TextInput
            placeholder="Order No"
            value={updatedOrder.OrderNo}
            editable={false}
            style={styles.inputField}
          />
        </View>

        <View style={styles.inputFieldWrappper}>
          <Text>Placed By</Text>
          {errors.Name && <Text style={styles.errorText}>{errors.Name}</Text>}
          <TextInput
            placeholder="Name"
            value={updatedOrder.Name}
            onChangeText={text => setUpdatedOrder({ ...updatedOrder, Name: text })}
            style={styles.inputField}
          />
        </View>

        <View style={styles.inputFieldWrappper}>
          <Text style={styles.label}>Contact number</Text>
          {errors.Phone && <Text style={styles.errorText}>{errors.Phone}</Text>}
          <TextInput
            placeholder="Phone"
            value={updatedOrder.Phone}
            onChangeText={text => setUpdatedOrder({ ...updatedOrder, Phone: text })}
            keyboardType="phone-pad"
            style={styles.inputField}
          />
        </View>

        <View style={styles.inputFieldWrappper}>
          <Text style={styles.label}>Email</Text>
          {errors.Email && <Text style={styles.errorText}>{errors.Email}</Text>}
          <TextInput
            placeholder="Email"
            value={updatedOrder.Email}
            onChangeText={text => setUpdatedOrder({ ...updatedOrder, Email: text })}
            keyboardType="email-address"
            style={styles.inputField}
          />
        </View>

        <View style={styles.inputFieldWrappper}>
          <Text style={styles.label}>Order Type</Text>
          {errors.OrderType && <Text style={styles.errorText}>{errors.OrderType}</Text>}
          <Picker
            selectedValue={updatedOrder.OrderType}
            onValueChange={itemValue => setUpdatedOrder({ ...updatedOrder, OrderType: itemValue })}>
            <Picker.Item label="Delivery" value="Delivery" />
            <Picker.Item label="Pickup" value="Pickup" />
          </Picker>
        </View>

        {updatedOrder.cartItems.map((item, index) => (
          <View key={index} style={styles.cartItem}>
            <Text style={styles.cartItemName}>{item.productName}</Text>
            <TextInput
              style={styles.cartItemQuantity}
              placeholder="Quantity"
              value={item.quantity.toString()}
              onChangeText={(text) => handleCartItemChange(index, text)}
              keyboardType="numeric"
            />
            <Text style={styles.cartItemPrice}>
              Unit Price: Rs. {item.price.toFixed(2)}
            </Text>
            <TouchableOpacity onPress={() => handleRemoveCartItem(index)} style={styles.removeItemButton}>
              <Text style={styles.removeItemText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity style={styles.btnStyles} onPress={handleSave}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
            Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
