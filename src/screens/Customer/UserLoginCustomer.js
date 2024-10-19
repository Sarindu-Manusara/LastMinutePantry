import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Pressable, Alert } from "react-native";
import styles from "../../styles/Customer/userLoginCustomerStyle";
import { useNavigation } from "@react-navigation/native";
import { IP_ADDRESS } from "@env";

const UserLoginCustomer = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      console.log(`Attempting to log in with IP: ${IP_ADDRESS}`);
      const response = await fetch(`http://${IP_ADDRESS}:5000/users/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.toLowerCase(), password })
      });
  
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const json = await response.json();
        console.log('Response JSON:', json);
  
        // Check for token and user ID
        if (json.token && json.user && json.user.id) {
          // Navigate to CustomerHomeScreen with customer ID
          navigation.navigate('CustomerHomeScreen', { customerId: json.user.id });
        } else {
          throw new Error(json.message || 'Login failed');
        }
      } else {
        // If not JSON, it could be an HTML error page
        const errorText = await response.text();
        console.error('Unexpected non-JSON response:', errorText);
        throw new Error('Server returned a non-JSON response: ' + errorText);
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Login Failed', error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <View style={styles.userLoginCustomer}>
      <View style={styles.maintext}>
        <Text style={styles.lastMinutePantryContainer}>
          <Text style={styles.lastMinute}>Last Minute </Text>
          <Text style={styles.pantry}>Pantry</Text>
        </Text>
      </View>

      <View style={styles.logInWrapper}>
        <Text style={styles.logIn}>Log In</Text>
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

      <View style={styles.icons8Google481Parent}>
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

      <View style={styles.orWrapper}>
        <Text style={styles.or}>or</Text>
      </View>

      <Pressable onPress={() => navigation.navigate('UserRegistrationCustomer')}>
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

export default UserLoginCustomer;
