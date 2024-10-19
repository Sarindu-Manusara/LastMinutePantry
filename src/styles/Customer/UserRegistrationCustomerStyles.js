import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  userRegistrationCustomer: {
    backgroundColor: "#f8f8f8",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  maintext: {
    top: 0,
    width: "100%",
    height: height * 0.15,
    backgroundColor: "#98fb98",
    justifyContent: "center",
    alignItems: "center",
  },
  lastMinutePantryContainer: {
    fontSize: width * 0.06,
    fontFamily: "Inter-Regular",
  },
  lastMinute: {
    color: "#ff914d",
  },
  pantry: {
    color: "#2c662d",
  },
  signUpWrapper: {
    marginTop: height * 0.02,
    alignItems: "center",
  },
  signUp: {
    fontSize: width * 0.08,
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter-Bold",
  },
  instanceParent: {
    marginTop: height * 0.03,
    paddingHorizontal: 36,
    alignItems: "center",
  },
  inputLabelParent: {
    width: "90%",
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: width * 0.045,
    color: "#575252",
    marginBottom: 5,
    fontFamily: "Inter-Regular",
  },
  input: {
    borderRadius: 10,
    borderColor: "#737171",
    borderWidth: 1,
    padding: 12,
    fontSize: width * 0.045,
    color: "#575252",
    fontFamily: "Inter-Regular",
  },
  button: {
    marginTop: height * 0.05,
    borderRadius: 20,
    width: "75%",
    height: 46,
    backgroundColor: "#98fb98",
    justifyContent: "center",
    alignItems: "center",
    left: 50
  },
  logIn: {
    fontSize: width * 0.045,
    color: "#000",
    fontFamily: "Inter-Regular",
  },
  frame: {
    marginTop: height * 0.02,
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
  icons8Google481: {
    width: 48,
    height: 48,
  },
  bySingingUpYouAgreeTermsWrapper: {
    marginTop: height * 0.02,
    alignItems: "center",
  },
  bySingingUpContainer: {
    textAlign: "center",
    fontSize: width * 0.04,
    color: "#000",
    fontFamily: "Inter-Regular",
  },
  termsConditions: {
    color: "#d9884e",
  },
});

export default styles;
