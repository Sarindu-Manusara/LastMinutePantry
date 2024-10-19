import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  launchScreen: {
    backgroundColor: "#77ea7e",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoIcon: {
    width: width * 0.8, // Adjusting width to be responsive
    height: height * 0.4, // Adjusting height to maintain aspect ratio
  },
});

export default styles;
