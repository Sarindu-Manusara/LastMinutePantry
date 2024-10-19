import { StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  headerContainer: {
    backgroundColor: '#19A10E', // Green background for the header
    paddingVertical: 10,
    alignItems: 'center',
    height: height * 0.10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: "Inter-Regular",
    marginTop: 10,
  },
  lastMinuteText: {
    color: "#ff914d",
  },
  pantryText: {
    color: "#2c662d",
  },
  
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    height: height * 0.08,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color:'#000000'
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  salesOverview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  salesBox: {
    width: width * 0.42,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  salesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E8B57',
  },
  salesAmount: {
    marginTop: 5,
    fontSize: 16,
    color: '#000',
  },
  productList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productBox: {
    width: width * 0.42,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  productImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  stock: {
    fontSize: 14,
    color: '#2E8B57',
    marginTop: 5,
  },
  orderBox: {
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    color: '#000000'
  },
  Otext:{
    color: '#000000'
  },
  readyButton: {
    backgroundColor: '#2E8B57',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
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

  greetingContainer: {
    marginBottom: 20,
    marginTop:20,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#19A10E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#19A10E',
  },
});

export default styles;
