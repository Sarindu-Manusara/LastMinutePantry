import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../../styles/Customer/UserRegistrationCustomerStyles";
import { IP_ADDRESS } from "@env";

const UserRegistrationCustomer = () => {

  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
    // Validate form data
    if (!name || !email || !address || !password) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    // Validate name
    if (!validateName(name)) {
      Alert.alert("Error", "Name should contain at least 2 characters and only letters.");
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    // Validate address
    if (address.length < 5) {
      Alert.alert("Error", "Address must be at least 5 characters long.");
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      Alert.alert("Error", "Password must be at least 6 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.");
      return;
    }

    // Create user object
    const userData = {
      name,
      email,
      address,
      password,
    };

    try {
      // Send data to backend API to create user
      console.log("IP Address: ", IP_ADDRESS);

      const response = await fetch(`http://${IP_ADDRESS}:5000/users/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Check if the response is OK
      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        let errorMessage = 'Failed to create user';

        // Handle HTML responses (e.g., server errors returning HTML pages)
        if (contentType && contentType.includes('text/html')) {
          const errorText = await response.text();
          console.error('HTML Error Response:', errorText);
          errorMessage = 'Server returned an HTML response. Please check the server logs for more details.';
        } else {
          // Handle JSON error responses
          const errorData = await response.json();
          console.error('JSON Error Response:', errorData);
          errorMessage = errorData.message || errorMessage;
        }

        throw new Error(errorMessage);
      }

      const result = await response.json();
      Alert.alert("Success", "User registered successfully!");

      // Clear form fields
      setName('');
      setEmail('');
      setAddress('');
      setPassword('');
    } catch (error) {
      console.error('Request Failed:', error);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.userRegistrationCustomer}>
      {/* Header */}
      <View style={styles.maintext}>
        <Text style={styles.lastMinutePantryContainer}>
          <Text style={styles.lastMinute}>Last Minute </Text>
          <Text style={styles.pantry}>Pantry</Text>
        </Text>
      </View>

      {/* Sign Up Title */}
      <View style={styles.signUpWrapper}>
        <Text style={styles.signUp}>Sign Up</Text>
      </View>

      <ScrollView>
        {/* Input Fields */}
        <View style={styles.instanceParent}>
          <View style={styles.inputLabelParent}>
            <Text style={styles.inputLabel}>Name</Text>
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

        {/* Social Media Icons */}
        <View style={styles.frame}>
          <Image
            style={styles.icons8Google481}
            source={require("../../assets/images/customer/google.png")}
          />
          <Image
            style={styles.icons8Google481}
            source={require("../../assets/images/customer/facebook.png")}
          />
          <Image
            style={styles.icons8Google481}
            source={require("../../assets/images/customer/apple.png")}
          />
        </View>

        {/* Terms and Conditions */}
        <View style={styles.bySingingUpYouAgreeTermsWrapper}>
          <Text style={styles.bySingingUpContainer}>
            By signing up you agree to
            <Text style={styles.termsConditions}> terms & conditions</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserRegistrationCustomer;


