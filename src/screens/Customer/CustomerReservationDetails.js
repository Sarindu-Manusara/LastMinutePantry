import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  CheckBox,
} from 'react-native';
import styles from '../../styles/Customer/CustomerReservationDetailsStyle';
const CustomerReservationDetails = ({route, navigation}) => {
  const {type} = route.params; 
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    nic: '',
    email: '',
    agree: false,
  });

  const handleInputChange = (field, value) => {
    setFormData({...formData, [field]: value});
  };

  const handleSubmit = () => {
    if (!formData.agree) {
      alert('Please agree to the terms and conditions');
      return;
    }
    alert(`${type} details submitted successfully!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type} Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name (Required)"
        value={formData.name}
        onChangeText={value => handleInputChange('name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Phone (Required)"
        keyboardType="phone-pad"
        value={formData.phone}
        onChangeText={value => handleInputChange('phone', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter NIC (Required)"
        value={formData.nic}
        onChangeText={value => handleInputChange('nic', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email Address (Required)"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={value => handleInputChange('email', value)}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={formData.agree}
          onValueChange={() => handleInputChange('agree', !formData.agree)}
        />
        <Text style={styles.checkboxLabel}>Agree to Terms & Conditions</Text>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomerReservationDetails;
