import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const baseWidth = 375;
const scale = width / baseWidth;

const normalize = (size) => Math.round(scale * size);

const styles = StyleSheet.create({
  customerHome: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    backgroundColor: "#4fbb56",
    paddingVertical: normalize(20),
    paddingHorizontal: normalize(15),
    justifyContent: "center",
    alignItems: "center",
  },
  mainTextWrapper: {
    alignItems: "center",
  },
  mainText: {
    fontSize: normalize(24),
    color: "#000",
    fontFamily: "Inter-Bold",
  },
  lastMinute: {
    color: "#ff914d",
  },
  pantry: {
    color: "#2c662d",
  },
  welcomeText: {
    fontSize: normalize(16),
    color: "#fff",
    marginTop: normalize(10),
  },
  contentContainer: {
    paddingHorizontal: normalize(15),
    paddingBottom: normalize(100),
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: normalize(20),
  },
  categoryBox: {
    backgroundColor: "#fff",
    width: "48%",
    padding: normalize(15),
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryIcon: {
    width: normalize(60),
    height: normalize(60),
    marginBottom: normalize(10),
  },
  categoryText: {
    fontSize: normalize(18),
    fontWeight: "bold",
    color: "#000",
  },
  sectionContainer: {
    marginBottom: normalize(20),
  },
  sectionTitle: {
    fontSize: normalize(22),
    fontWeight: "bold",
    marginBottom: normalize(15),
  },
  offersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  offerImage: {
    width: normalize(100),
    height: normalize(100),
    borderRadius: 10,
  },
  reviewSection: {
    backgroundColor: "#ebe7c7",
    padding: normalize(20),
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  reviewTitle: {
    fontSize: normalize(20),
    fontWeight: "bold",
    marginBottom: normalize(10),
  },
  reviewerName: {
    fontSize: normalize(16),
    fontWeight: "bold",
    color: "#000",
    marginBottom: normalize(5),
  },
  reviewText: {
    fontSize: normalize(14),
    color: "#000",
  },
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: normalize(10),
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
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
  
});

export default styles;
