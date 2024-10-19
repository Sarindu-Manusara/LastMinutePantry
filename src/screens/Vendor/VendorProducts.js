import React, { useEffect, useState } from "react";
import { Image, Text, View, Pressable, ScrollView, TextInput } from "react-native";
import axios from "axios";
import styles from "../../styles/Vendor/vendorProductsStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IP_ADDRESS } from "@env";

const VendorProducts = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const navigation = useNavigation();
  const route = useRoute();

  const vendorId = route.params?.vendorId; // Retrieve the vendorId passed from the VendorDashboard

  // Fetch products from the backend based on vendorId
  useEffect(() => {
    const fetchProducts = async () => {
      if (!vendorId) {
        console.error("No vendorId provided.");
        return; // Do not load products if vendorId is missing
      }

      try {
        console.log("Vendor ID:", vendorId); // Ensure the vendorId is being passed correctly
        const response = await axios.get(`http://${IP_ADDRESS}:5000/products?vendorId=${vendorId}`); // Adjust the API URL to filter by vendorId
        if (response.data && response.data.length > 0) {
          setProducts(response.data); // Update state with fetched products
          setFilteredProducts(response.data); // Initially, show all products
        } else {
          console.log("No products found for the vendor.");
          setProducts([]); // No products for this vendor
          setFilteredProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Only fetch if vendorId is available
  }, [vendorId]);

  // Function to handle product deletion
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://${IP_ADDRESS}:5000/products/${productId}`); // Adjust URL accordingly
      const updatedProducts = products.filter(product => product._id !== productId);
      setProducts(updatedProducts); // Remove deleted product from state
      setFilteredProducts(updatedProducts); // Update the filtered products as well
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Function to handle product editing
  const handleEdit = (productId) => {
    // Navigate to the EditProductsForm screen and pass the product ID
    navigation.navigate("EditProductsForm", { productId });
  };

  // Handle search input
  const handleSearch = (text) => {
    setSearchTerm(text);
    const filtered = products.filter(product =>
      product.productName.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <View style={styles.vendorProducts}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.lastMinutePantryContainer}>
          <Text style={styles.lastMinute}>Last Minute</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.pantry}>Pantry</Text>
        </Text>
      </View>

      {/* My Products Section */}
      <View style={styles.myProducts}>
        <Pressable style={styles.iconContainer}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../../assets/images/vendor/Vnav5.png")}
          />
        </Pressable>
        <Text style={styles.myProductsText}>My Products</Text>
        <Pressable style={styles.iconContainer}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../../assets/images/vendor/search.png")}
          />
        </Pressable>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search products..."
        placeholderTextColor="#575252"
        value={searchTerm}
        onChangeText={handleSearch}
      />

      {/* Add Product Button */}
      <Pressable
        style={styles.addProductButton}
        onPress={() => {
          navigation.navigate("VendorAddProductsForms", { vendorId });
        }}
      >
        <Text style={styles.addProductButtonText}>Add Product</Text>
      </Pressable>

      {/* ScrollView for product cards */}
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.productsContainer}>
          {/* Render Filtered Product Cards */}
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <View key={product._id} style={[styles.productCard, styles.productShadowBox]}>
                <Image
                  style={styles.productImage}
                  resizeMode="cover"
                  source={{ uri: `http://${IP_ADDRESS}:5000/uploads/${product.Image}` }} // Adjust path if necessary
                />
                <View style={styles.productDetails}>
                  <Text style={styles.productName}>{product.productName}</Text>
                  <Text style={styles.productStock}>Stock: {product.stock}</Text>
                  <Text style={styles.productExpiry}>Expiry: {product.expiryDate || 'N/A'}</Text>
                  <Text style={styles.productPrice}>Rs: {product.price.toFixed(2)}</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <Pressable style={styles.editButton} onPress={() => { handleEdit(product._id) }}>
                    <Text style={styles.editButtonText}>Edit</Text>
                  </Pressable>
                  <Pressable style={styles.deleteButton} onPress={() => handleDelete(product._id)}>
                    <Text style={styles.deleteButtonText}>Delete</Text>
                  </Pressable>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.noProductsText}>No products found for this vendor.</Text>
          )}
        </ScrollView>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.navigationBar}>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('VendorDashboard', { vendorId })}>
          <Image
            style={styles.navIcon}
            resizeMode="cover"
            source={require("../../assets/images/vendor/Vnav1.png")}
          />
          <Text style={styles.navText}>Dashboard</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Image
            style={styles.navIcon}
            resizeMode="cover"
            source={require("../../assets/images/vendor/Vnav2-active.png")}
          />
          <Text style={[styles.navText, { color: '#109415' }]}>Products</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('VendorOrderScreen', { vendorId })}>
          <Image
            style={styles.navIcon}
            resizeMode="cover"
            source={require("../../assets/images/vendor/Vnav3.png")}
          />
          <Text style={styles.navText}>Orders</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('VendorNotificationScreen', { vendorId })}>
          <Image
            style={styles.navIcon}
            resizeMode="cover"
            source={require("../../assets/images/vendor/Vnav4.png")}
          />
          <Text style={styles.navText}>Notifications</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={() => navigation.navigate('VendorProfileScreen', { vendorId })}>
          <Image
            style={styles.navIcon}
            resizeMode="cover"
            source={require("../../assets/images/vendor/Vnav5.png")}
          />
          <Text style={styles.navText}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default VendorProducts;
