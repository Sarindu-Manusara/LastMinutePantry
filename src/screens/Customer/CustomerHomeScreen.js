import React, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "../../styles/Customer/CustomerHomeScreenStyles";
import { IP_ADDRESS } from "@env"; // Ensure IP_ADDRESS is properly configured
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const CustomerHomeScreen = ({ route }) => {
  const navigation = useNavigation(); // Initialize navigation
  const customerId = route?.params?.customerId; // Safely access customerId from route.params

  const [customerName, setCustomerName] = useState('');
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch customer data by customerId
  const fetchCustomerData = async () => {
    try {
      const response = await fetch(`http://${IP_ADDRESS}:5000/users/users/${customerId}`);
      const json = await response.json();
      setCustomerName(json.name); // Assuming `json.name` contains the customer's name
    } catch (error) {
      console.error('Failed to fetch customer data:', error);
    }
  };

  // Fetch all reviews
  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://${IP_ADDRESS}:5000/reviews/`);
      const json = await response.json();
      setReviews(json); // Assuming this contains the array of reviews
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  // UseEffect to load customer data and reviews
  useEffect(() => {
    if (customerId) {
      fetchCustomerData();
      fetchReviews();
    }
  }, [customerId]);

  if (!customerId) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Customer ID not provided.</Text>
      </View>
    );
  }

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.customerHome}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.mainTextWrapper}>
          <Text style={styles.mainText}>
            <Text style={styles.lastMinute}>Last Minute</Text>
            {" "} {/* Ensure the space between text components is within a <Text> */}
            <Text style={styles.pantry}>Pantry</Text>
          </Text>
          <Text style={styles.welcomeText}>Hello {customerName}</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Food & Grocery */}
        <View style={styles.categoryContainer}>
          <View style={styles.categoryBox}>
            <Image style={styles.categoryIcon} source={require("../../assets/images/customer/grocery.png")} />
            <Text style={styles.categoryText}>Food & Grocery</Text>
          </View>
          <View style={styles.categoryBox}>
            <Image style={styles.categoryIcon} source={require("../../assets/images/customer/store.png")} />
            <Text style={styles.categoryText}>Stores</Text>
          </View>
        </View>

        {/* Offers */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Offers</Text>
          <View style={styles.offersContainer}>
            <Image style={styles.offerImage} source={require("../../assets/images/customer/keels.png")} />
            <Image style={styles.offerImage} source={require("../../assets/images/customer/PandS.png")} />
            <Image style={styles.offerImage} source={require("../../assets/images/customer/foodcity.png")} />
          </View>
        </View>

        {/* Suggestions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Suggestions for You</Text>
          <View style={styles.offersContainer}>
            <Image style={styles.offerImage} source={require("../../assets/images/customer/foodcity2.png")} />
            <Image style={styles.offerImage} source={require("../../assets/images/customer/delight.png")} />
            <Image style={styles.offerImage} source={require("../../assets/images/customer/keelsstore.png")} />
          </View>
        </View>

        {/* Reviews Section */}
        <View style={styles.reviewSection}>
          <Text style={styles.reviewTitle}>Check Reviews</Text>
          {reviews.map((review) => (
            <View key={review._id} style={styles.reviewContainer}>
              <Text style={styles.reviewerName}>{review.name}</Text>
              <Text style={styles.reviewText}>{review.review}</Text>
              {/* Optionally render image */}
              {review.image && (
                <Image
                  style={styles.reviewImage}
                  source={{ uri: `http://${IP_ADDRESS}:5000/reviews/${review.image}` }}
                />
              )}
              <Text style={styles.ratingsText}>Rating: {review.ratings}/5</Text>
            </View>
          ))}
        </View>
      </ScrollView>

       {/* Bottom Navigation */}
       <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('CustomerHomeScreen', { customerId })}>
          <Image style={styles.navIcon} source={require("../../assets/images/customer/Cnav1-active.png")} />
          <Text style={[styles.navText, { color: '#4fbb56' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Search')}>
          <Image style={styles.navIcon} source={require("../../assets/images/customer/Cnav2.png")} />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
  style={styles.navItem}  onPress={() => navigation.navigate('SelectAStore')}>
  <Image style={styles.navIcon} source={require("../../assets/images/customer/Cnav3.png")} />
  <Text style={styles.navText}>Browse</Text>
</TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Order')}>
          <Image style={styles.navIcon} source={require("../../assets/images/customer/Cnav4.png")} />
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('CustomerProfileScreen', { customerId })}>
          <Image style={styles.navIcon} source={require("../../assets/images/vendor/Vnav5.png")} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomerHomeScreen;
