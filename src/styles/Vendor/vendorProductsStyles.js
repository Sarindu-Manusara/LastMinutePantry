// VendorProductsStyles.js
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  vendorProducts: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  content: {
    flex: 1,
  },
  header: {
    backgroundColor: "#109415",
    paddingVertical: 10,
    alignItems: "center",
    height: height *0.1,
  },
  lastMinutePantryContainer: {
    fontSize: 24,
    fontFamily: "Inter-Regular",
    marginTop: 10,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  myProductsText: {
    fontSize: 20,
    fontFamily: "Roboto-Regular",
    color: "#000",
  },
  iconContainer: {
    width: 35,
    height: 35,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  addProductButton: {
    backgroundColor: "#228b22",
    marginHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  addProductButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Inter-Regular",
  },
  
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
    borderColor: '#228b22',
    borderWidth: 1,
    fontSize: 16,
    marginLeft: 30,
    marginRight: 30,
    color: '#000'
  },
  content:{
    marginBottom: 90,
  },
  
  productCard: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    alignItems: "center",
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontFamily: "Roboto-Bold",
    color: "#000",
    marginBottom: 3,
  },
  productStock: {
    fontSize: 14,
    color: "#10a61a",
    marginBottom: 2,
  },
  productExpiry: {
    fontSize: 14,
    color: "#c90d0d",
    marginBottom: 2,
  },
  productPrice: {
    fontSize: 14,
    color: "#000",
  },
  buttonContainer: {
    justifyContent: "space-between",
  },
  editButton: {
    backgroundColor: "#228b22",
    padding: 5,
    borderRadius: 4,
    marginBottom: 4,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  deleteButton: {
    backgroundColor: "#ff0000",
    padding: 5,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
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
    width: 25,
    height: 25,
  },
  navText: {
    fontSize: 10,
    color: "#000",
    marginTop: 4,
  },
});

export default styles;
