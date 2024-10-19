import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  adminAddNotification: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  maintext: {
    backgroundColor: '#ff0000',
    width: width,
    height: height * 0.1,
    paddingHorizontal: width * 0.25,
    paddingBottom: 23,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lastMinutePantryContainer: {
    fontSize: 24,
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
  myProducts: {
    marginLeft: -width * 0.5,
    top: height * 0.1,
    left: '50%',
    width: '100%',
    height: 49,
    position: 'absolute',
    backgroundColor: '#fff',
  },
  addNotification: {
    top: 11,
    left: width * 0.3,
    fontSize: 22,
    lineHeight: 28,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    color: '#000',
    position: 'absolute',
  },
  myProductsChild: {
    top: 7,
    left: width * 0.9,
    width: 40,
    position: 'absolute',
  },
  myProductsItem: {
    top: 8,
    left: 15,
    width: 35,
    position: 'absolute',
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Inter-Regular',
    marginBottom: 5,
  },
  textArea: {
    borderColor: '#737171',
    borderRadius: 10,
    borderWidth: 1,
    height: 100,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
    color:'#000'
  },
  textInputField: {
    borderColor: '#737171',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    height: 42,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color:'#000'
  },
  inputImageContainer: {
    marginBottom: 20,
  },
  imageUpload: {
    borderWidth: 1,
    borderColor: '#737171',
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadIcon: {
    width: 50,
    height: 50,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: '#98fb98',
    padding: 10,
    borderRadius: 10,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#98fb98',
    padding: 10,
    borderRadius: 10,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Inter-Regular',
  },
});

export default styles;

