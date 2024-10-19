import React, { useState, useEffect } from "react";
import { Text, View, Image, Pressable, Alert } from "react-native";
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';
import RNHTMLtoPDF from 'react-native-html-to-pdf'; // Import the library for generating PDFs
import styles from '../../../styles/Customer/admin/UserInfoScreenStyles';
import { IP_ADDRESS } from "@env";

const UserManagerUserDetailsPage = () => {

  const [user, setUser] = useState(null); // State to hold user details
  const route = useRoute();
  const navigation = useNavigation();
  const { userId } = route.params; // Get userId from route parameters

  // Fetch user details when component mounts
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        console.log("IP Address: ", IP_ADDRESS);
        const response = await axios.get(`http://${IP_ADDRESS}:5000/users/users/${userId}`); // Replace with your API URL
        setUser(response.data);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch user details');
        console.error(error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  // Handle user deletion
  const handleDeleteUser = async () => {
    try {
      console.log("IP Address: ", IP_ADDRESS);
      await axios.delete(`http://${IP_ADDRESS}:5000/users/${userId}`);
      Alert.alert('Success', 'User deleted successfully');
      navigation.goBack(); // Navigate back after deletion
    } catch (error) {
      Alert.alert('Error', 'Failed to delete user');
      console.error(error);
    }
  };

  // Handle edit user - navigates to Edit User screen
  const handleEditUser = () => {
    navigation.navigate('UserManagerEditUser', { userId }); // Assume EditUser screen exists
  };

  // Handle PDF generation
  const handleGenerateReport = async () => {
    if (!user) return;

    // Define the HTML content for the PDF
    const htmlContent = `
      <h1>User Report</h1>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Role:</strong> ${user.role}</p>
      <p><strong>Address:</strong> ${user.address}</p>
      <p><strong>Contact Number:</strong> ${user.contactNumber || 'N/A'}</p>
      <p><strong>Status:</strong> Active</p>
    `;

    try {
      // Create the PDF from HTML content
      const options = {
        html: htmlContent,
        fileName: `${user.name}_report`,
        directory: 'Documents',
      };

      const file = await RNHTMLtoPDF.convert(options);
      Alert.alert('Success', `PDF Report has been saved to: ${file.filePath}`);
    } catch (error) {
      Alert.alert('Error', 'Failed to generate PDF');
      console.error(error);
    }
  };

  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.userManagerUserDetailsPa}>
      {/* Header */}
      <View style={styles.maintextParent}>
        <View style={styles.maintext}>
          <Text style={styles.lastMinutePantryContainer}>
            <Text style={styles.lastMinute}>Last Minute</Text>
            <Text> </Text>
            <Text style={styles.pantry}>Pantry</Text>
          </Text>
        </View>
        <View style={styles.dashboardTitleContainer}>
                <Image style={styles.icon} source={require('../../../assets/images/vendor/search.png')} />
                <Text style={styles.dashboardTitle}>User Details Page</Text>
                <Image style={styles.icon} source={require('../../../assets/images/vendor/Vnav1.png')} />
            </View>
      </View>

      {/* User Information */}
      <View style={styles.frameParent}>
        <View style={styles.johnDoeParent}>
          <Text style={[styles.johnDoe, styles.johnDoeTypo]}>{user.name}</Text>
          <Text style={[styles.johngmailcom, styles.johnDoeTypo]}>{user.email}</Text>
          <Text style={[styles.roleCustomer, styles.editUserTypo]}>Role: {user.role}</Text>
          <Text style={[styles.roleCustomer, styles.editUserTypo]}>Status: Active</Text>
        </View>

        {/* Actions */}
        <View style={styles.frameGroup}>
          {/* Edit User Button */}
          <Pressable style={styles.frameShadowBox} onPress={handleEditUser}>
            <View style={[styles.editWrapper, styles.childLayout]}>
              <Image style={[styles.editIcon, styles.iconLayout]} resizeMode="cover" source={require('../../../assets/images/vendor/Admin/edit.png')} />
            </View>
            <Text style={styles.editUserTypo}>Edit User</Text>
          </Pressable>

          {/* Delete User Button */}
          <Pressable style={styles.frameShadowBox} onPress={handleDeleteUser}>
            <View style={[styles.editWrapper, styles.childLayout]}>
              <Image style={styles.iconLayout} resizeMode="cover" source={require('../../../assets/images/vendor/Admin/delete.png')} />
            </View>
            <Text style={styles.editUserTypo}>Delete User</Text>
          </Pressable>

          {/* Generate Report Button */}
          <Pressable style={styles.frameShadowBox} onPress={handleGenerateReport}>
            <Image style={[styles.frameChild, styles.childLayout]} resizeMode="cover" source={require('../../../assets/images/vendor/Admin/report.png')} />
            <Text style={styles.editUserTypo}>Generate Report</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default UserManagerUserDetailsPage;
