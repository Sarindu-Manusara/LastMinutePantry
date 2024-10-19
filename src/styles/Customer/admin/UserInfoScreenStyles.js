import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

// Define breakpoints for responsiveness
const isTablet = width > 768;

const styles = StyleSheet.create({
    myProductsFlexBox: {
        padding: isTablet ? 20 : 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    johnDoeTypo: {
        fontFamily: "Roboto-Regular",
        lineHeight: isTablet ? 32 : 28,
        fontSize: isTablet ? 26 : 22,
        color: "#000",
    },
    editUserTypo: {
        lineHeight: isTablet ? 26 : 22,
        fontSize: isTablet ? 18 : 16,
        color: "#000",
        textAlign: "left",
        fontFamily: "Inter-Regular",
    },
    childLayout: {
        height: isTablet ? 45 : 35,
        width: isTablet ? 45 : 35,
    },
    iconLayout: {
        height: isTablet ? 30 : 25,
        width: isTablet ? 30 : 25,
    },
    lastMinute: {
        color: "#ff914d",
    },
    pantry: {
        color: "#2c662d",
    },
    lastMinutePantryContainer: {
        fontSize: isTablet ? 28 : 24,
        textAlign: "left",
        fontFamily: "Inter-Regular",
    },
    maintext: {
        width: "100%",
        paddingVertical: height * 0.02,
        backgroundColor: "#ff0000",
        alignItems: "center",
    },
    dashboardTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.01,
    },
    dashboardTitle: {
        fontSize: width * 0.05,
        color: "#000",
        fontWeight: "bold",
    },
    userDetailsPage: {
        textAlign: "center",
    },
    myProducts: {
        height: isTablet ? 85 : 75,
        gap: isTablet ? 90 : 80,
        width: isTablet ? 600 : 430,
        backgroundColor: "#fff",
    },
    maintextParent: {
        gap: isTablet ? 8 : 5,
    },
    johnDoe: {
        alignSelf: "stretch",
        textAlign: "left",
    },
    johngmailcom: {
        textAlign: "left",
    },
    roleCustomer: {
        alignSelf: "stretch",
    },
    johnDoeParent: {
        width: isTablet ? 220 : 198,
        gap: isTablet ? 20 : 15,
    },
    editIcon: {
        overflow: "hidden",
    },
    editWrapper: {
        borderRadius: 10,
        padding: isTablet ? 12 : 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#ff0000",
        width: isTablet ? 45 : 35,
    },
    frameShadowBox: {
        padding: isTablet ? 7 : 5,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        alignSelf: "stretch",
        gap: isTablet ? 20 : 15,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#fff",
    },
    frameChild: {
        borderRadius: 10,
    },
    frameGroup: {
        gap: isTablet ? 25 : 18,
        alignSelf: "stretch",
    },
    frameParent: {
        height: isTablet ? 850 : 750,
        padding: isTablet ? 30 : 25,
        gap: isTablet ? 50 : 40,
        borderRadius: 10,
        width: isTablet ? 600 : 430,
    },
    userManagerUserDetailsPa: {
        flex: 1,
        width: "100%",
        height: "100%",
        gap: isTablet ? 10 : 5,
        overflow: "hidden",
        backgroundColor: "#fff",
    },
});

export default styles;

