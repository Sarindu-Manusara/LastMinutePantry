// AdminEditNotification.js
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import axios from 'axios'; // Axios for handling HTTP requests
import * as ImagePicker from 'react-native-image-picker'; // Image Picker for handling image uploads
import styles from '../../../styles/Notification/admin/AdminEditNotificationFormStyles';
import { IP_ADDRESS } from "@env";

const AdminEditNotificationForm = ({ navigation, route }) => {

  // State variables for form inputs
  const [description, setDescription] = useState('');
  const [itemName, setItemName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [shopDetails, setShopDetails] = useState('');
  const [image, setImage] = useState(null);
  const notificationId = route.params?.notificationId; // Assume notification ID is passed via route params

  // Fetch the existing notification data if editing
  useEffect(() => {
    if (notificationId) {
      fetchNotificationDetails();
    }
  }, [notificationId]);

  // Function to fetch notification details
  const fetchNotificationDetails = async () => {
    try {
      console.log("IP Address: ", IP_ADDRESS);
      const response = await axios.get(`http://${IP_ADDRESS}:5000/notifications/${notificationId}`);
      const notification = response.data;
      setDescription(notification.description);
      setItemName(notification.itemName);
      setUserRole(notification.userRole);
      setExpiryDate(notification.expiryDate);
      setShopDetails(notification.shopDetails);
      setImage(notification.image ? { uri: `http://${IP_ADDRESS}:5000/${notification.image}` } : null);
    } catch (error) {
      console.error('Error fetching notification details:', error);
      Alert.alert('Error', 'Failed to load notification details');
    }
  };

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

  // Function to handle form submission (Update Notification)
  const handleSave = async () => {
    // Basic validation to ensure all fields are filled
    if (!description || !itemName || !userRole || !expiryDate || !shopDetails) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('description', description);
    formData.append('itemName', itemName);
    formData.append('userRole', userRole);
    formData.append('expiryDate', expiryDate);
    formData.append('shopDetails', shopDetails);

    if (image && image.uri) {
      formData.append('image', {
        uri: image.uri,
        type: image.type || 'image/jpeg',
        name: image.name || 'notification_image.jpg',
      });
    }

    try {
      await axios.put(`http://${IP_ADDRESS}:5000/notifications/${notificationId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Alert.alert('Success', 'Notification updated successfully');
      navigation.goBack(); // Navigate back after successful submission
    } catch (error) {
      console.error('Error updating notification:', error);
      Alert.alert('Error', 'Failed to update notification');
    }
  };

  // Function to delete the notification
  const handleDelete = async () => {
    try {
      await axios.delete(`http://${IP_ADDRESS}:5000/notifications/${notificationId}`);
      Alert.alert('Success', 'Notification deleted successfully');
      navigation.goBack(); // Navigate back after deletion
    } catch (error) {
      console.error('Error deleting notification:', error);
      Alert.alert('Error', 'Failed to delete notification');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.mainText}>
        <Text style={styles.title}>
          <Text style={styles.lastMinute}>Last Minute</Text>
          <Text style={styles.space}> </Text>
          <Text style={styles.pantry}>Pantry</Text>
        </Text>
      </View>

      {/* Edit Notification Title */}
      <View style={styles.headerSection}>
        <Text style={styles.editNotification}>Edit Notification</Text>
        <Image
          style={[styles.icon, styles.productsLayout]}
          resizeMode="cover"
          source={require('../../../assets/images/vendor/backarrow.png')}
        />
        <Image
          style={[styles.icon, styles.productsLayout]}
          resizeMode="cover"
          source={require('../../../assets/images/vendor/Vnav1.png')}
        />
      </View>

      {/* Form Fields */}
      <ScrollView contentContainerStyle={styles.formContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>Add description about your product or item</Text>
          <View style={styles.textAreaWrapper}>
            <TextInput
              style={styles.textArea}
              placeholder="Write here"
              placeholderTextColor="#737171"
              multiline={true}
              value={description}
              onChangeText={setDescription}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Item Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Product Name"
            placeholderTextColor="#737171"
            value={itemName}
            onChangeText={setItemName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>User Type</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter User Type"
            placeholderTextColor="#737171"
            value={userRole}
            onChangeText={setUserRole}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Expiry Date</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Expiry Date (YYYY-MM-DD)"
            placeholderTextColor="#737171"
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Shop Details</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Shop Details"
            placeholderTextColor="#737171"
            value={shopDetails}
            onChangeText={setShopDetails}
          />
        </View>

        <View style={styles.imageInputContainer}>
          <Text style={styles.inputLabel}>Input Image</Text>
          <TouchableOpacity style={styles.imageUpload} onPress={selectImage}>
            {image ? (
              <Image style={styles.uploadIcon} resizeMode="contain" source={image} />
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

      {/* Save and Delete Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdminEditNotificationForm;
