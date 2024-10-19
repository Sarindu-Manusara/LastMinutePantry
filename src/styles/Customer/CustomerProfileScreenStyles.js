import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const baseWidth = 375;
const scale = width / baseWidth;

const normalize = (size) => Math.round(scale * size);

const styles = StyleSheet.create({
  // Flexbox and Layout for Main Container
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between", // Space between icon and text
    marginBottom: 10, // Add space between buttons
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
  // Profile Header
  sarinduSamarasekara: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 1,
    color: "#000",
    marginTop: 10,
  },
  customerPhone: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Inter-Regular",
    textAlign: "center",
    lineHeight: 16,
    letterSpacing: 1,
    color: "#000",
    marginTop: 5,
  },
  blueMember: {
    fontSize: 12,
    color: "#1a237e",
    fontFamily: "Inter-Regular",
    textAlign: "center",
    marginTop: 5,
  },
  frameParent: {
    top: 0,
    left: 0,
    backgroundColor: "#98fb98", // Light green background as in the image
    height: height * 0.22, // Responsive height for the profile header section
    justifyContent: "center",
    alignItems: "center", // Centering all elements
    width: width, // Full width
    position: "absolute",
    paddingVertical: 20,
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 30, // Circular profile image
    borderWidth: 2,
    borderColor: "#000",
  },
  // ScrollView content
  frameView: {
    top: height * 0.23, // Adjust based on screen height
    padding: 20,
    gap: 10,
    left: "50%",
    marginLeft: -width * 0.5,
    alignItems: "center",
    width: width,
    position: "absolute",
  },
  userProfile: {
    backgroundColor: "#f8f8f8",
    flex: 1,
    height: height, // Full height
    width: width, // Full width
  },
  // Menu buttons
  viewProfile: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    fontFamily: "Inter-Regular",
    textAlign: "left",
  },
  // Bottom Navigation Bar
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: normalize(10),
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    width: normalize(30),
    height: normalize(30),
  },
  navText: {
    fontSize: normalize(12),
    color: "#000",
    marginTop: normalize(5),
  },
  logoutButton: {
    backgroundColor: "#ff4d4d",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 18,
  },
  phone: {
    color: '#fff'
  }
});

export default styles;
