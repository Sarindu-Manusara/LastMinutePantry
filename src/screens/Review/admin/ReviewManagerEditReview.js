import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure this package is installed for icons
import styles from '../../../styles/Review/admin/ReviewManagerEditReviewStyle'; // Import the styles from the stylesheet
import axios from 'axios'; // For handling HTTP requests
import { useNavigation, useRoute } from '@react-navigation/native'; // For navigation and route params
import { IP_ADDRESS } from "@env";

const ReviewManagerEditReview = () => {

  const [review, setReview] = useState(null); // State to hold review data
  const [name, setName] = useState(''); // State to hold name
  const [reviewText, setReviewText] = useState(''); // State to hold review text
  const [rating, setRating] = useState(0); // State to hold rating
  const route = useRoute(); // For accessing route parameters
  const navigation = useNavigation(); // For navigation between screens
  const { reviewId } = route.params; // Extract reviewId passed from the previous screen

  // Fetch the review details when the component mounts
  useEffect(() => {
    if (reviewId) {
      fetchReviewDetails();
    }
  }, [reviewId]);

  // Function to fetch review details from the backend
  const fetchReviewDetails = async () => {
    try {
      console.log("IP Address: ", IP_ADDRESS);
      const response = await axios.get(`http://${IP_ADDRESS}:5000/reviews/${reviewId}`); // Replace with your backend URL
      const reviewData = response.data;
      setReview(reviewData);
      setName(reviewData.name);
      setReviewText(reviewData.review);
      setRating(reviewData.ratings);
    } catch (error) {
      console.error('Error fetching review details:', error);
      Alert.alert('Error', 'Failed to fetch review details.');
    }
  };

  // Function to update the review
  const handleUpdateReview = async () => {
    if (!name || !reviewText || rating <= 0) {
      Alert.alert('Error', 'Please fill in all fields and select a rating.');
      return;
    }

    try {
      const updatedReview = {
        name,
        review: reviewText,
        ratings: rating,
      };

      const response = await axios.put(
        `http://${IP_ADDRESS}:5000/reviews/${reviewId}`,
        updatedReview
      );
      Alert.alert('Success', 'Review updated successfully.');
      navigation.goBack(); // Navigate back after successful update
    } catch (error) {
      console.error('Error updating review:', error);
      Alert.alert('Error', 'Failed to update the review.');
    }
  };

  // Function to render stars for the rating
  const renderStars = () => {
    return (
      <View style={styles.starRating}>
        {Array.from({ length: 5 }).map((_, index) => (
          <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
            <Icon
              name={index < rating ? 'star' : 'star-o'}
              size={30}
              color={index < rating ? '#FFD700' : '#808080'}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Text style={styles.highlight}>Last Minute</Text> Pantry
        </Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Edit Review</Text>

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
        value={reviewText}
        onChangeText={setReviewText}
      />

      {/* Star Rating */}
      {renderStars()}

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleUpdateReview}>
        <Text style={styles.submitButtonText}>Update Review</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewManagerEditReview;
