import * as React from "react";
import { Text, View, Image, TextInput, Pressable, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import axios from "axios";
import styles from "../../../styles/Vendor/Admin/vendorManagerAddVendorScreenStyles"; // Import the separated stylesheet
import { useState } from "react";
import { IP_ADDRESS } from "@env";

const VendorManagerAddVendorScreen = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  // Function to validate email format
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  // Function to validate phone number format
  const validatePhoneNumber = (phone) => {
    const phonePattern = /^[0-9]{10}$/; // Assumes a 10-digit phone number
    return phonePattern.test(phone);
  };

  // Function to validate name
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    return nameRegex.test(name);
  };

  // Function to handle form submission
  const handleAddVendor = async () => {
    if (!name || !email || !phone || !address) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    if (!validateName(name)) {
      Alert.alert("Error", "Name should contain at least 2 characters and only letters.");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      Alert.alert("Error", "Please enter a valid 10-digit phone number.");
      return;
    }

    if (address.length < 10) {
      Alert.alert("Error", "Address must be at least 10 characters long.");
      return;
    }

    // API call to create a vendor
    const vendorData = { name, email, phone, address };

    try {
      console.log("IP Address: ", IP_ADDRESS);
      const response = await axios.post(`http://${IP_ADDRESS}:5000/vendors/create`, vendorData);

      if (response.status !== 200) {
        throw new Error("Failed to add vendor");
      }

      Alert.alert("Success", "Vendor added successfully");

      // Reset form fields after successful addition
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
    } catch (error) {
      console.error("Error adding vendor:", error);
      Alert.alert("Error", error.response?.data?.message || "Failed to add vendor");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} // Adjust the offset if needed
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.vendorManagerAddVendorSc}>
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
                resizeMode="contain"
                source={require('../../../assets/images/vendor/backarrow.png')}
              />
              <Text style={[styles.addVendor, styles.addTypo]}>Add Vendor</Text>
              <Image
                style={styles.myProductsChild}
                resizeMode="contain"
                source={require('../../../assets/images/vendor/Vnav1.png')}
              />
            </View>
          </View>

          {/* Form Section */}
          <View style={styles.frameParent}>
            <View style={styles.instanceParent}>
              <View style={styles.inputLabelParent}>
                <Text style={[styles.inputLabel, styles.inputLabelTypo]}>Name</Text>
                <TextInput
                  style={[styles.instanceChild, styles.instanceChildLayout,]}
                  placeholder="Enter Name of the Shop"
                  placeholderTextColor="#000000"
                  value={name}
                  onChangeText={setName}
                />
              </View>
              <View style={styles.inputLabelParent}>
                <Text style={[styles.inputLabel, styles.inputLabelTypo]}>Email</Text>
                <TextInput
                  style={[styles.instanceChild, styles.instanceChildLayout]}
                  placeholder="Enter Email"
                  placeholderTextColor="#000000"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputLabelParent}>
                <Text style={[styles.inputLabel, styles.inputLabelTypo]}>
                  Contact Number
                </Text>
                <TextInput
                  style={[styles.instanceChild, styles.instanceChildLayout]}
                  placeholder="Enter Contact Number"
                  placeholderTextColor="#000000"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
              </View>
              <View style={styles.inputLabelParent}>
                <Text style={[styles.inputLabel, styles.inputLabelTypo]}>Address</Text>
                <TextInput
                  style={[styles.instanceChild, styles.instanceChildLayout]}
                  placeholder="Enter Address"
                  placeholderTextColor="#000000"
                  value={address}
                  onChangeText={setAddress}
                />
              </View>
            </View>

            {/* Add Vendor Button */}
            <Pressable
              style={[styles.addVendorWrapper, styles.instanceChildLayout]}
              onPress={handleAddVendor}
            >
              <Text style={[styles.addVendor1, styles.addTypo]}>Add Vendor</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VendorManagerAddVendorScreen;
