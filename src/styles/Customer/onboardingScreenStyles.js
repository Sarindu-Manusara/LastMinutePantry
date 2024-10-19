import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  onboardingScreen: {
    backgroundColor: "#e6fbda",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: width * 0.05,
  },
  mainText: {
    marginTop: height * 0.05,
    alignItems: "center",
  },
  welcomeToLastContainer: {
    fontSize: 36,
    textAlign: "center",
    fontFamily: "Inter-Regular",
    lineHeight: 40,
  },
  welcomeTo: {
    color: "#109415",
  },
  lastMinute: {
    color: "#d9884e",
  },
  textLayout: {
    marginVertical: height * 0.02,
    width: width * 0.8,
    height: height * 0.08,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6ccd6f",
    borderRadius: 20,
  },
  getTypo: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Inter-Regular",
    fontSize: 16,
  },
  reducingFoodWaste: {
    paddingHorizontal: 10,
    fontSize: 16,
    textAlign: "center",
  },
  saveMoneySave: {
    paddingHorizontal: 10,
    fontSize: 16,
    textAlign: "center",
  },
  illustrationIcon: {
    marginTop: height * 0.05,
    width: width * 0.6,
    height: width * 0.6,
  },
  buttonLayout: {
    marginTop: height * 0.05,
    width: width * 0.5,
    height: height * 0.06,
    borderRadius: 20,
    backgroundColor: "#d9884e",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
    bottom: -30
  },
  getStarted: {
    fontSize: 18,
    color: "#ffffff",
    fontFamily: "Inter-Regular",
  },
});

export default styles;
