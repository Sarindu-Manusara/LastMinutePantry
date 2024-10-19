import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  maintextFlexBox: {
    justifyContent: "center",
    backgroundColor: "#ff0000",
    alignItems: "center",
  },
  submitTypo: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    lineHeight: 28,
    fontSize: 22,
  },
  inputTypo: {
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Inter-Regular",
  },
  wrapperLayout: {
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
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
  lastMinutePantryContainer: {
    fontSize: width * 0.06,
    fontFamily: "Inter-Regular",
    textAlign: "center",
},
  maintext: {
    height: 102,
    paddingHorizontal: 106,
    paddingBottom: 23,
    flexDirection: "row",
    width: width,
    justifyContent: "center",
    backgroundColor: "#ff0000",
  },
  myProductsChild1: {
    width: 35,
    height: 35,
    left: 10
  },
  myProductsChild2: {
    width: 35,
    height: 35,
    right: 20
  },
  editUserDetails: {
    color: "#000",
  },
  myProducts: {
    height: 75,
    gap: 100,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: width,
    backgroundColor: "#fff",
  },
  maintextParent: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  inputLabel: {
    color: "#000",
  },
  enterInput: {
    color: "#737171",
  },
  enterInputWrapper: {
    borderStyle: "solid",
    borderColor: "#737171",
    borderWidth: 1,
    alignSelf: "stretch",
  },
  inputLabelParent: {
    gap: 3,
    alignSelf: "stretch",
  },
  instanceParent: {
    height: 313,
    gap: 15,
    alignSelf: "stretch",
  },
  submit: {
    color: "#fff",
  },
  submitWrapper: {
    width: 219,
    justifyContent: "center",
    backgroundColor: "#ff0000",
    alignItems: "center",
    borderRadius: 10,
  },
  frameParent: {
    top: 177,
    left: 1,
    width: width - 16, // Adjusting for margins/padding to fit various screens
    height: height - 200, // Adjusting to leave space at the top/bottom
    padding: 20,
    gap: 60,
    alignItems: "center",
    position: "absolute",
  },
  userManagerEditUser: {
    flex: 1,
    width: "100%",
    height: height,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
});

export default styles;
