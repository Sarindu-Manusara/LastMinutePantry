import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  frameFlexBox: {
    gap: 5,
    alignItems: "center",
  },
  navigationBarFlexBox: {
    gap: 33,
    flexDirection: "row",
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "31.37%",
    top: "0%",
    height: "68.63%",
    position: "absolute",
    overflow: "hidden",
  },
  profileTypo: {
    textAlign: "left",
    fontFamily: "Inter-Regular",
  },
  icons8ParentShadowBox: {
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    paddingVertical: 15,
    backgroundColor: "#fff",
  },
  parentCardFlexBox: {
    gap: 22,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  parentShadowBox: {
    gap: 25,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  icons8AddImage501: {
    width: 48,
    height: 48,
  },
  icons8AddImage501Wrapper: {
    borderRadius: 100,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  sarinduSamarasekara: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    textAlign: "center",
    lineHeight: 16,
    letterSpacing: 1,
    color: "#000",
    alignSelf: "stretch",
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  frameGroup: {
    gap: 9,
    alignSelf: "stretch",
    alignItems: "center",
  },
  blueMember: {
    fontSize: 11,
    color: "#1a237e",
    fontFamily: "Inter-Regular",
    textAlign: "center",
    lineHeight: 16,
    letterSpacing: 1,
    alignSelf: "stretch",
  },
  frameParent: {
    top: 0,
    left: 0,
    backgroundColor: "#98fb98",
    height: height * 0.22, // Responsive height
    justifyContent: "flex-end",
    paddingBottom: 20,
    width: width, // Responsive width
    position: "absolute",
    gap: 5,
  },
  groupParent: {
    width: 40,
    height: 51,
  },
  home: {
    width: "85%",
    left: "7.5%",
    fontSize: 12,
    top: "80.39%",
    height: "19.61%",
    textAlign: "left",
    position: "absolute",
    color: "#000",
  },
  profileIcon: {
    width: 27,
    height: 27,
  },
  viewProfile: {
    fontSize: 24,
    color: "#000",
  },
  frameView: {
    top: height * 0.23, // Adjust based on screen height
    padding: 20,
    gap: 42,
    left: "50%",
    marginLeft: -width * 0.5,
    alignItems: "center",
    width: width,
    position: "absolute",
  },
  userProfile: {
    backgroundColor: "#f8f8f8",
    flex: 1,
    height: height, // Responsive height
    overflow: "hidden",
    width: width, // Responsive width
  },
});

export default styles;