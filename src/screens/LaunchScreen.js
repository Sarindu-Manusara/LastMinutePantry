import React, { useEffect } from "react";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Make sure you have this installed and properly set up
import styles from "../styles/launchScreenStyles"; // Adjust path as necessary

const LaunchScreen = () => {
  const navigation = useNavigation();

  // Navigate to OnboardChoosingScreen after 1000ms delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("OnboardingChoosingScreen"); // Replace with your desired screen name
    }, 5000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.launchScreen}>
      <Image
        style={styles.logoIcon}
        resizeMode="contain" // Changed to "contain" for better responsiveness
        source={require("../assets/images/Main/Logo.png")} // Adjust path as necessary
      />
    </View>
  );
};

export default LaunchScreen;
