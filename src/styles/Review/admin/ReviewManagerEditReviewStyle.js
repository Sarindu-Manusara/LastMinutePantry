import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Set a base width and height based on the original screen size for scaling
const baseWidth = 1080;
const baseHeight = 2340;

const scaleWidth = (size) => (width / baseWidth) * size;
const scaleHeight = (size) => (height / baseHeight) * size;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(40),
  },
  header: {
    height: scaleHeight(180),
    backgroundColor: '#ff4d4d',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    fontSize: scaleWidth(64),
    fontWeight: 'bold',
  },
  highlight: {
    color: '#b2ffb2',
  },
  title: {
    fontSize: scaleWidth(50),
    fontWeight: 'bold',
    marginTop: scaleHeight(20),
    marginBottom: scaleHeight(10),
    textAlign: 'center',
  },
  reviewList: {
    paddingHorizontal: scaleWidth(20),
    paddingBottom: scaleHeight(20),
  },
  reviewCardContainer: {
    backgroundColor: '#fff',
    borderRadius: scaleWidth(20),
    padding: scaleWidth(20),
    marginBottom: scaleHeight(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  reviewCard: {
    backgroundColor: '#ff4d4d',
    borderRadius: scaleWidth(20),
    padding: scaleWidth(20),
    width: '100%',
  },
  reviewText: {
    fontSize: scaleWidth(32),
    color: '#fff',
    marginBottom: scaleHeight(10),
  },
  reviewDate: {
    fontSize: scaleWidth(28),
    color: '#fff',
    marginBottom: scaleHeight(10),
  },
  starRating: {
    flexDirection: 'row',
    marginVertical: scaleHeight(10),
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleHeight(10),
  },
  editButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: scaleHeight(10),
    paddingHorizontal: scaleWidth(30),
    borderRadius: scaleWidth(10),
    borderWidth: 1,
    borderColor: '#fff',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: scaleHeight(10),
    paddingHorizontal: scaleWidth(30),
    borderRadius: scaleWidth(10),
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: scaleWidth(36),
  },
  submitButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: scaleHeight(20),
    paddingHorizontal: scaleWidth(80),
    borderRadius: scaleWidth(10),
    marginTop: scaleHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: scaleWidth(36),
  },
});

export default styles;
