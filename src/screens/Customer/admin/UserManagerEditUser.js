import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Pressable, Image, Alert } from "react-native";
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from "../../../styles/Customer/admin/UserManagerEditUserStyles"; // Import the appropriate styles
import { IP_ADDRESS } from "@env";

const UserManagerEditUser = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    contactNumber: '',
    address: ''
  });
  const route = useRoute();
  const navigation = useNavigation();
  const { userId } = route.params; // Retrieve the user ID passed from the previous screen

  // Fetch user details when the component mounts
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        console.log("IP Address: ", IP_ADDRESS);
        const response = await axios.get(`http://${IP_ADDRESS}:5000/users/users/${userId}`);
        setUser({
          name: response.data.name,
          email: response.data.email,
          contactNumber: response.data.contactNumber || '',
          address: response.data.address
        });
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch user details');
        console.error(error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  // Handle input change
  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      console.log("IP Address: ", IP_ADDRESS);
      await axios.put(`http://${IP_ADDRESS}:5000/users/users/${userId}`, user);
      Alert.alert('Success', 'User details updated successfully');
      navigation.goBack(); // Navigate back after updating the user
    } catch (error) {
      Alert.alert('Error', 'Failed to update user details');
      console.error(error);
    }
  };

  return (
    <View style={styles.userManagerEditUser}>
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
            style={styles.myProductsChild1}
            resizeMode="cover"
            source={require("../../../assets/images/vendor/backarrow.png")}
          />
          <Text style={[styles.editUserDetails, styles.submitTypo]}>
            Edit User Details
          </Text>
          <Image
            style={styles.myProductsChild2}
            resizeMode="cover"
            source={require("../../../assets/images/vendor/Vnav1.png")}
          />
        </View>
      </View>

      {/* Form Section */}
      <View style={styles.frameParent}>
        <View style={styles.instanceParent}>
          <View style={styles.inputLabelParent}>
            <Text style={[styles.inputLabel, styles.inputTypo]}>Name</Text>
            <TextInput
              style={[styles.enterInputWrapper, styles.wrapperLayout]}
              value={user.name}
              onChangeText={(text) => handleChange('name', text)}
              placeholder="Enter Name"
            />
          </View>
          <View style={styles.inputLabelParent}>
            <Text style={[styles.inputLabel, styles.inputTypo]}>Email</Text>
            <TextInput
              style={[styles.enterInputWrapper, styles.wrapperLayout]}
              value={user.email}
              onChangeText={(text) => handleChange('email', text)}
              placeholder="Enter Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputLabelParent}>
            <Text style={[styles.inputLabel, styles.inputTypo]}>Contact Number</Text>
            <TextInput
              style={[styles.enterInputWrapper, styles.wrapperLayout]}
              value={user.contactNumber}
              onChangeText={(text) => handleChange('contactNumber', text)}
              placeholder="Enter Contact Number"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.inputLabelParent}>
            <Text style={[styles.inputLabel, styles.inputTypo]}>Address</Text>
            <TextInput
              style={[styles.enterInputWrapper, styles.wrapperLayout]}
              value={user.address}
              onChangeText={(text) => handleChange('address', text)}
              placeholder="Enter Address"
            />
          </View>
        </View>

        {/* Submit Button */}
        <Pressable style={[styles.submitWrapper, styles.wrapperLayout]} onPress={handleSubmit}>
          <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserManagerEditUser;
