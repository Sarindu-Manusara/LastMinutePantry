import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import styles from "../styles/onboardingChoosingScreenStyles";


const OnboardingChoosingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboardingChoosingScreen}>
      <Image
        style={styles.logoIcon}
        resizeMode="contain"
        source={require("../assets/images/Main/Logo-small.png")} // Adjust path as needed
      />
      <Pressable
        style={[styles.customerWrapper, styles.onboardingLayout]}
        onPress={() => {
          navigation.navigate('OnboardingScreen')
        }}
      >
        <View style={styles.customer}>
          <Text style={[styles.customer1, styles.logInAsTypo]}>Customer</Text>
          <Text style={[styles.buyNearExpiredGoods, styles.logInAsTypo]}>
            Buy Near-Expired Goods
          </Text>
          {/* <Image
            style={[styles.pngwingcom41, styles.pngwingcomPosition]}
            resizeMode="contain"
            source={require("../assets/images/Main/customer.png")} // Adjust path as needed
          /> */}
        </View>
      </Pressable>
      <Pressable
        style={[styles.onboardingChoosingScreenInner, styles.onboardingLayout]}
        onPress={() => {
          navigation.navigate('OnboardScreenVendor')
        }}
      >
        <View style={styles.vendorParent}>
          <Text style={[styles.vendor, styles.vendorTypo]}>Vendor</Text>
          <Text style={[styles.sellNearExpiredGoods, styles.vendorTypo]}>
            Sell Near-Expired Goods
          </Text>
          {/* <Image
            style={[styles.pngwingcom51, styles.pngwingcomPosition]}
            resizeMode="contain"
            source={require("../assets/images/Main/vendor.png")} // Adjust path as needed
          /> */}
        </View>
      </Pressable>
      <Pressable
        style={[styles.onboardingChoosingScreenChild, styles.onboardingLayout]}
        onPress={() => {
          navigation.navigate('')
        }}
      >
        <View style={styles.driverParent}>
          <Text style={[styles.driver, styles.driverTypo]}>Driver</Text>
          <Text style={[styles.deliverGoodsAnd, styles.driverTypo]}>
            Deliver Goods and Earn
          </Text>
          {/* <Image
            style={[styles.pngwingcom61, styles.pngwingcomPosition]}
            resizeMode="contain"
            source={require("../assets/images/Main/driver.png")} // Adjust path as needed
          /> */}
        </View>
      </Pressable>
      <Pressable
        style={styles.logInAsButton}
        onPress={() => {
          navigation.navigate('AdminLoginForm')
        }}
      >
        <Text style={[styles.logInAs, styles.logInAsTypo]}>Log in as ADMIN</Text>
      </Pressable>
      <Pressable
        style={styles.logInAsButton}
        onPress={() => {
          navigation.navigate('CustomerAddReview')
        }}
      >
        <Text style={[styles.logInAs, styles.logInAsTypo]}>Give us a Feedback!</Text>
      </Pressable>
    </View>
  );
};

export default OnboardingChoosingScreen;
