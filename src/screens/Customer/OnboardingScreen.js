import React from "react";
import { Text, View, Pressable, Image } from "react-native";
import styles from "../../styles/Customer/onboardingScreenStyles";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
const navigation = useNavigation();
  return (
    <View style={styles.onboardingScreen}>
      <View style={styles.mainText}>
        <Text style={styles.welcomeToLastContainer}>
          <Text style={styles.welcomeTo}>{`Welcome to\n`}</Text>
          <Text style={styles.lastMinute}>Last Minute</Text>
          <Text style={styles.welcomeTo}> Pantry</Text>
        </Text>
      </View>
      <View style={[styles.text1, styles.textLayout]}>
        <View style={[styles.text1Child, styles.childPosition]} />
        <Text style={[styles.reducingFoodWaste, styles.getTypo]}>
          {`Reducing food waste,\none purchase at a time`}
        </Text>
      </View>
      <View style={[styles.text11, styles.textLayout]}>
        <View style={[styles.text1Child, styles.childPosition]} />
        <Text style={[styles.saveMoneySave, styles.getTypo]}>
          {`Save money,\nSave environment`}
        </Text>
      </View>
      <Image
        style={styles.illustrationIcon}
        resizeMode="contain"
        source={require("../../assets/images/customer/Illustration.png")} // Adjust path as needed
      />
      <Pressable style={[styles.button, styles.buttonLayout]} onPress={() => {navigation.navigate('OnboardingScreen2')}}>
        <Text style={[styles.getStarted, styles.getTypo]}>Get Started</Text>
      </Pressable>
    </View>
  );
};

export default OnboardingScreen;
