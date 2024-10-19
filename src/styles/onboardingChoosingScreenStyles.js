import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  onboardingChoosingScreen: {
    backgroundColor: "#81de4c",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoIcon: {
    width: width * 0.5, // Adjusted for responsiveness
    height: height * 0.2,
    marginTop: 40,
  },
  onboardingLayout: {
    justifyContent: "center",
    alignItems: "center",
    height: 147,
    width: width * 0.8,
    borderRadius: 10,
    marginVertical: 10,
  },
  logInAsTypo: {
    textAlign: "center",
    fontFamily: "IstokWeb-Regular",
  },
  pngwingcomPosition: {
    position: "absolute",
    left: -90,
  },
  vendorTypo: {
    color: "#98fb98",
    textAlign: "center",
    fontFamily: "IstokWeb-Regular",
  },
  driverTypo: {
    color: "#4ad5f4",
    textAlign: "center",
    fontFamily: "IstokWeb-Regular",
  },
  customer1: {
    color: "#109415",
    textAlign: "center",
    fontFamily: "IstokWeb-Regular",
    fontSize: 32,
    marginBottom: 10,
  },
  buyNearExpiredGoods: {
    fontSize: 16,
    color: "#109415",
  },
  customerWrapper: {
    backgroundColor: "#98fb98",
  },
  vendor: {
    fontSize: 32,
  },
  sellNearExpiredGoods: {
    fontSize: 16,
  },
  vendorParent: {
    alignItems: "center",
  },
  onboardingChoosingScreenInner: {
    backgroundColor: "#228b22",
  },
  driver: {
    fontSize: 32,
  },
  deliverGoodsAnd: {
    fontSize: 16,
  },
  driverParent: {
    alignItems: "center",
  },
  onboardingChoosingScreenChild: {
    backgroundColor: "#1a237e",
  },
  logInAs: {
    fontSize: 12,
    textDecorationLine: "underline",
    color: "#ff0000",
  },
  logInAsButton: {
    marginTop: 20,
  },
});

export default styles;
