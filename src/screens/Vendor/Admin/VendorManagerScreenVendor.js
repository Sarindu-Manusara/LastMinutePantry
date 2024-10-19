import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Image, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // for navigation
import styles from '../../../styles/Vendor/Admin/vendorManagerScreenStyles'; // Import the separated stylesheet
import { IP_ADDRESS } from "@env";

const VendorManagerScreenVendor = () => {

  const [vendors, setVendors] = useState([]); // State to store vendor data
  const [filteredVendors, setFilteredVendors] = useState([]); // State to store filtered vendors
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const navigation = useNavigation(); // For navigation between screens

  // Fetch vendor data from the backend
  useEffect(() => {
    console.log("IP Address: ", IP_ADDRESS);
    const fetchVendors = async () => {
      try {
        console.log("IP Address: ", IP_ADDRESS);
        const response = await fetch(`http://${IP_ADDRESS}:5000/vendors`); // Change URL as per your backend
        const data = await response.json();
        setVendors(data);
        setFilteredVendors(data); // Initialize filtered vendors with all vendors
      } catch (error) {
        console.error('Error fetching vendors:', error);
      }
    };

    fetchVendors();
  }, []);

  // Handle vendor deletion
  const handleDelete = async (vendorId) => {
    try {
      console.log("IP Address: ", IP_ADDRESS);
      const response = await fetch(`http://${IP_ADDRESS}:5000/vendors/${vendorId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        Alert.alert('Vendor Deleted', 'The vendor has been deleted successfully.');
        setVendors(vendors.filter((vendor) => vendor._id !== vendorId)); // Update UI
        setFilteredVendors(filteredVendors.filter((vendor) => vendor._id !== vendorId)); // Update filtered UI
      } else {
        Alert.alert('Error', 'Failed to delete vendor.');
      }
    } catch (error) {
      console.error('Error deleting vendor:', error);
      Alert.alert('Error', 'Failed to delete vendor.');
    }
  };

  // Filter vendors based on search term
  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term state
    const filtered = vendors.filter(vendor =>
      vendor.name.toLowerCase().includes(term.toLowerCase()) // Case-insensitive search
    );
    setFilteredVendors(filtered); // Update the filtered vendors state
  };

  return (
    <View style={styles.vendorManagerScreenVendor}>
      <View style={styles.maintextParent}>
        <View style={styles.maintext}>
          <Text style={styles.lastMinutePantryContainer}>
            <Text style={styles.lastMinute}>Last Minute</Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.pantry}>Pantry</Text>
          </Text>
        </View>
        <View style={styles.myProducts}>
          <Text style={styles.vendorManagerDashboard}>Vendor Manager {"\n"}      Dashboard</Text>
        </View>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search vendors..."
        placeholderTextColor={'#000000'}
        value={searchTerm}
        onChangeText={handleSearch}
      />

      <View style={styles.frameParent}>
        {filteredVendors.map((vendor) => (
          <Pressable key={vendor._id} style={styles.parentShadowBox}>
            <Text style={styles.vendorName}>{vendor.name}</Text>
            <View style={styles.infoParent}>
              {/* Info button */}
              <Pressable
                style={styles.infoLayout}
                onPress={() => navigation.navigate('VendorDetailsPageVendorM', { vendorId: vendor._id })} // Navigate to info page
              >
                <Image
                  style={styles.groupChild}
                  resizeMode="cover"
                  source={require('../../../assets/images/vendor/Admin/info.png')}
                />
              </Pressable>

              {/* Edit button */}
              <Pressable
                style={styles.edit}
                onPress={() => navigation.navigate('VendorManagerEditVendor', { vendorId: vendor._id })} // Navigate to edit form
              >
                <Image
                  style={styles.editIcon}
                  resizeMode="cover"
                  source={require('../../../assets/images/vendor/Admin/edit.png')}
                />
              </Pressable>

              {/* Delete button */}
              <Pressable style={styles.edit} onPress={() => handleDelete(vendor._id)}> 
                <Image
                  style={styles.editIcon}
                  resizeMode="cover"
                  source={require('../../../assets/images/vendor/Admin/delete.png')}
                />
              </Pressable>
            </View>
          </Pressable>
        ))}
      </View>

      {/* Floating Action Button */}
      <Pressable style={styles.floatingButton} onPress={() => navigation.navigate('VendorManagerAddVendorScreen')}>
        <Image
          style={styles.plusIcon}
          resizeMode="contain"
          source={require('../../../assets/images/vendor/Admin/plusicon.png')}
        />
      </Pressable>
    </View>
  );
};

export default VendorManagerScreenVendor;
