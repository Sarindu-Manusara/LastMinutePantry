import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  vendorManagerScreenVendor: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  maintextParent: {
    width: '100%',
  },
  maintext: {
    height: height * 0.11,
    paddingHorizontal: width * 0.1,
    paddingBottom: height * 0.02,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
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
    gap: width * 0.15,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  myProductsChild: {
    height: 35,
    width: 35,
  },
  vendorManagerDashboard: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  frameParent: {
    padding: 10,
    marginTop: height * 0.02,
    width: '90%',
    alignSelf: 'center',
    gap: 20,
  },
  parentShadowBox: {
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center',
  },
  vendorName: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  infoParent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoLayout: {
    borderRadius: 10,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
  },
  groupChild: {
    height: 25,
    width: 25,
  },
  edit: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    height: 25,
    width: 25,
    overflow: 'hidden',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#ff0000',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  plusIcon: {
    height: 30,
    width: 30,
  },
  searchBar: {
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 40,
    width: 300,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    left: 40,
    color: '#000000',
  },  
});
