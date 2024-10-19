import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  mainText: {
    backgroundColor: '#ff0000',
    width: '100%',
    height: height * 0.1,
    paddingHorizontal: width * 0.25,
    paddingBottom: 23,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    top: 0,
  },
  title: {
    fontSize: 24,
    textAlign: 'left',
  },
  lastMinute: {
    color: '#ff914d',
  },
  space: {
    color: '#000',
  },
  pantry: {
    color: '#2c662d',
  },
  headerSection: {
    marginLeft: -width * 0.5,
    top: height * 0.1,
    left: '50%',
    width: '100%',
    height: 49,
    position: 'absolute',
    backgroundColor: '#fff',
  },
  editNotification: {
    top: 11,
    left: width * 0.3,
    fontSize: 22,
    lineHeight: 28,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    color: '#000',
    position: 'absolute',
  },
  icon: {
    width: 40,
    position: 'absolute',
  },
  productsLayout: {
    height: 35,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  descriptionContainer: {
    width: '100%',
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Inter-Regular',
    marginBottom: 5,
  },
  textAreaWrapper: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height: 100,
    justifyContent: 'center',
  },
  textArea: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 14,
    color: '#737171',
    fontFamily: 'Inter-Regular',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Inter-Regular',
    marginBottom: 5,
  },
  textInput: {
    borderColor: '#737171',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height: 42,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  imageInputContainer: {
    width: '100%',
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
  saveButton: {
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
