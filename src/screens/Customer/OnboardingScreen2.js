import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import styles from "../../styles/Customer/onboardingScreen2Styles";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboardingScreen}>
      {/* Main Title */}
      <View style={styles.mainText}>
        <Text style={styles.browseReserveAnd}>{`Browse, Reserve\nand Save`}</Text>
      </View>

      {/* Explore Nearby Vendors Section */}
      <View style={styles.exploreSection}>
        <Image
          style={styles.searchIcon}
          resizeMode="contain"
          source={require("../../assets/images/customer/searchicon.png")} // Adjust the path as needed
        />
        <Text style={styles.exploreNearbyVendors}>{`Explore Nearby\nVendors`}</Text>
      </View>

      {/* Reserve or Have them Delivered Section */}
      <View style={styles.reserveSection}>
        <Image
          style={styles.iconCart}
          resizeMode="contain"
          source={require("../../assets/images/customer/cart.png")} // Adjust the path as needed
        />
        <Text style={styles.reserveOrHave}>{`Reserve or Have\nthem Delivered`}</Text>
      </View>

      {/* More than 50% Discounts Section */}
      <View style={styles.discountSection}>
        <Image
          style={styles.iconDiscount}
          resizeMode="contain"
          source={require("../../assets/images/customer/discount.png")} // Adjust the path as needed
        />
        <Text style={styles.moreThan50}>{`More than\n50% discounts`}</Text>
      </View>

      {/* Learn More Button */}
      <Pressable style={styles.learnMoreButton} onPress={() => navigation.navigate("OnboardingScreen3")}>
        <Text style={styles.learnMoreText}>Learn more</Text>
      </Pressable>
    </View>
  );
};

export default OnboardingScreen2;
