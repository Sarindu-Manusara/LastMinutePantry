import { StyleSheet, Dimensions } from "react-native";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    userManagerDashboard: {
        flex: 1,
        backgroundColor: "#fff",
    },
    maintextParent: {
        width: "100%",
        paddingVertical: height * 0.02,
        backgroundColor: "#ff0000",
        alignItems: "center",
    },
    lastMinutePantryContainer: {
        fontSize: width * 0.06,
        fontFamily: "Inter-Regular",
        textAlign: "center",
    },
    lastMinute: {
        color: "#ff914d",
        fontWeight: "bold",
    },
    pantry: {
        color: "#fff",
        fontWeight: "bold",
    },
    dashboardTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.01,
    },
    icon: {
        width: width * 0.08,
        height: width * 0.08,
        resizeMode: "contain",
    },
    dashboardTitle: {
        fontSize: width * 0.05,
        color: "#000",
        fontWeight: "bold",
    },
    userListContainer: {
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.02,
    },
    userItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: width * 0.03,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: height * 0.015,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    userName: {
        fontSize: width * 0.045,
        color: "#000",
    },
    iconGroup: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconButton: {
        padding: width * 0.02,
        marginHorizontal: width * 0.01,
        backgroundColor: "#ff0000",
        borderRadius: width * 0.04,
        justifyContent: "center",
        alignItems: "center",
    },
    iconImage: {
        width: width * 0.05,
        height: width * 0.05,
        resizeMode: "contain",
        tintColor: "#fff",
    },
    floatingButton: {
        position: "absolute",
        right: width * 0.05,
        bottom: height * 0.05,
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: width * 0.075,
        backgroundColor: "#ff0000",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
    },
    plusIcon: {
        width: width * 0.08,
        height: width * 0.08,
        resizeMode: "contain",
        tintColor: "#fff",
    },
    picker: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
    },
    searchBar: {
        marginVertical: 10,
        paddingHorizontal: 10,
        height: 40,
        width: 300,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        left: 40,
        color: '#000000',
      },
});

export default styles;
