import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    customerDeliveryPayment: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: screenWidth * 0.05, // Responsive padding
        paddingVertical: screenHeight * 0.02,
    },
    logo: {
        alignSelf: "center",
        width: screenWidth * 0.4, // Responsive width
        height: screenHeight * 0.2, // Responsive height
    },
    mainText: {
        backgroundColor: "#98fb98",
        justifyContent: "center",
        alignItems: "center",
        padding: screenHeight * 0.03,

    },
    lastMinutePantryContainer: {
        fontSize: screenWidth * 0.05,
        textAlign: "left",
        
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
    cancelDelivery: {
        fontSize: screenWidth * 0.04,
        textAlign: "center",
        marginVertical: screenHeight * 0.02,
    },
    navigationBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: screenHeight * 0.02,
        backgroundColor: "#fff",
    },
    dashboardParent: {
        alignItems: "center",
    },
    productsParent: {
        alignItems: "center",
    },
    ordersParent: {
        alignItems: "center",
    },
    notificationsParent: {
        alignItems: "center",
    },
    profileParent: {
        alignItems: "center",
    },
    icon: {
        width: screenWidth * 0.08,
        height: screenHeight * 0.05,
    },
    form: {
        marginVertical: screenHeight * 0.03,
        paddingHorizontal: screenWidth * 0.05, // Responsive padding
        paddingVertical: screenHeight * 0.02,
    },
    inputWrapper: {
        marginBottom: screenHeight * 0.02,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    halfInputWrapper: {
        width: "48%",
    },
    inputLabel: {
        fontSize: screenWidth * 0.04,
    },
    inputField: {
        borderColor: "#737171",
        borderWidth: 1,
        borderRadius: 10,
        padding: screenHeight * 0.02,
    },
    inputText: {
        color: "#737171",
    },
    note: {
        color: "#109415",
        fontSize: screenWidth * 0.04,
        textAlign: "center",
        marginVertical: screenHeight * 0.02,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: screenWidth * 0.05, // Responsive padding
        paddingVertical: screenHeight * 0.02,
    },
    buttonWrapper: {
        backgroundColor: "#228b22",
        borderRadius: 10,
        padding: screenHeight * 0.02,
        alignItems: "center",
        width: "48%",
    },
    button: {
        color: "#fff",
        fontSize: screenWidth * 0.05,
    },
    paymentMethod: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: screenHeight * 0.02,
    },
    creditDebit: {
        fontSize: screenWidth * 0.06,
        textAlign: "center",
        color: "#2d0c57",
    },
});

export default styles;
