import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure this package is installed for icons
import styles from '../../../styles/Review/admin/ReviewAdminDashboardStyles'; // Import the styles from the stylesheet
import axios from 'axios'; // For handling HTTP requests
import { useNavigation } from '@react-navigation/native'; // For navigation between screens
import { IP_ADDRESS } from "@env";

const ReviewAdminDashboard = () => {

  const [reviews, setReviews] = useState([]); // State to store the reviews
  const navigation = useNavigation(); // For navigation

  // Fetch all reviews when the component mounts
  useEffect(() => {
    fetchReviews();
  }, []);

  // Function to fetch reviews from the backend
  const fetchReviews = async () => {
    try {
      console.log("IP Address: ", IP_ADDRESS);
      const response = await axios.get(`http://${IP_ADDRESS}:5000/reviews/`); // Update with your backend URL
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      Alert.alert('Error', 'Failed to fetch reviews');
    }
  };

  // Function to delete a review
  const deleteReview = async (id) => {
    try {
      console.log("IP Address: ", IP_ADDRESS);
      await axios.delete(`http://${IP_ADDRESS}:5000/reviews/${id}`);
      Alert.alert('Success', 'Review deleted successfully');
      fetchReviews(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting review:', error);
      Alert.alert('Error', 'Failed to delete review');
    }
  };

  // Function to handle editing a review
  const editReview = (review) => {
    navigation.navigate('ReviewManagerEditReview', { review }); // Assume you have an EditReviewForm screen set up
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <View style={styles.starRating}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Icon key={index} name={index < rating ? 'star' : 'star-o'} size={16} color="#000" />
        ))}
      </View>
    );
  };

  // Function to render each review item
  const renderReview = ({ item }) => (
    <View style={styles.reviewCard}>
      <Text style={styles.reviewText}>{item.review}</Text>
      <Text style={styles.reviewDate}>{new Date(item.createdAt).toLocaleDateString()}</Text>
      {renderStars(item.ratings)}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.editButton} onPress={() => editReview(item)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => deleteReview(item._id)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Text style={styles.highlight}>Last Minute</Text> Pantry
        </Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Review Management</Text>

      {/* Select Shop/User Button */}
      <TouchableOpacity style={styles.selectShopButton}>
        <Icon name="shopping-cart" size={20} color="#fff" />
        <Text style={styles.selectShopText}>Select shop/User</Text>
        <Icon name="bars" size={20} color="#fff" />
      </TouchableOpacity>

      {/* Filter and Search Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.buttonText}>Add Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Review List */}
      <FlatList
        data={reviews}
        renderItem={renderReview}
        keyExtractor={(item) => item._id.toString()}
        contentContainerStyle={styles.reviewList}
      />
    </View>
  );
};

export default ReviewAdminDashboard;
