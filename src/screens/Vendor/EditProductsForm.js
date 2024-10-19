// EditProductsForm.js
import React, { useState, useEffect } from "react";
import { Text, View, Image, Pressable, TextInput, ScrollView, Platform } from "react-native";
import axios from "axios";
import { launchImageLibrary } from "react-native-image-picker";
import { useRoute, useNavigation } from "@react-navigation/native"; // Use these hooks to get route parameters and navigate
import styles from "../../styles/Vendor/vendorAddProductsStyles";
import { IP_ADDRESS } from "@env";

const EditProductsForm = () => {

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [expiryDate, setExpireDate] = useState('');
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState(null); // To handle existing image
  const route = useRoute();
  const navigation = useNavigation();
  const { productId } = route.params; // Assuming the product ID is passed as a route parameter

  // Fetch existing product data when the component loads
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("IP Address: ", IP_ADDRESS);
        const response = await axios.get(`http://${IP_ADDRESS}:5000/products/${productId}`);
        const product = response.data;
        setProductName(product.productName);
        setPrice(product.price.toString());
        setStock(product.stock.toString());
        setExpireDate(product.expiryDate ? new Date(product.expiryDate).toISOString().split('T')[0] : '');
        setExistingImage(product.image);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

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

  const handleSubmit = async () => {
    console.log('Submitting expiryDate:', expiryDate);

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('expiryDate', expiryDate);

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
      console.log("IP Address: ", IP_ADDRESS);
      const response = await axios.put(`http://${IP_ADDRESS}:5000/products/${productId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product updated successfully:', response.data);
      // Navigate back to the products list or another relevant screen
      navigation.goBack();
    } catch (error) {
      console.error('Error updating product:', error.response ? error.response.data : error.message);
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
        <Text style={styles.addProducts}>Edit Product</Text>
        <Pressable style={styles.wrapper} onPress={() => {}}>
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
          ) : existingImage ? (
            <Image source={{ uri: `http://${IP_ADDRESS}:5000/${existingImage}` }} style={styles.imagePreview} />
          ) : (
            <Pressable style={styles.imageUploadButton} onPress={handleImageSelect}>
              <Image source={require('../../assets/images/vendor/uploadicon.png')} style={styles.uploadIcon} />
            </Pressable>
          )}
        </View>

        <Pressable style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Update Product</Text>
        </Pressable>
      </ScrollView>

      {/* Navigation Bar */}
      <View style={styles.navigationBar}>
        <Pressable style={styles.navItem} onPress={() => {}}>
          <Image style={styles.navIcon} resizeMode="cover" source={require('../../assets/images/vendor/Vnav1.png')} />
          <Text style={styles.navText}>Dashboard</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => {}}>
          <Image style={styles.navIcon} resizeMode="cover" source={require('../../assets/images/vendor/Vnav2-active.png')} />
          <Text style={[styles.navText, { color: '#109415' }]}>Products</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => {}}>
          <Image style={styles.navIcon} resizeMode="cover" source={require('../../assets/images/vendor/Vnav3.png')} />
          <Text style={styles.navText}>Orders</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => {}}>
          <Image style={styles.navIcon} resizeMode="cover" source={require('../../assets/images/vendor/Vnav4.png')} />
          <Text style={styles.navText}>Notifications</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => {}}>
          <Image style={styles.navIcon} resizeMode="cover" source={require('../../assets/images/vendor/Vnav5.png')} />
          <Text style={styles.navText}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EditProductsForm;
