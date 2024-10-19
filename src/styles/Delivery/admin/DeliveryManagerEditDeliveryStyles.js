import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  paymentManagerEditPayment: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  maintext: {
    justifyContent: "center",
    backgroundColor: "#ff0000",
    alignItems: "center",
    paddingTop: height * 0.02,
    paddingBottom: height * 0.02,
  },
  lastMinutePantryContainer: {
    fontSize: width * 0.06,
    textAlign: "center",
    fontFamily: "Inter-Regular",
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
  arrowBackParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.02,
  },
  arrowBackIcon: {
    width: width * 0.07,
    height: width * 0.07,
  },
  editPayment: {
    fontSize: width * 0.06,
    color: "#000",
    fontFamily: "Roboto-Regular",
  },
  frameChild: {
    width: width * 0.09,
    height: width * 0.09,
  },
  formContainer: {
    marginTop: height * 0.05,
    paddingHorizontal: width * 0.08,
  },
  inputGroup: {
    marginBottom: height * 0.02,
  },
  inputLabel: {
    fontSize: width * 0.045,
    color: "#000",
    fontFamily: "Inter-Regular",
    marginBottom: height * 0.01,
  },
  inputField: {
    borderColor: "#737171",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    fontSize: width * 0.045,
    color: "#737171",
  },
  buttonWrapper: {
    backgroundColor: "#ff0000",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: height * 0.015,
    borderRadius: 10,
    marginHorizontal: width * 0.1,
    marginTop: height * 0.03,
  },
  buttonText: {
    color: "#fff",
    fontSize: width * 0.05,
    fontFamily: "Inter-Regular",
  },
  inputField: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginVertical: 10,
  },
  buttonWrapper: {
    backgroundColor: '#f05a28',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});

export default styles;
