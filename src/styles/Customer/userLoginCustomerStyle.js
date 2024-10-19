import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  userLoginCustomer: {
    flex: 1,
    width: "100%",
    height: height,
    backgroundColor: "#fff",
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
  logInWrapper: {
    marginTop: height * 0.05,
    alignItems: "center",
  },
  logIn: {
    fontSize: width * 0.08,
    color: "#000",
    fontFamily: "Inter-Bold",
  },
  instanceParent: {
    marginTop: height * 0.03,
    paddingHorizontal: 36,
    alignItems: "center",
  },
  inputLabelParent: {
    width: "90%",
    marginBottom: 20,
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
  forgotPasswordWrapper: {
    marginTop: height * 0.02,
    alignItems: "center",
  },
  forgotPassword: {
    color: "#d9884e",
    fontSize: width * 0.045,
    fontFamily: "Inter-Regular",
  },
  button: {
    marginTop: height * 0.04,
    borderRadius: 20,
    width: "75%",
    height: 46,
    backgroundColor: "#98fb98",
    justifyContent: "center",
    alignItems: "center",
    right: -50
  },
  logInButtonText: {
    fontSize: width * 0.045,
    color: "#000",
    fontFamily: "Inter-Regular",
  },
  orWrapper: {
    marginTop: height * 0.03,
    alignItems: "center",
  },
  or: {
    textAlign: "center",
    fontSize: width * 0.045,
    color: "#000",
    fontFamily: "Inter-Regular",
  },
  icons8Google481Parent: {
    marginTop: height * 0.03,
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
  dontHaveAnAccountSignUpWrapper: {
    marginTop: height * 0.02,
    alignItems: "center",
  },
  dontHaveAnContainer: {
    textAlign: "center",
    fontSize: width * 0.04,
    color: "#000",
    fontFamily: "Inter-Regular",
  },
  dontHaveAn: {
    color: "#000",
  },
  signUp: {
    color: "#d9884e",
  },
});

export default styles;
