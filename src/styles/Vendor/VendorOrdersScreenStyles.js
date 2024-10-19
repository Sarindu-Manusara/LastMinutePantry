import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollView: {
    width: width * 0.95,
    height: height * 0.8,
    marginTop: height * 0.1,
    overflow: 'scroll',
    paddingVertical: 36,
    paddingHorizontal: 15,
  },
  orderContainer: {
    width: width * 0.9,
    height: 190,
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 36,
    alignSelf: 'center',
  },
  orderId: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#000000',
    marginBottom: 10,
  },
  customerName: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#000000',
    marginBottom: 10,
  },
  orderItems: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#000000',
    marginBottom: 10,
  },
  status: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#000000',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 29,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    width: '45%',
    height: 29,
    borderRadius: 20,
  },
  buttonText: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  completeButton: {
    backgroundColor: '#228B22',
  },
  cancelButton: {
    backgroundColor: '#FF0000',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',  // Ensures the nav spans the full width of the screen
    height: 82,      // Fixed height for consistency
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    position: 'absolute',
    bottom: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  navText: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
  header: {
    backgroundColor: '#109415',
    width: '100%',
    height: 102,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Inter',
    fontSize: 24,
    color: '#FF914D',
  },
});

export default styles;
