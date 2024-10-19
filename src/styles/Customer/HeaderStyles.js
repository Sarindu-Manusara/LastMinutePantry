import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  storeContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  storeImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  storeInfo: {
    flex: 1,
    marginLeft: 10,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  storeDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  browseButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  browseButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  safeAreaContainer: {
    color: '#fff',
    fontWeight: 'bold',
    height: '100%',
  },
  headBanner: {
    backgroundColor: '#98fb98',
    fontWeight: 'bold',
    height: 80,
    color: '#ff914d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    color: '#ff914d',
    fontSize: 30,
  },
  spanText: {
    color: 'black',
  },
});

export default styles;
