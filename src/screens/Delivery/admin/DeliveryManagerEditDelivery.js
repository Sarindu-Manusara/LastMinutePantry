import React, { useState, useEffect } from 'react';
import { Text, View, Image, Pressable, TextInput, Alert } from 'react-native';
import axios from 'axios'; // Axios for handling HTTP requests
import styles from '../../../styles/Delivery/admin/DeliveryManagerEditDeliveryStyles'; // Importing styles from a separate file
import { IP_ADDRESS } from "@env";
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker for date selection

const DeliveryManagerEditDelivery = ({ navigation, route }) => {
  // State variables for form inputs
  const [deliveryId, setDeliveryId] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [date, setDate] = useState(new Date());
  const [deliveryNote, setDeliveryNote] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false); // Control date picker visibility

  const deliveryIdFromRoute = route.params?.deliveryId; // Assume delivery ID is passed via route parameters

  // Fetch the existing delivery details if editing
  useEffect(() => {
    if (deliveryIdFromRoute) {
      fetchDeliveryDetails();
    }
  }, [deliveryIdFromRoute]);

  // Function to fetch delivery details
  const fetchDeliveryDetails = async () => {
    try {
      const response = await axios.get(`http://${IP_ADDRESS}:5000/deliveries/deliveries/${deliveryIdFromRoute}`);
      const delivery = response.data;
      setDeliveryId(delivery.deliveryId.toString());
      setAddress(delivery.address);
      setPostalCode(delivery.postalCode);
      setDate(new Date(delivery.date));
      setDeliveryNote(delivery.deliveryNote);
    } catch (error) {
      console.error('Error fetching delivery details:', error);
      Alert.alert('Error', 'Failed to load delivery details');
    }
  };

  // Function to handle form submission (Update Delivery)
  const handleEditDelivery = async () => {
    // Validate inputs
    if (!deliveryId || !address || !postalCode || !date || !deliveryNote) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Updated delivery object
    const updatedDelivery = {
      deliveryId: parseInt(deliveryId, 10), // Convert to number
      address,
      postalCode,
      date: date.toISOString(), // Convert to ISO string
      deliveryNote,
    };

    try {
      await axios.put(`http://${IP_ADDRESS}:5000/deliveries/${deliveryIdFromRoute}`, updatedDelivery);
      Alert.alert('Success', 'Delivery updated successfully');
      navigation.goBack(); // Navigate back after successful update
    } catch (error) {
      console.error('Error updating delivery:', error);
      Alert.alert('Error', 'Failed to update delivery');
    }
  };

  // Date picker change handler
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false); // Hide date picker after selection
    setDate(currentDate); // Set selected date
  };

  return (
    <View style={styles.deliveryManagerEditDelivery}>
      {/* Header */}
      <View style={styles.maintext}>
        <Text style={styles.lastMinutePantryContainer}>
          <Text style={styles.lastMinute}>Last Minute</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.pantry}>Pantry</Text>
        </Text>
      </View>

      {/* Title and navigation icons */}
      <View style={styles.arrowBackParent}>
        <Image style={styles.arrowBackIcon} resizeMode="cover" source={require('../../../assets/images/vendor/backarrow.png')} />
        <Text style={styles.editDelivery}>Edit Delivery</Text>
        <Image style={styles.frameChild} resizeMode="cover" source={require('../../../assets/images/vendor/Vnav1.png')} />
      </View>

      {/* Form Fields */}
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Delivery ID</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Delivery ID"
            value={deliveryId}
            onChangeText={setDeliveryId}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Address</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Address"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Postal Code</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Postal Code"
            keyboardType="numeric"
            value={postalCode}
            onChangeText={setPostalCode}
          />
        </View>

        {/* Date Field with Date Picker */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Date</Text>
          <Pressable onPress={() => setShowDatePicker(true)}>
            <View style={styles.inputField}>
              <Text>{date.toISOString().split('T')[0]}</Text>
            </View>
          </Pressable>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Delivery Note</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Delivery Note"
            value={deliveryNote}
            onChangeText={setDeliveryNote}
          />
        </View>
      </View>

      {/* Edit Delivery Button */}
      <Pressable style={styles.buttonWrapper} onPress={handleEditDelivery}>
        <Text style={styles.buttonText}>Edit Delivery</Text>
      </Pressable>
    </View>
  );
};

export default DeliveryManagerEditDelivery;
