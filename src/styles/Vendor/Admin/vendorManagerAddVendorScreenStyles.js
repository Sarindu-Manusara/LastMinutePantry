import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  vendorManagerAddVendorSc: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  maintextParent: {
    top: 0,
    left: 0,
    width: "100%",
    position: "absolute",
  },
  maintext: {
    height: height * 0.1,
    paddingHorizontal: width * 0.2,
    paddingBottom: height * 0.02,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ff0000",
    alignItems: "center",
  },
  maintextFlexBox: {
    justifyContent: "center",
    backgroundColor: "#ff0000",
    alignItems: "center",
  },
  lastMinutePantryContainer: {
    fontSize: width * 0.06,
    textAlign: "left",
    fontFamily: "Inter-Regular",
    color: "#fff",
  },
  lastMinute: {
    color: "#ff914d",
  },
  text: {
    color: "#000",
  },
  pantry: {
    color: "#2c662d",
  },
  myProducts: {
    height: height * 0.08,
    paddingHorizontal: width * 0.05,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
  },
  myProductsChild: {
    width: 30,
    height: 30,
  },
  addVendor: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  frameParent: {
    top: height * 0.18,
    width: "90%",
    alignSelf: "center",
    height: "75%",
    padding: 15,
    gap: 20,
    alignItems: "center",
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "#f8f8f8",
  },
  instanceParent: {
    gap: 15,
    width: "100%",
  },
  inputLabelParent: {
    gap: 5,
    width: "100%",
  },
  inputLabel: {
    letterSpacing: 0,
    lineHeight: 22,
    color: "#000",
    textAlign: "left",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  instanceChild: {
    borderStyle: "solid",
    borderColor: "#737171",
    borderWidth: 1,
    fontSize: 14,
    fontFamily: "Inter-Regular",
    borderRadius: 8,
    padding: 10,
    width: "100%",
    backgroundColor: "#fff",
    color: '#000000'
  },
  instanceChildLayout: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  addVendorWrapper: {
    width: "60%",
    paddingVertical: 12,
    justifyContent: "center",
    backgroundColor: "#ff0000",
    alignItems: "center",
    borderRadius: 10,
  },
  addVendor1: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    lineHeight: 28,
    fontSize: 18,
    fontWeight: "bold",
  },
});
