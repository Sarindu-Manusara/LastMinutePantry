import React, { useEffect, useState } from "react";
import { Image, Text, View, ActivityIndicator, TouchableOpacity, Alert } from "react-native";
import styles from "../../styles/Customer/EditCustomerScreenStyles"; 
import { useRoute, useNavigation } from "@react-navigation/native"; 
import { IP_ADDRESS } from "@env"; 
import * as ImagePicker from "react-native-image-picker"; // Import Image Picker
import axios from "axios"; // To handle image upload

const EditCustomerProfile = () => {
  const route = useRoute(); // To access route params
  const { userId } = route.params; // Get the userId passed through navigation
  const navigation = useNavigation(); // To handle navigation

  // State to hold user data, loading state, and profile image
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null); // To store selected image

  // Fetch the user details using the userId
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://${IP_ADDRESS}:5000/users/users/${userId}`);
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
        setLoading(false);
      }
    };
    
    fetchUserDetails();
  }, [userId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!userData) {
    return <Text>Error loading user data</Text>;
  }

  // Handle image picker and upload
  const handleImagePicker = async () => {
    ImagePicker.launchImageLibrary(
      { mediaType: "photo" },
      async (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.errorMessage) {
          Alert.alert("Error", response.errorMessage);
        } else if (response.assets) {
          const imageUri = response.assets[0].uri;
          setSelectedImage(imageUri);

          // Upload the image to the server
          const formData = new FormData();
          formData.append("image", {
            uri: imageUri,
            name: "profile.jpg",
            type: "image/jpeg",
          });

          try {
            const res = await axios.put(`http://${IP_ADDRESS}:5000/users/${userId}/upload`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });

            if (res.data.success) {
              Alert.alert("Success", "Profile picture updated successfully");
              setUserData({ ...userData, image: res.data.imagePath }); // Update user data with new image
            }
          } catch (error) {
            Alert.alert("Error", "Failed to upload image");
            console.error(error);
          }
        }
      }
    );
  };

  return (
    <View style={styles.editUserProfile}>
      <View style={[styles.icons8UpArrow6Parent, styles.wrapperFlexBox]}>
        <TouchableOpacity onPress={handleImagePicker}> 
          <Image
            style={styles.icons8AddImage502}
            resizeMode="cover"
            source={selectedImage ? { uri: selectedImage } : userData.image ? { uri: `http://${IP_ADDRESS}${userData.image}` } : require("../../assets/images/customer/icons8-add-image-50 2.png")}
          />
        </TouchableOpacity>
        <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
      </View>

      <View style={[styles.completeYourProfileParent, styles.buttonPosition]}>
        <Text style={[styles.completeYourProfile, styles.profileTypo]}>Complete your profile</Text>
        <Text style={[styles.completeYourProfile, styles.profileTypo]}>70% COMPLETED</Text>
      </View>

      <View style={styles.yourInfoParent}>
        <Text style={[styles.yourInfo, styles.textTypo]}>Your Info</Text>

        {/* Full Name */}
        <View style={styles.frameParent}>
          <View style={styles.icons8User5011Parent}>
            <Image style={styles.icons8User5011} resizeMode="cover" source={require("../../assets/images/customer/icons8-user-50 1.png")} />
            <View style={styles.fullNameParent}>
              <Text style={[styles.yourInfo, styles.textTypo]}>Full Name</Text>
              <Text style={[styles.sarinduSamarasekara, styles.sarinduTypo]}>{userData.name}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EditFullName', { userId })}>
            <Text style={[styles.text, styles.textTypo]}>{`>`}</Text>
          </TouchableOpacity>
        </View>

        {/* Email */}
        <View style={styles.frameGroup}>
          <Image style={styles.icons8User5011} resizeMode="cover" source={require("../../assets/images/customer/icons8-envelope-48 1.png")} />
          <View style={styles.emailAddressParent}>
            <Text style={[styles.yourInfo, styles.textTypo]}>Email Address</Text>
            <Text style={[styles.sarinduSamarasekaragmailcom, styles.sarinduTypo]}>{userData.email}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EditEmail', { userId })}>
            <Text style={[styles.text1, styles.textTypo]}>{`>`}</Text>
          </TouchableOpacity>
        </View>

        {/* Mobile Number */}
        <View style={styles.frameContainer}>
          <View style={styles.icons8Phone241Parent}>
            <Image style={styles.icons8User5011} resizeMode="cover" source={require("../../assets/images/customer/icons8-phone-24 1.png")} />
            <View style={styles.frameWrapper}>
              <View style={styles.mobileNumberParent}>
                <Text style={[styles.text, styles.textTypo]}>Mobile Number</Text>
                <Text style={[styles.text2, styles.sarinduTypo]}>{userData.phone}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EditPhone', { userId })}>
            <Text style={[styles.text, styles.textTypo]}>{`>`}</Text>
          </TouchableOpacity>
        </View>

        {/* Birthday */}
        <View style={styles.frameContainer}>
          <View style={styles.icons8Phone241Parent}>
            <Image style={styles.icons8User5011} resizeMode="cover" source={require("../../assets/images/customer/icons8-cake-48 1.png")} />
            <View style={styles.frameWrapper}>
              <View style={styles.mobileNumberParent}>
                <Text style={[styles.text, styles.textTypo]}>Birthday</Text>
                <Text style={[styles.text2, styles.sarinduTypo]}>{userData.birthday || 'Not Set'}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EditBirthday', { userId })}>
            <Text style={[styles.text, styles.textTypo]}>{`>`}</Text>
          </TouchableOpacity>
        </View>

        {/* Gender */}
        <View style={styles.frameContainer}>
          <View style={styles.icons8Phone241Parent}>
            <Image style={styles.icons8User5011} resizeMode="cover" source={require("../../assets/images/customer/icons8-gender-50 1.png")} />
            <View style={styles.frameWrapper}>
              <View style={styles.mobileNumberParent}>
                <Text style={[styles.text, styles.textTypo]}>Gender</Text>
                <Text style={[styles.text2, styles.sarinduTypo]}>{userData.gender || 'Not Set'}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EditGender', { userId })}>
            <Text style={[styles.text, styles.textTypo]}>{`>`}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.button, styles.buttonPosition]}>
        <Text style={[styles.logOut, styles.textTypo]}>Log Out</Text>
      </View>
    </View>
  );
};

export default EditCustomerProfile;
