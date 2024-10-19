import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IP_ADDRESS } from "@env";
import styles from "../../styles/Vendor/VendorLoginScreenStyles";

const VendorLoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // Check if email and password are filled in
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both email and password.");
      return;
    }

    // Check if IP_ADDRESS is defined
    if (!IP_ADDRESS) {
      Alert.alert("Error", "Server address not found. Please check your environment settings.");
      return;
    }

    setLoading(true);

    // Log IP_ADDRESS for debugging
    console.log("IP Address: ", IP_ADDRESS);

    try {
      const response = await fetch(`http://${IP_ADDRESS}:5000/vendors/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Check if response is valid JSON
      let json;
      try {
        json = await response.json();
        console.log("Response JSON:", json); // Log the response for debugging
      } catch (err) {
        throw new Error('Unable to parse server response.');
      }

      // Check if login was successful
      if (!response.ok) {
        console.error("Login failed:", json.message);
        throw new Error(json.message || 'Login failed');
      }

      // Store the token locally (if needed)
      await AsyncStorage.setItem('token', json.token);

      // Extract vendorId from the response
      const vendorId = json.vendor?.id || json.vendor?._id;
      
      if (!vendorId) {
        throw new Error("Vendor ID not found in the response.");
      }

      // If successful, navigate to VendorDashboard and pass vendorId
      navigation.navigate('VendorDashboard', { vendorId });
    } catch (error) {
      console.error('Login Error:', error);
      Alert.alert('Login Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.vendorLogin}>
      <View style={styles.maintext}>
        <Text style={styles.lastMinutePantryContainer}>
          <Text style={styles.lastMinute}>Last Minute </Text>
          <Text style={styles.pantry}>Pantry</Text>
        </Text>
      </View>

      <View style={styles.logInWrapper}>
        <Text style={styles.logIn}>Vendor Log In</Text>
      </View>

      <View style={styles.instanceParent}>
        <View style={styles.inputLabelParent}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email Address"
            placeholderTextColor="#575252"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={styles.inputLabelParent}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="#575252"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.logInButtonText}>{loading ? 'Logging in...' : 'Log In'}</Text>
      </TouchableOpacity>

      <Pressable onPress={() => navigation.navigate('VendorSignupScreen')}>
        <View style={styles.dontHaveAnAccountSignUpWrapper}>
          <Text style={styles.dontHaveAnContainer}>
            <Text style={styles.dontHaveAn}>Don’t Have an Account? </Text>
            <Text style={styles.signUp}>Sign Up</Text>
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default VendorLoginScreen;
