import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  adminNotificationDashboard: {
    flex: 1,
    backgroundColor: '#fff',
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
    position: 'absolute',
    top: height * 0.1,
    width: '100%',
    height: 49,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  notificationDashboard: {
    fontSize: 22,
    lineHeight: 28,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    color: '#000',
  },
  myProductsChild: {
    position: 'absolute',
    right: 10,
    width: 40,
    height: 40,
  },
  myProductsItem: {
    position: 'absolute',
    left: 10,
    width: 35,
    height: 35,
  },
  buttonWrapper: {
    position: 'absolute',
    top: height * 0.25,
    left: width * 0.25,
    width: width * 0.5,
    height: 40,
    backgroundColor: '#98fb98',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Inter-Regular',
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height * 0.3,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  wrapperShadowBox: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation: 2,
  },
  newItems: {
    fontSize: 12,
    color: '#000',
  },
  notificationsList: {
    flex: 1,
    marginTop: height * 0.35,
    paddingHorizontal: 20,
  },
  notificationItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'column',
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  expiryText: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemID: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  manageButton: {
    backgroundColor: '#98fb98',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#98fb98',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
  },
  userType: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});

export default styles;
