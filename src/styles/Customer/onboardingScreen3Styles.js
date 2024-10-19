import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  onboardingScreen: {
    backgroundColor: "#e6fbda",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  realTimeSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6ccd6f",
    borderRadius: 20,
    padding: 10,
    width: width * 0.8,
    height: height * 0.08,
    marginVertical: height * 0.02,
  },
  realTimeText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "IstokWeb-Regular",
    flex: 1,
    textAlign: "center",
  },
  bellIcon: {
    width: width * 0.1,
    height: height * 0.05,
  },
  paymentSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6ccd6f",
    borderRadius: 20,
    padding: 10,
    width: width * 0.8,
    height: height * 0.08,
    marginVertical: height * 0.02,
  },
  paymentText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "IstokWeb-Regular",
    flex: 1,
    textAlign: "center",
  },
  cardIcon: {
    width: width * 0.2,
    height: height * 0.08,
  },
  trackSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6ccd6f",
    borderRadius: 20,
    padding: 10,
    width: width * 0.8,
    height: height * 0.08,
    marginVertical: height * 0.02,
  },
  trackText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "IstokWeb-Regular",
    flex: 1,
    textAlign: "center",
  },
  mapIcon: {
    width: width * 0.1,
    height: height * 0.05,
  },
  offersSection: {
    backgroundColor: "#a8e5a8",
    borderRadius: 20,
    padding: 10,
    width: width * 0.9,
    height: height * 0.1,
    marginVertical: height * 0.02,
    justifyContent: "center",
    alignItems: "center",
    top: 90
  },
  offersText: {
    color: "#109415",
    fontSize: 18,
    fontFamily: "IstokWeb-Regular",
    textAlign: "center",
  },
  handsSection: {
    marginVertical: height * 0.02,
    justifyContent: "center",
    alignItems: "center",
    top: 60
  },
  handsIcon: {
    width: width * 0.4,
    height: height * 0.2,
  },
  startButton: {
    backgroundColor: "#58fab6",
    borderRadius: 20,
    width: width * 0.8,
    height: height * 0.07,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    marginVertical: height * 0.03,
  },
  startButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "IstokWeb-Regular",
    textAlign: "center",
  },
});

export default styles;
