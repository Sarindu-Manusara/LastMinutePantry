import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  storeContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    // backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    gap: 20,
    // elevation: 2,
  
  },
  storeImage: {
    width: 'auto',
    height: 170,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 6,
  },
  storeInfo: {
    flex: 1,
    gap: 8,
    justifyContent: 'center',
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  storeDescription: {
    fontSize: 14,
    color: 'blcak',
    marginVertical: 5,
  },
  browseButton: {
    backgroundColor: '#98fb98',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  browseButtonText: {
    color: '#000',
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
