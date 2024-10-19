// CustomerReservationDetailsStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  customerReservationDetails: {
    backgroundColor: '#f8f8f8',
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  top: {
    top: 72,
    gap: 10,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
  },
  topChild: {
    width: width * 0.9,
    height: 2,
  },
  checkout: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reservation: {
    fontSize: 22,
    lineHeight: 28,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    marginLeft: 10,
    color: '#000000',
  },
  icons8UpArrow5: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 10,
  },
  orderStage4: {
    marginLeft: 20,
    top: 139,
    width: width * 0.9,
    height: 58,
    position: 'absolute',
  },
  inputfields: {
    top: 223,
    width: '100%',
    alignItems: 'center',
  },
  textInputField: {
    height: 42,
  },
  textBorder: {
    fontSize: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: '#737171',
    backgroundColor: '#a3fba8',
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  name: {
    width: '80%',
  },
  number: {
    width: '80%',
  },
  namedes: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  phonedes: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  nicDes: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  emailDes: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  personIcon: {
    width: 25,
    height: 25,
  },
  inputLable: {
    fontSize: 18,
    marginLeft: 10,
  },
  termsandconditions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 250,
    alignSelf: 'center',
  },
  agreeToTerms: {
    marginLeft: 10,
    color: '#403d3b',
    fontSize: 13,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#98fb98',
    width: 107,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  submit: {
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    color: '#000',
  },
});

export default styles;
