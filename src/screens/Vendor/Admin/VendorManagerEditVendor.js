import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Pressable, Alert, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import styles from '../../../styles/Vendor/Admin/vendorManagerEditVendorStyles';
import { IP_ADDRESS } from "@env";

const VendorManagerEditVendor = () => {

  const [vendor, setVendor] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const navigation = useNavigation();
  const route = useRoute();
  const { vendorId } = route.params;

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        console.log("Vendor ID: ", vendorId); 
        console.log("IP Address: ", IP_ADDRESS);
        const response = await axios.get(`http://${IP_ADDRESS}:5000/vendors/${vendorId}`);
        setVendor(response.data);
      } catch (error) {
        console.error('Error fetching vendor details:', error);
        Alert.alert('Error', 'Failed to fetch vendor details.');
      }
    };

    fetchVendor();
  }, [vendorId]);

  const handleInputChange = (name, value) => {
    setVendor({ ...vendor, [name]: value });
  };

  const handleUpdateVendor = async () => {
    try {
      console.log("IP Address: ", IP_ADDRESS);
      const response = await axios.put(`http://${IP_ADDRESS}:5000/vendors/${vendorId}`, vendor);
      if (response.status === 200) {
        Alert.alert('Success', 'Vendor updated successfully.');
        navigation.goBack();
      } else {
        Alert.alert('Error', 'Failed to update vendor.');
      }
    } catch (error) {
      console.error('Error updating vendor:', error);
      Alert.alert('Error', 'Failed to update vendor.');
    }
  };

  return (
    <View style={styles.vendorManagerEditManager}>
      <View style={styles.maintextParent}>
        <View style={styles.maintext}>
          <Text style={styles.lastMinutePantryContainer}>
            <Text style={styles.lastMinute}>Last Minute</Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.pantry}>Pantry</Text>
          </Text>
        </View>
        <View style={styles.myProducts}>
          <Image
            style={styles.myProductsChild1}
            resizeMode="cover"
            source={require('../../../assets/images/vendor/backarrow.png')}
          />
          <Text style={styles.editVendor}>Edit Vendor</Text>
          <Image
            style={styles.myProductsChild2}
            resizeMode="cover"
            source={require('../../../assets/images/vendor/Vnav1.png')}
          />
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.instanceParent}>
          <View style={styles.inputLabelParent}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.enterInput}
              value={vendor.name}
              onChangeText={(value) => handleInputChange('name', value)}
              placeholder="Enter Vendor Name"
              placeholderTextColor="#737171"
            />
          </View>
          <View style={styles.inputLabelParent}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.enterInput}
              value={vendor.email}
              onChangeText={(value) => handleInputChange('email', value)}
              placeholder="Enter Vendor Email"
              keyboardType="email-address"
              placeholderTextColor="#737171"
            />
          </View>
          <View style={styles.inputLabelParent}>
            <Text style={styles.inputLabel}>Contact Number</Text>
            <TextInput
              style={styles.enterInput}
              value={vendor.phone}
              onChangeText={(value) => handleInputChange('phone', value)}
              placeholder="Enter Contact Number"
              keyboardType="phone-pad"
              placeholderTextColor="#737171"
            />
          </View>
          <View style={styles.inputLabelParent}>
            <Text style={styles.inputLabel}>Address</Text>
            <TextInput
              style={styles.enterInput}
              value={vendor.address}
              onChangeText={(value) => handleInputChange('address', value)}
              placeholder="Enter Vendor Address"
              placeholderTextColor="#737171"
            />
          </View>
        </View>
        <Pressable style={styles.editVendorWrapper} onPress={handleUpdateVendor}>
          <Text style={styles.editVendorButtonText}>Edit Vendor</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default VendorManagerEditVendor;
