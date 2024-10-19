import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView } from "react-native";
import styles from "../../styles/Vendor/VendorSignupScreenstyles";
import { IP_ADDRESS } from "@env";

const VendorSignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to validate phone
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Assuming a 10-digit phone number
    return phoneRegex.test(phone);
  };

  // Function to validate password
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    return passwordRegex.test(password);
  };

  // Function to validate name
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    return nameRegex.test(name);
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    if (!name || !email || !address || !phone || !password) {
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

    if (!validatePhone(phone)) {
      Alert.alert("Error", "Please enter a valid 10-digit phone number.");
      return;
    }

    if (address.length < 5) {
      Alert.alert("Error", "Address must be at least 5 characters long.");
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert("Error", "Password must be at least 6 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.");
      return;
    }

    const vendorData = {
      name,
      email,
      address,
      phone,
      password,
    };

    try {
      console.log("IP Address: ", IP_ADDRESS);
      const response = await fetch(`http://${IP_ADDRESS}:5000/vendors/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vendorData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error Response:', errorData);
        throw new Error(errorData.message || 'Failed to create vendor');
      }

      const result = await response.json();
      Alert.alert("Success", "Vendor registered successfully!");

      setName('');
      setEmail('');
      setAddress('');
      setPhone('');
      setPassword('');
    } catch (error) {
      console.error('Request Failed:', error);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.vendorRegistration}>
          {/* Header */}
          <View style={styles.maintext}>
            <Text style={styles.lastMinutePantryContainer}>
              <Text style={styles.lastMinute}>Last Minute</Text>
              <Text> </Text> {/* Removed string concatenation and replaced with a space inside a Text element */}
              <Text style={styles.pantry}>Pantry</Text>
            </Text>
          </View>

          {/* Sign Up Title */}
          <View style={styles.signUpWrapper}>
            <Text style={styles.signUp}>Vendor Sign Up</Text>
          </View>

          {/* Input Fields */}
          <View style={styles.instanceParent}>
            <View style={styles.inputLabelParent}>
              <Text style={styles.inputLabel}>Vendor Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter name"
                placeholderTextColor="#575252"
                value={name}
                onChangeText={setName}
              />
            </View>
            <View style={styles.inputLabelParent}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Email Address"
                placeholderTextColor="#575252"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.inputLabelParent}>
              <Text style={styles.inputLabel}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Phone Number"
                placeholderTextColor="#575252"
                keyboardType="numeric"
                value={phone}
                onChangeText={setPhone}
              />
            </View>
            <View style={styles.inputLabelParent}>
              <Text style={styles.inputLabel}>Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Address"
                placeholderTextColor="#575252"
                value={address}
                onChangeText={setAddress}
              />
            </View>
            <View style={styles.inputLabelParent}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                placeholderTextColor="#575252"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.logIn}>Sign Up</Text>
          </TouchableOpacity>

          {/* Terms and Conditions */}
          <View style={styles.bySingingUpYouAgreeTermsWrapper}>
            <Text style={styles.bySingingUpContainer}>
              By signing up you agree to
              <Text style={styles.termsConditions}> terms & conditions</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VendorSignupScreen;
