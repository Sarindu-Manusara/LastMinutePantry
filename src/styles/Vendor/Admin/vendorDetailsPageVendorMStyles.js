import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  vendorDetailsPageVendorM: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
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
  reportIconLayout1: {
    height: 35,
    width: 35,
    left: -60
  },
  reportIconLayout2: {
    height: 35,
    width: 35,
    left: 55
  },
  vendorDetailsPage: {
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    lineHeight: 28,
  },
  frameParent: {
    padding: 20,
    marginTop: height * 0.02,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
  },
  keellsParent: {
    gap: 10,
    marginBottom: 20,
  },
  keells: {
    fontSize: 22,
    color: '#000',
    fontFamily: 'Roboto-Regular',
    lineHeight: 28,
  },
  emailKeelsgmailcom: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    lineHeight: 22,
  },
  frameGroup: {
    gap: 18,
    alignSelf: 'stretch',
  },
  frameShadowBox: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 10,
  },
  editWrapper: {
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
    marginRight: 15,
  },
  iconLayout: {
    height: 25,
    width: 25,
  },
  reportIcon: {
    height: 25,
    width: 25,
    marginRight: 15,
  },
  editVendorText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Inter-Regular',
    lineHeight: 22,
    textAlign: 'left',
  },
  micButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    left: 150,
    bottom: -40
  },
  micButtonInactive: {
    backgroundColor: '#ff4d4d', // Red color when inactive
  },
  micButtonActive: {
    backgroundColor: '#cc0000', // Darker red when active (pressed)
  },
  micIcon: {
    width: 30,
    height: 30,
  },
});
