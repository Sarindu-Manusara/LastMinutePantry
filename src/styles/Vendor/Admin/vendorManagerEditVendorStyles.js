import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  vendorManagerEditManager: {
    flex: 1,
    backgroundColor: '#fff',
  },
  maintextParent: {
    width: '100%',
  },
  maintext: {
    height: height * 0.11,
    paddingHorizontal: width * 0.1,
    paddingBottom: height * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ff0000',
  },
  lastMinutePantryContainer: {
    fontSize: width * 0.06,
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
    height: height * 0.08,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  myProductsChild1: {
    height: 35,
    width: 35,
    right: 85
  },
  myProductsChild2: {
    height: 35,
    width: 35,
    left: 80
  },
  editVendor: {
    fontSize: 22,
    color: '#000',
    fontFamily: 'Roboto-Regular',
    lineHeight: 28,
  },
  frameParent: {
    padding: 20,
    marginTop: height * 0.02,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  instanceParent: {
    gap: 15,
    alignSelf: 'stretch',
  },
  inputLabelParent: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    marginBottom: 5,
  },
  enterInput: {
    borderWidth: 1,
    borderColor: '#737171',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
    width: '100%',
  },
  editVendorWrapper: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#ff0000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    left: 60
  },
  editVendorButtonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Roboto-Regular',
  },
});
