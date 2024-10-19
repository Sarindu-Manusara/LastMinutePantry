import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker'; // Import image picker for uploading images
import axios from 'axios'; // Import axios for HTTP requests
import styles from '../../styles/Review/CustomerAddReviewStyles';// Import styles from the external stylesheet
import { IP_ADDRESS } from "@env";
 
const CustomerAddReview = () => {

  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [image, setImage] = useState(null);
  const [ratings, setRatings] = useState(0);

  // Function to handle image selection
  const selectImage = async () => {
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
      setImage(result.assets[0]);
    }
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    // Validate form data
    if (!name || !review || ratings === 0) {
      Alert.alert('Error', 'Please fill out all fields and provide a rating.');
      return;
    }

    // Prepare form data for backend submission
    const formData = new FormData();
    formData.append('name', name);
    formData.append('review', review);
    formData.append('ratings', ratings);

    if (image) {
      formData.append('image', {
        uri: image.uri,
        type: image.type,
        name: image.fileName,
      });
    }

    try {
      console.log("IP Address: ", IP_ADDRESS);
      const response = await axios.post(`http://${IP_ADDRESS}:5000/reviews/create`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      Alert.alert('Success', 'Review submitted successfully!');
      // Clear form fields
      setName('');
      setReview('');
      setImage(null);
      setRatings(0);
    } catch (error) {
      console.error('Error submitting review:', error);
      Alert.alert('Error', 'Failed to submit review.');
    }
  };

  // Function to handle rating selection
  const handleRatingPress = (index) => {
    setRatings(index + 1);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Text style={styles.highlight}>Last Minute</Text> Pantry
        </Text>
      </View>

      {/* Write Review Section */}
      <View style={styles.writeReviewSection}>
        <Text style={styles.sectionTitle}>Write Review</Text>

        {/* Select Shop */}
        <TouchableOpacity style={styles.selectShopButton}>
          <Icon name="shopping-cart" size={20} color="#fff" />
          <Text style={styles.selectShopText}>Select shop</Text>
          <Icon name="bars" size={20} color="#fff" />
        </TouchableOpacity>

        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          placeholderTextColor="#808080"
          value={name}
          onChangeText={setName}
        />

        {/* Review Input */}
        <TextInput
          style={styles.input}
          placeholder="Write Review"
          placeholderTextColor="#808080"
          value={review}
          onChangeText={setReview}
        />

        {/* Image Upload */}
        <TouchableOpacity style={styles.imageInput} onPress={selectImage}>
          {image ? (
            <Image source={{ uri: image.uri }} style={styles.uploadedImage} />
          ) : (
            <Icon name="cloud-upload" size={40} color="#fff" />
          )}
        </TouchableOpacity>

        {/* Star Rating */}
        <View style={styles.starRating}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon
              key={index}
              name={index < ratings ? 'star' : 'star-o'}
              size={30}
              color={index < ratings ? '#ffd700' : '#808080'}
              onPress={() => handleRatingPress(index)}
            />
          ))}
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomerAddReview;
