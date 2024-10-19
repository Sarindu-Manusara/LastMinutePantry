import React, { useEffect, useState } from 'react';
import { Text, View, Image, Pressable, Alert, PermissionsAndroid } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // for navigation and route params
import axios from 'axios';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Voice from 'react-native-voice';
import styles from '../../../styles/Vendor/Admin/vendorDetailsPageVendorMStyles'; // Import the separated stylesheet
import { IP_ADDRESS } from "@env";
import Share from 'react-native-share';

const VendorDetailsPageVendorM = () => {
  const [vendor, setVendor] = useState(null); // State to store vendor details
  const [voiceText, setVoiceText] = useState(''); // To store the recognized voice command
  const [isPermissionGranted, setIsPermissionGranted] = useState(false); // Track permission status
  const [isMicActive, setIsMicActive] = useState(false); // Track mic button state
  const [isVendorLoaded, setIsVendorLoaded] = useState(false); // Ensure vendor is loaded
  const navigation = useNavigation(); // For navigation between screens
  const route = useRoute(); // For accessing route parameters
  const { vendorId } = route.params; // Extract vendorId passed from the previous screen

  // Request microphone permission on app start
  useEffect(() => {
    requestMicrophonePermission();
  }, []);

  const requestMicrophonePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: "Microphone Permission",
          message: "This app needs access to your microphone for voice recognition.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setIsPermissionGranted(true);
      } else {
        Alert.alert("Permission Denied", "Microphone access is required for voice commands.");
        setIsPermissionGranted(false);
      }
    } catch (err) {
      console.warn('Microphone permission error:', err);
      setIsPermissionGranted(false);
    }
  };

  // Fetch vendor details from the backend based on the given ID
  useEffect(() => {
    const fetchVendorDetails = async () => {
      try {
        const response = await axios.get(`http://${IP_ADDRESS}:5000/vendors/${vendorId}`);
        setVendor(response.data); // Set the vendor data once fetched
        console.log('Vendor data loaded:', response.data); // Debugging log
        setIsVendorLoaded(true); // Vendor is now fully loaded
      } catch (error) {
        console.error('Error fetching vendor details:', error);
        Alert.alert('Error', 'Failed to fetch vendor details.');
      }
    };

    fetchVendorDetails();
  }, [vendorId]);

  // Voice command handling
  useEffect(() => {
    if (isPermissionGranted && isVendorLoaded) {
      Voice.onSpeechResults = onSpeechResults;
      Voice.onSpeechError = onSpeechError;
    }

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [isPermissionGranted, isVendorLoaded]);

  const startVoiceCommand = async () => {
    if (!isPermissionGranted) {
      Alert.alert("Permission Required", "Please enable microphone access in settings.");
      return;
    }

    if (!isVendorLoaded || !vendor) {
      console.log('Vendor not loaded yet or still loading.');
      Alert.alert('Error', 'Vendor data is still loading. Please try again in a moment.');
      return;
    }

    try {
      setVoiceText('');
      setIsMicActive(true); // Set mic active when pressed
      await Voice.start('en-US');
    } catch (e) {
      console.error('Voice command failed to start:', e);
      Alert.alert('Error', 'Failed to start voice command. Please try again.');
      setIsMicActive(false); // Reset mic state on error
    }
  };

  const onSpeechResults = (e) => {
    const command = e.value[0];
    console.log("Recognized command: ", command); // Debugging log
    setVoiceText(command);
    setIsMicActive(false); // Reset mic state after recognition
    handleVoiceCommand(command);
  };

  const onSpeechError = async (e) => {
    console.error('Voice recognition error:', e);
    Alert.alert('Error', 'Voice recognition failed. Please try again.');
    await Voice.destroy(); // Reset the voice recognition engine
    setIsMicActive(false); // Reset button state after error
  };

  // Handle voice commands by interpreting the text
  const handleVoiceCommand = async (command) => {
    // Ensure the vendor is loaded before processing the command
    if (!vendor) {
      console.log('Vendor not loaded yet');
      Alert.alert('Error', 'Vendor data not loaded yet. Please wait until the vendor is fully loaded.');
      return;
    }

    const lowerCommand = command.toLowerCase().trim();

    // Process recognized commands
    if (lowerCommand.includes('delete')) {
      console.log('Triggering delete vendor function');
      handleDelete();
    } else if (lowerCommand.includes('edit')) {
      console.log('Navigating to edit vendor');
      navigation.navigate('VendorManagerEditVendor', { vendorId: vendor._id }); // Pass vendor._id
    } else if (lowerCommand.includes('generate report')) {
      console.log('Triggering generate report function');
      handleGenerateReport();
    } else {
      Alert.alert('Command not recognized', `You said: ${command}`);
    }
  };

  // Handle vendor deletion
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://${IP_ADDRESS}:5000/vendors/${vendorId}`);
      if (response.status === 200) {
        Alert.alert('Vendor Deleted', 'The vendor has been deleted successfully.');
        navigation.goBack(); // Navigate back to the previous screen
      } else {
        Alert.alert('Error', 'Failed to delete vendor.');
      }
    } catch (error) {
      console.error('Error deleting vendor:', error);
      Alert.alert('Error', 'Failed to delete vendor.');
    }
  };

  // Generate a PDF report of the vendor's details
  const handleGenerateReport = async () => {
    if (!vendor) return; // Ensure the vendor data exists

    // Define the HTML content for the PDF
    const htmlContent = `
      <h1>Vendor Report</h1>
      <p><strong>Name:</strong> ${vendor.name}</p>
      <p><strong>Email:</strong> ${vendor.email}</p>
      <p><strong>Contact Number:</strong> ${vendor.phone}</p>
      <p><strong>Address:</strong> ${vendor.address}</p>
      <p><strong>Status:</strong> Active</p>
    `;

    try {
      // Create the PDF from HTML content
      const options = {
        html: htmlContent,
        fileName: `${vendor.name}_report`,
        directory: 'Download', // Save to the public 'Download' directory
      };

      const file = await RNHTMLtoPDF.convert(options);

      // Share the generated PDF file
      const shareOptions = {
        title: 'Share PDF Report',
        url: `file://${file.filePath}`, // Use 'file://' to access local files
        type: 'application/pdf', // Specify the file type as PDF
        showAppsToView: true, // This triggers the "Open with" dialog
      };

      await Share.open(shareOptions);
    } catch (error) {
      Alert.alert('Error', 'Failed to generate or share PDF');
      console.error(error);
    }
  };

  if (!isVendorLoaded) {
    return <Text>Loading vendor details...</Text>; // Enhanced loading state
  }

  return (
    <View style={styles.vendorDetailsPageVendorM}>
      <View style={styles.maintext}>
        <Text style={styles.lastMinutePantryContainer}>
          <Text style={styles.lastMinute}>Last Minute</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.pantry}>Pantry</Text>
        </Text>
      </View>
      <View style={styles.myProducts}>
        <Pressable onPress={() => navigation.navigate('VendorManagerScreenVendor')}>
          <Image
            style={styles.reportIconLayout1}
            resizeMode="cover"
            source={require('../../../assets/images/vendor/backarrow.png')}
          />
        </Pressable>
        <Text style={styles.vendorDetailsPage}>Vendor Details {"\n"}Page</Text>
        <Image
          style={styles.reportIconLayout2}
          resizeMode="cover"
          source={require('../../../assets/images/vendor/Vnav1.png')}
        />
      </View>

      <View style={styles.frameParent}>
        <View style={styles.keellsParent}>
          <Text style={styles.keells}>{vendor.name}</Text>
          <Text style={styles.emailKeelsgmailcom}>Email: {vendor.email}</Text>
          <Text style={styles.emailKeelsgmailcom}>Contact Number: {vendor.phone}</Text>
          <Text style={styles.emailKeelsgmailcom}>Address: {vendor.address}</Text>
        </View>

        <View style={styles.frameGroup}>
          {/* <Pressable
            style={styles.frameShadowBox}
            onPress={() => {
              if (vendor && vendor._id) { // Ensure vendor and vendor._id exist
                navigation.navigate('VendorManagerEditVendor', { vendorId: vendor._id });
              } else {
                Alert.alert('Error', 'Vendor ID not found.');
              }
            }}
          >
            <View style={styles.editWrapper}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require('../../../assets/images/vendor/Admin/edit.png')}
              />
            </View>
            <Text style={styles.editVendorText}>Edit Vendor</Text>
          </Pressable>

          <Pressable style={styles.frameShadowBox} onPress={handleDelete}>
            <View style={styles.editWrapper}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require('../../../assets/images/vendor/Admin/delete.png')}
              />
            </View>
            <Text style={styles.editVendorText}>Delete Vendor</Text>
          </Pressable>

          <Pressable style={styles.frameShadowBox} onPress={handleGenerateReport}>
            <Image
              style={styles.reportIcon}
              resizeMode="cover"
              source={require('../../../assets/images/vendor/Admin/report.png')}
            />
            <Text style={styles.editVendorText}>Generate Report</Text>
          </Pressable> */}
        </View>
      </View>

      {/* Voice Command Button with round red layout */}
      <Pressable
        onPressIn={startVoiceCommand}
        onPressOut={() => setIsMicActive(false)}
        style={[
          styles.micButton, 
          isMicActive ? styles.micButtonActive : styles.micButtonInactive
        ]}
      >
        <Image
          style={styles.micIcon}
          source={require('../../../assets/images/Main/microphone.png')} // Replace with your mic image path
          resizeMode="cover"
        />
      </Pressable>
      
      {voiceText ? <Text style={styles.voiceText}>You said: {voiceText}</Text> : null}
    </View>
  );
};

export default VendorDetailsPageVendorM;
