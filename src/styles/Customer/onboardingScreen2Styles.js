import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  onboardingScreen: {
    backgroundColor: "#e6fbda",
    flex: 1,
    alignItems: "center",
    paddingTop: height * 0.05,
  },
  mainText: {
    marginBottom: height * 0.02,
    alignItems: "center",
  },
  browseReserveAnd: {
    fontSize: 30,
    color: "#dd8432",
    textAlign: "center",
    fontFamily: "Inter-Regular",
  },
  exploreSection: {
    width: width * 0.7,
    height: height * 0.15,
    backgroundColor: "#6ccd6f",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: height * 0.03,
    top: 40
  },
  searchIcon: {
    width: width * 0.15,
    height: height * 0.1,
    marginRight: 10,
  },
  exploreNearbyVendors: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Inter-Regular",
  },
  reserveSection: {
    width: width * 0.7,
    height: height * 0.15,
    backgroundColor: "#6ccd6f",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: height * 0.03,
    top: 50
  },
  iconCart: {
    width: width * 0.15,
    height: height * 0.1,
    marginRight: 10,
  },
  reserveOrHave: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Inter-Regular",
  },
  discountSection: {
    width: width * 0.7,
    height: height * 0.15,
    backgroundColor: "#6ccd6f",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: height * 0.03,
    top: 60
  },
  iconDiscount: {
    width: width * 0.15,
    height: height * 0.1,
    marginRight: 10,
  },
  moreThan50: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Inter-Regular",
  },
  learnMoreButton: {
    marginTop: height * 0.03,
    width: width * 0.5,
    height: height * 0.07,
    backgroundColor: "#d9884e",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    top: 80
  },
  learnMoreText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Inter-Regular",
  },
});

export default styles;
