import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        width: "100%",
        backgroundColor: "#ff0000",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        fontFamily: "Inter-Regular",
        textAlign: "center",
    },
    lastMinute: {
        color: "#ff914d",
    },
    pantry: {
        color: "#2c662d",
    },
    dashboardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    dashboardTitle: {
        fontSize: 22,
        fontFamily: "Roboto-Regular",
        color: "#000",
        textAlign: "center",
        left: 40,
    },
    arrowBackIcon: {
        width: 24,
        height: 24,
    },
    menuIcon: {
        width: 24,
        height: 24,
    },
    cardContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        padding: 15,
    },
    cardMobile: {
        width: "90%",
        alignSelf: "center",
    },
    cardDesktop: {
        width: "50%",
        alignSelf: "center",
    },
    cardContent: {
        marginBottom: 20,
    },
    cardText: {
        fontFamily: "Inter-SemiBold",
        fontSize: 12,
        lineHeight: 22,
        color: "#000",
        marginBottom: 5,
    },
    actionButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconButton: {
        backgroundColor: "#ff0000",
        padding: 10,
        borderRadius: 10,
    },
    icon: {
        width: 25,
        height: 25,
    },
    plusButton: {
        backgroundColor: "#ff0000",
        borderRadius: 100,
        padding: 15,
        alignSelf: "center",
        marginTop: 30,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        elevation: 4,
    },
    plusIcon: {
        width: 48,
        height: 48,
    },
    searchBar: {
        marginVertical: 10,
        paddingHorizontal: 10,
        height: 40,
        width: 300,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        left: 55,
        color: '#000000',
      },
});

export default styles;
