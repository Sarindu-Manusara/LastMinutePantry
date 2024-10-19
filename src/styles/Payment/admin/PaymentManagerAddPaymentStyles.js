import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  maintextFlexBox: {
    justifyContent: 'center',
    backgroundColor: '#ff0000',
    alignItems: 'center',
  },
  inputTypo: {
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
  },
  wrapperFlexBox: {
    padding: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  cardTypo: {
    color: '#fff',
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
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
  lastMinutePantryContainer: {
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontSize: 24,
  },
  maintext: {
    width: '100%',
    height: 97,
    paddingHorizontal: 106,
    paddingTop: 10,
    paddingBottom: 23,
    backgroundColor: '#ff0000',
    position: 'relative',
    overflow: 'hidden',
  },
  arrowBackIcon: {
    width: 24,
    height: 24,
  },
  addPayment: {
    fontSize: 22,
    lineHeight: 28,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    color: '#000',
  },
  frameChild: {
    width: 35,
    height: 35,
  },
  arrowBackParent: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: screenWidth * 0.05,
  },
  inputLabel: {
    color: '#000',
    marginBottom: 5,
  },
  enterInput: {
    borderStyle: 'solid',
    borderColor: '#737171',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '100%',
    color: '#737171',
    marginBottom: 10,
  },
  inputLabelParent: {
    width: '100%',
    marginBottom: 15,
  },
  buttonWrapper: {
    justifyContent: 'center',
    backgroundColor: '#ff0000',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 12,
    alignSelf: 'center',
    marginTop: 20,
    width: '80%', // Ensures the button is wide enough and properly centered
  },
  button: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  frameParent: {
    marginTop: 30,
    paddingHorizontal: screenWidth * 0.1,
    width: '100%',
  },
  paymentManagerAddPayments: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default styles;
