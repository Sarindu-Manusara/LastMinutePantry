import { StyleSheet, Dimensions } from "react-native";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  	maintextFlexBox: {
    	justifyContent: "center",
    	flexDirection: "row",
    	width: width // Use dynamic width for responsiveness
  	},
  	inputLabelTypo: {
    	textAlign: "left",
    	fontFamily: "Inter-Regular"
  	},
  	addTypo: {
    	textAlign: "center",
    	fontFamily: "Roboto-Regular",
    	lineHeight: 28,
    	fontSize: 22
  	},
  	instanceChildBorder: {
    	borderWidth: 1,
    	borderColor: "#737171",
    	borderStyle: "solid",
    	borderRadius: 10,
    	alignSelf: "stretch",
    	padding: 10,
    	flexDirection: "row"
  	},
  	lastMinute: {
    	color: "#ff914d"
  	},
  	text: {
    	color: "#000"
  	},
  	pantry: {
    	color: "#2c662d"
  	},
  	lastMinutePantryContainer: {
    	fontSize: 24
  	},
  	maintext: {
    	height: 102,
    	paddingHorizontal: width * 0.1, // Responsive padding
    	paddingBottom: 23,
    	alignItems: "center",
    	justifyContent: "center",
    	flexDirection: "row",
    	width: width, // Responsive width
    	backgroundColor: "#77ea7e"
  	},
  	myProductsChild: {
    	width: 35,
    	height: 35
  	},
  	addDelivery: {
    	color: "#000"
  	},
  	myProducts: {
    	height: 75,
    	gap: width * 0.2, // Responsive gap
    	padding: 10,
    	alignItems: "center",
    	justifyContent: "center",
    	flexDirection: "row",
    	width: width, // Responsive width
    	backgroundColor: "#fff"
  	},
    
  	maintextParent: {
    	top: 0,
    	left: 0,
    	position: "absolute"
  	},
  	inputLabel: {
    	fontSize: 14,
    	letterSpacing: 0,
    	lineHeight: 22,
    	color: "#000"
  	},
  	inputLabelParent: {
    	gap: 3,
    	alignSelf: "stretch"
  	},
  	frameTextinput: {
    	backgroundColor: "#fff"
  	},
  	instanceParent: {
    	top: height * 0.2, // Responsive top positioning
    	left: 21,
    	width: width * 0.9, // Responsive width
    	gap: 40,
    	position: "absolute"
  	},
  	addDeliveryDashboardInner: {
    	top: height * 0.8, // Responsive top positioning
    	left: width * 0.25,
    	width: width * 0.5, // Responsive width
    	padding: 10,
    	position: "absolute",
        backgroundColor:'#77ea7e',
  	},
  	addDeliveryDashboard: {
    	flex: 1,
    	width: "100%",
    	height: height, // Responsive height
    	overflow: "hidden",
    	backgroundColor: "#fff"
  	}
});

export default styles;
