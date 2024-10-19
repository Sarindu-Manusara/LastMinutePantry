// AdminAddNotification.js
import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert, Platform } from 'react-native';
import axios from 'axios'; // Axios for handling HTTP requests
import * as ImagePicker from 'react-native-image-picker'; // Image Picker for handling image uploads
import styles from '../../../styles/Notification/admin/AdminNotificationFormStyles'; // Import the stylesheet
import { IP_ADDRESS } from "@env";

const AdminNotificationForm = ({ navigation }) => {

  // State variables for form inputs
  const [description, setDescription] = useState('');
  const [itemName, setItemName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [shopDetails, setShopDetails] = useState('');
  const [image, setImage] = useState(null);

  // Function to handle image selection
  const selectImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        setImage({
          uri: selectedImage.uri,
          type: selectedImage.type,
          name: selectedImage.fileName,
        });
      }
    });
  };

  // Function to handle form submission (Add Notification)
  const handleSubmit = async () => {
    // Validate inputs
    // if (!description || !itemName || !userRole || !expiryDate || !shopDetails) {
    //   Alert.alert('Error', 'Please fill in all fields');
    //   return;
    // }
    //  // Validate inputs
    //  if (!description || description.length < 10) {
    //   Alert.alert('Error', 'Description must be at least 10 characters long.');
    //   return;
    // }
    // if (!itemName || itemName.length < 3) {
    //   Alert.alert('Error', 'Item Name must be at least 3 characters long.');
    //   return;
    // }
    // if (!userRole || !validateUserRole(userRole)) {
    //   Alert.alert('Error', 'Please select a valid User Role (e.g., Customer, Vendor, Admin).');
    //   return;
    // }
    // if (!expiryDate || !validateDate(expiryDate)) {
    //   Alert.alert('Error', 'Expiry Date must be in YYYY-MM-DD format and cannot be a past date.');
    //   return;
    // }
    // if (!shopDetails || shopDetails.length < 5) {
    //   Alert.alert('Error', 'Shop Details must be at least 5 characters long.');
    //   return;
    // }
    // if (!image) {
    //   Alert.alert('Error', 'Please upload an image.');
    //   return;
    // }


    const formData = new FormData();
    formData.append('description', description);
    formData.append('itemName', itemName);
    formData.append('userRole', userRole);
    formData.append('expiryDate', expiryDate);
    formData.append('shopDetails', shopDetails);

    if (image) {
      formData.append('image', {
        uri: Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
        type: image.type || 'image/jpeg',
        name: image.name || 'notification_image.jpg',
      });
    }

    try {
      console.log("IP Address: ", IP_ADDRESS);
      const response = await axios.post(`http://${IP_ADDRESS}:5000/notifications`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Alert.alert('Success', 'Notification added successfully');
      // Reset form fields after submission
      setDescription('');
      setItemName('');
      setUserRole('');
      setExpiryDate('');
      setShopDetails('');
      setImage(null);
      navigation.goBack(); // Navigate back after successful submission
    } catch (error) {
      console.error('Error adding notification:', error.response ? error.response.data : error.message);
      Alert.alert('Error', 'Failed to add notification');
    }
  };

  return (
    <View style={styles.adminAddNotification}>
      {/* Header Section */}
      <View style={[styles.maintext, styles.maintextFlexBox]}>
        <Text style={[styles.lastMinutePantryContainer, styles.buttonTypo]}>
          <Text style={styles.lastMinute}>Last Minute</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.pantry}>Pantry</Text>
        </Text>
      </View>

      {/* Add Notification Title */}
      <View style={styles.myProducts}>
        <Text style={styles.addNotification}>Add Notification</Text>
        <Image
          style={[styles.myProductsChild, styles.productsLayout]}
          resizeMode="cover"
          source={require('../../../assets/images/vendor/backarrow.png')}
        />
        <Image
          style={[styles.myProductsItem, styles.productsLayout]}
          resizeMode="cover"
          source={require('../../../assets/images/vendor/Vnav1.png')}
        />
      </View>

      {/* Form Fields */}
      <ScrollView contentContainerStyle={styles.formContainer}>
        <Text style={styles.inputLabel}>Add description about your product or item</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Write here"
          placeholderTextColor="#737171"
          multiline={true}
          value={description}
          onChangeText={setDescription}
        />

        <View style={styles.inputLabelParent}>
          <Text style={styles.inputLabel}>Item Name</Text>
          <TextInput
            style={styles.textInputField}
            placeholder="Enter Product Name"
            placeholderTextColor="#737171"
            value={itemName}
            onChangeText={setItemName}
          />
        </View>

        <View style={styles.inputLabelParent}>
          <Text style={styles.inputLabel}>User Type</Text>
          <TextInput
            style={styles.textInputField}
            placeholder="Enter User Type"
            placeholderTextColor="#737171"
            value={userRole}
            onChangeText={setUserRole}
          />
        </View>

        <View style={styles.inputLabelParent}>
          <Text style={styles.inputLabel}>Expiry Date</Text>
          <TextInput
            style={styles.textInputField}
            placeholder="Enter Expiry Date (YYYY-MM-DD)"
            placeholderTextColor="#737171"
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
        </View>

        <View style={styles.inputLabelParent}>
          <Text style={styles.inputLabel}>Shop Details</Text>
          <TextInput
            style={styles.textInputField}
            placeholder="Enter Shop Details"
            placeholderTextColor="#737171"
            value={shopDetails}
            onChangeText={setShopDetails}
          />
        </View>

        <View style={styles.inputImageContainer}>
          <Text style={styles.inputLabel}>Input Image</Text>
          <TouchableOpacity style={styles.imageUpload} onPress={selectImage}>
            {image ? (
              <Image
                style={styles.uploadIcon}
                resizeMode="contain"
                source={{ uri: image.uri }}
              />
            ) : (
              <Image
                style={styles.uploadIcon}
                resizeMode="contain"
                source={require('../../../assets/images/vendor/uploadicon.png')}
              />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Submit and Delete Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdminNotificationForm;
