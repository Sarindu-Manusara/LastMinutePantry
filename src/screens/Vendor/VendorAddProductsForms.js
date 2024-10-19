import React, { useState } from "react";
import { Text, View, Image, Pressable, TextInput, ScrollView, Platform, Alert } from "react-native";
import axios from "axios";
import { launchImageLibrary } from "react-native-image-picker";
import { useRoute, useNavigation } from "@react-navigation/native"; // Import necessary hooks
import styles from "../../styles/Vendor/vendorAddProductsStyles";
import { IP_ADDRESS } from "@env";


const VendorAddProductsForms = () => {
  const route = useRoute(); // To get vendorId from previous screen
  const navigation = useNavigation();
  const vendorId = route.params?.vendorId; // Retrieve vendorId passed from the previous screen
  
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [expiryDate, setExpireDate] = useState('');
  const [image, setImage] = useState(null);

  // Function to handle image selection
  const handleImageSelect = async () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    const result = await launchImageLibrary(options);

    if (result.didCancel) {
      console.log('Image selection canceled');
    } else if (result.errorCode) {
      console.error('ImagePicker Error: ', result.errorMessage);
    } else if (result.assets && result.assets.length > 0) {
      const imageUri = result.assets[0].uri;
      setImage(imageUri);
    }
  };

  // Function to validate expiry date format
  const validateDate = (date) => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Matches YYYY-MM-DD format
    return datePattern.test(date);
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    // Validations
    if (!productName) {
      Alert.alert('Error', 'Product Name is required.');
      return;
    }

    if (productName.length < 3 || productName.length > 50) {
      Alert.alert('Error', 'Product Name should be between 3 to 50 characters.');
      return;
    }

    if (!price || isNaN(price) || parseFloat(price) <= 0) {
      Alert.alert('Error', 'Price should be a valid number greater than zero.');
      return;
    }

    if (!stock || isNaN(stock) || parseInt(stock) <= 0) {
      Alert.alert('Error', 'Stock should be a positive number.');
      return;
    }

    if (!expiryDate) {
      Alert.alert('Error', 'Expiry Date is required.');
      return;
    }

    if (!validateDate(expiryDate)) {
      Alert.alert('Error', 'Expiry Date should be in the format YYYY-MM-DD.');
      return;
    }

    if (!image) {
      Alert.alert('Error', 'Please select an image for the product.');
      return;
    }

    // Create a FormData object
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('expiryDate', expiryDate);
    formData.append('vendorId', vendorId); // Add the vendorId to the form data

    if (image) {
      const filename = image.split('/').pop();
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : 'image';

      formData.append('image', {
        uri: Platform.OS === 'android' ? image : image.replace('file://', ''),
        type: type,
        name: filename,
      });
    }

    try {
      const response = await axios.post(`http://${IP_ADDRESS}:5000/products/create`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Alert.alert('Success', 'Product added successfully');
      // Reset form fields
      setProductName('');
      setPrice('');
      setStock('');
      setExpireDate('');
      setImage(null);
      navigation.goBack(); // Navigate back to the product list after successful submission
    } catch (error) {
      console.error('Error adding product:', error.response ? error.response.data : error.message);
      Alert.alert('Error', 'Failed to add product');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.lastMinutePantryContainer}>
          <Text style={styles.lastMinute}>Last Minute</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.pantry}>Pantry</Text>
        </Text>
      </View>

      {/* Navigation and Title */}
      <View style={styles.myProducts}>
        <Pressable style={styles.icons8UpArrow5} onPress={() => navigation.goBack()}>
          <Image style={styles.icon} resizeMode="cover" source={require('../../assets/images/vendor/backarrow.png')} />
        </Pressable>
        <Text style={styles.addProducts}>Add Products</Text>
        <Pressable style={styles.wrapper} onPress={() => navigation.navigate("VendorDashboard", { vendorId })}>
          <Image style={styles.icon} resizeMode="cover" source={require('../../assets/images/vendor/Vnav1.png')} />
        </Pressable>
      </View>

      {/* Form */}
      <ScrollView contentContainerStyle={styles.formContainer}>
        <View style={styles.inputField}>
          <Text style={styles.inputLabel}>Product Name</Text>
          <TextInput 
            style={styles.textInput}
            placeholder="Enter Product Name"
            placeholderTextColor="#000"
            value={productName}
            onChangeText={setProductName}
          />
        </View>

        <View style={styles.inputField}>
          <Text style={styles.inputLabel}>Price</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Price"
            placeholderTextColor="#000"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputField}>
          <Text style={styles.inputLabel}>Stock</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Stock"
            placeholderTextColor="#000"
            value={stock}
            onChangeText={setStock}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputField}>
          <Text style={styles.inputLabel}>Expire Date</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Expire Date (YYYY-MM-DD)"
            placeholderTextColor="#000"
            value={expiryDate}
            onChangeText={setExpireDate}
          />
        </View>

        <View style={styles.imageField}>
          <Text style={styles.inputLabel}>Product Image</Text>
          {image ? (
            <Image source={{ uri: image }} style={styles.imagePreview} />
          ) : (
            <Pressable style={styles.imageUploadButton} onPress={handleImageSelect}>
              <Image source={require('../../assets/images/vendor/uploadicon.png')} style={styles.uploadIcon} />
            </Pressable>
          )}
        </View>

        <Pressable style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add Product</Text>
        </Pressable>
      </ScrollView>

      {/* Navigation Bar */}
      <View style={styles.navigationBar}>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate("VendorDashboard", { vendorId })}>
          <Image style={styles.navIcon} resizeMode="cover" source={require('../../assets/images/vendor/Vnav1.png')} />
          <Text style={styles.navText}>Dashboard</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate("VendorProducts", { vendorId })}>
          <Image style={styles.navIcon} resizeMode="cover" source={require('../../assets/images/vendor/Vnav2-active.png')} />
          <Text style={[styles.navText, { color: '#109415' }]}>Products</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate("VendorOrderScreen", { vendorId })}>
          <Image style={styles.navIcon} resizeMode="cover" source={require('../../assets/images/vendor/Vnav3.png')} />
          <Text style={styles.navText}>Orders</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate("VendorNotificationScreen", { vendorId })}>
          <Image style={styles.navIcon} resizeMode="cover" source={require('../../assets/images/vendor/Vnav4.png')} />
          <Text style={styles.navText}>Notifications</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate("VendorProfileScreen", { vendorId })}>
          <Image style={styles.navIcon} resizeMode="cover" source={require('../../assets/images/vendor/Vnav5.png')} />
          <Text style={styles.navText}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default VendorAddProductsForms;
