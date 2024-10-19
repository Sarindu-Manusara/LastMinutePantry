import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    height: height * 0.1, // Responsive height based on screen size
    backgroundColor: '#b2ffb2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: width * 0.06, // Responsive font size
    fontWeight: 'bold',
  },
  highlight: {
    color: 'red',
  },
  writeReviewSection: {
    padding: 20,
    flex: 1,
  },
  sectionTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  selectShopButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#7CE18C',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  selectShopText: {
    color: '#fff',
    fontSize: width * 0.045,
  },
  input: {
    backgroundColor: '#98FB98',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    color: '#000',
    fontSize: width * 0.04,
  },
  imageInput: {
    backgroundColor: '#98FB98',
    height: height * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  starRating: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#7CE18C',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: width * 0.045,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default styles;
