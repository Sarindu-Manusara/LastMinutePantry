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
  selectShopButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ff4d4d',
    borderRadius: scaleWidth(20),
    padding: scaleWidth(20),
    marginVertical: scaleHeight(20),
  },
  selectShopText: {
    color: '#fff',
    fontSize: scaleWidth(36),
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: scaleHeight(20),
  },
  filterButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: scaleHeight(20),
    paddingHorizontal: scaleWidth(40),
    borderRadius: scaleWidth(16),
  },
  searchButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: scaleHeight(20),
    paddingHorizontal: scaleWidth(40),
    borderRadius: scaleWidth(16),
  },
  buttonText: {
    color: '#fff',
    fontSize: scaleWidth(36),
  },
  reviewList: {
    paddingHorizontal: scaleWidth(20),
  },
  reviewCard: {
    backgroundColor: '#ff4d4d',
    borderRadius: scaleWidth(20),
    padding: scaleWidth(20),
    marginBottom: scaleHeight(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
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
});

export default styles;
