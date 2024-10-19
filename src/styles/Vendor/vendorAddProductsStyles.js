// VendorAddProductsStyles.js
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const baseWidth = 375;
const scale = width / baseWidth;

const normalize = (size) => Math.round(scale * size);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#109415',
    paddingVertical: normalize(15),
    alignItems: 'center',
    
  },
  lastMinutePantryContainer: {
    fontSize: normalize(24),
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    height: height *0.10,
  },
  lastMinute: {
    color: '#ff914d',
  },
  text: {
    color: '#000',
  },
  pantry: {
    color: '#2c662d',
  },
  formContainer: {
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(10),
  },
  inputField: {
    marginBottom: normalize(15),
  },
  inputLabel: {
    fontSize: normalize(16),
    marginBottom: normalize(5),
    color: '#000',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: normalize(5),
    padding: normalize(10),
    fontSize: normalize(16),
    color: '#000000'
  },
  imageField: {
    alignItems: 'center',
    marginBottom: normalize(15),
  },
  imagePreview: {
    width: width * 0.8,
    height: normalize(200),
    borderRadius: normalize(10),
    marginTop: normalize(10),
  },
  imageUploadButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: normalize(5),
    padding: normalize(20),
    alignItems: 'center',
  },
  uploadIcon: {
    width: normalize(40),
    height: normalize(40),
  },
  submitButton: {
    backgroundColor: '#228b22',
    paddingVertical: normalize(12),
    borderRadius: normalize(5),
    alignItems: 'center',
    marginTop: normalize(20),
  },
  buttonText: {
    color: '#fff',
    fontSize: normalize(18),
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: normalize(10),
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: normalize(30),
    height: normalize(30),
  },
  navText: {
    fontSize: normalize(12),
    color: '#000',
    marginTop: normalize(5),
  },
  icon: {
    height: "100%",
    width: "100%"
  },
  icons8UpArrow5: {
    width: normalize(35),
    height: normalize(35)
  },
  addProducts: {
    fontSize: normalize(22),
    lineHeight: normalize(28),
    fontFamily: "Roboto-Regular",
    color: "#000",
    textAlign: "center"
  },
  wrapper: {
    width: normalize(40),
    height: normalize(35)
  },
  myProducts: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: normalize(10),
    width: "100%",
    alignItems: "center",
  },
  frameGroupFlexBox: {
    gap: normalize(6),
    alignItems: "center",
    height: normalize(57),
  },
  productsTypo: {
    height: normalize(10),
    textAlign: "left",
    fontFamily: "Inter-Regular",
    fontSize: normalize(12),
    alignSelf: "stretch",
  },
  frameChild: {
    width: normalize(40),
    height: normalize(35),
  },
  dashboard: {
    color: "#000",
  },
  groupParent: {
    width: normalize(62),
  },
  products: {
    color: "#109415",
  },
  groupContainer: {
    width: normalize(52),
  },
  framePressable: {
    width: normalize(42),
  },
  frameView: {
    width: normalize(73),
  },
  frameChild1: {
    width: normalize(35),
    height: normalize(35),
  },
  groupParent1: {
    width: normalize(37),
  },
  navigationBar: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: normalize(10),
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
});

export default styles;
