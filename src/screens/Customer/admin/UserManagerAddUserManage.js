import React, { useState } from "react";
import { Text, View, Image, TextInput, Pressable, Alert } from "react-native";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import styles from "../../../styles/Customer/admin/UserManagerEditUserStyles"; // Import the appropriate styles
import { IP_ADDRESS } from "@env";

const UserManagerAddUserManage = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    contactNumber: '',
    address: ''
  });
  const navigation = useNavigation();

  // Function to handle input change
  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  // Function to validate contact number format
  const validateContactNumber = (contactNumber) => {
    const numberPattern = /^[0-9]{10}$/; // Assuming 10-digit numbers
    return numberPattern.test(contactNumber);
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    // Basic validation checks
    if (!user.name) {
      Alert.alert('Error', 'Name is required.');
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(user.name) || user.name.length < 3 || user.name.length > 50) {
      Alert.alert('Error', 'Name should contain only letters, be between 3 to 50 characters, and should not have numbers or special characters.');
      return;
    }

    if (!user.email) {
      Alert.alert('Error', 'Email is required.');
      return;
    }

    if (!validateEmail(user.email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    if (!user.contactNumber) {
      Alert.alert('Error', 'Contact number is required.');
      return;
    }

    if (!validateContactNumber(user.contactNumber)) {
      Alert.alert('Error', 'Contact number should be exactly 10 digits.');
      return;
    }

    if (!user.address) {
      Alert.alert('Error', 'Address is required.');
      return;
    }

    if (user.address.length < 10) {
      Alert.alert('Error', 'Address should be at least 10 characters long.');
      return;
    }

    try {
      console.log("IP Address: ", IP_ADDRESS);
      await axios.post(`http://${IP_ADDRESS}:5000/users/users`, user);
      Alert.alert('Success', 'User added successfully');
      navigation.goBack(); // Navigate back after successful submission
    } catch (error) {
      Alert.alert('Error', 'Failed to add user');
      console.error(error);
    }
  };

  return (
    <View style={styles.userManagerAddUserManage}>
      {/* Header */}
      <View style={styles.maintextParent}>
        <View style={[styles.maintext, styles.maintextFlexBox]}>
          <Text style={styles.lastMinutePantryContainer}>
            <Text style={styles.lastMinute}>Last Minute</Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.pantry}>Pantry</Text>
          </Text>
        </View>
        <View style={styles.myProducts}>
          <Image
            style={styles.myProductsChild}
            resizeMode="cover"
            source={require("../../../assets/images/vendor/backarrow.png")}
          />
          <Text style={[styles.addUser, styles.submitTypo]}>Add User</Text>
          <Image
            style={styles.myProductsChild}
            resizeMode="cover"
            source={require("../../../assets/images/vendor/Vnav1.png")}
          />
        </View>
      </View>

      {/* Form Section */}
      <View style={styles.frameParent}>
        <View style={styles.instanceParent}>
          <View style={styles.inputLabelParent}>
            <Text style={[styles.inputLabel, styles.inputLabelTypo]}>Name</Text>
            <TextInput
              style={[styles.instanceChild, styles.instanceChildLayout]}
              placeholder="Enter Name"
              placeholderTextColor="#737171"
              value={user.name}
              onChangeText={(text) => handleChange('name', text)}
            />
          </View>
          <View style={styles.inputLabelParent}>
            <Text style={[styles.inputLabel, styles.inputLabelTypo]}>Email</Text>
            <TextInput
              style={[styles.instanceChild, styles.instanceChildLayout]}
              placeholder="Enter Email"
              placeholderTextColor="#737171"
              value={user.email}
              onChangeText={(text) => handleChange('email', text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputLabelParent}>
            <Text style={[styles.inputLabel, styles.inputLabelTypo]}>Contact Number</Text>
            <TextInput
              style={[styles.instanceChild, styles.instanceChildLayout]}
              placeholder="Enter Contact Number"
              placeholderTextColor="#737171"
              value={user.contactNumber}
              onChangeText={(text) => handleChange('contactNumber', text)}
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.inputLabelParent}>
            <Text style={[styles.inputLabel, styles.inputLabelTypo]}>Address</Text>
            <TextInput
              style={[styles.instanceChild, styles.instanceChildLayout]}
              placeholder="Enter Address"
              placeholderTextColor="#737171"
              value={user.address}
              onChangeText={(text) => handleChange('address', text)}
            />
          </View>
        </View>

        {/* Submit Button */}
        <Pressable style={[styles.submitWrapper, styles.instanceChildLayout]} onPress={handleSubmit}>
          <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserManagerAddUserManage;
