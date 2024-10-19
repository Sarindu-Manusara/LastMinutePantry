import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import styles from "../../styles/Customer/onboardingScreen3Styles";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen3 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.onboardingScreen}>
      {/* Real-time Notifications Section */}
      <View style={styles.realTimeSection}>
        <Text style={styles.realTimeText}>Real-time Notifications</Text>
        <Image
          style={styles.bellIcon}
          resizeMode="contain"
          source={require("../../assets/images/customer/notification.png")} // Adjust the path as needed
        />
      </View>

      {/* Easy Payment Options Section */}
      <View style={styles.paymentSection}>
        <Text style={styles.paymentText}>Easy Payment Options</Text>
        <Image
          style={styles.cardIcon}
          resizeMode="contain"
          source={require("../../assets/images/customer/visa.png")} // Adjust the path as needed
        />
      </View>

      {/* Track Your Orders Section */}
      <View style={styles.trackSection}>
        <Text style={styles.trackText}>Track Your Orders</Text>
        <Image
          style={styles.mapIcon}
          resizeMode="contain"
          source={require("../../assets/images/customer/location.png")} // Adjust the path as needed
        />
      </View>

      {/* Personalized Offers Section */}
      <View style={styles.offersSection}>
        <Text style={styles.offersText}>
          Personalized offers{"\n"}on your preferences
        </Text>
      </View>

      {/* Illustration with Hands */}
      <View style={styles.handsSection}>
        <Image
          style={styles.handsIcon}
          resizeMode="contain"
          source={require("../../assets/images/customer/hands.png")} // Adjust the path as needed
        />
      </View>

      {/* Start Using Last Minute Pantry Button */}
      <Pressable style={styles.startButton} onPress={() => {navigation.navigate('UserLoginCustomer')}}>
        <Text style={styles.startButtonText}>Start Using Last Minute Pantry</Text>
      </Pressable>
    </View>
  );
};

export default OnboardingScreen3;
