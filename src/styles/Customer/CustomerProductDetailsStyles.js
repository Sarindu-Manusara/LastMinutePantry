import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#fff',
  },
  productImage: {
    width: 150,
    height: 150,
    marginRight: 20,
  },
  productInfo: {
    alignItems: 'flex-start',
    
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    paddingRight: 20,
    width: '35%',
  },
  productExpiry: {
    fontSize: 12,
    color: '#4CAF50',
    marginBottom: 5,
  },
  productOldPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#999',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    color: '#d32f2f',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  addToCartButton: {
    backgroundColor: '#98fb98',
    padding: 10,
    borderRadius: 12,
   alignSelf:'flex-end',
   paddingHorizontal: 20,
   marginTop: 10,
  },
  addToCartText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', 
    marginBottom: 50,
    justifyContent:'space-between',
  },
  qtyText:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  recProductText:{
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 20,
  },
  backButton:{
    backgroundColor:'white'
  },
  listContainer: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: 24,
    paddingBottom: 20, 
  },
  productImage2: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 5,
  },
  productContainer2: {
    width: (width / 2) - 30, 
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 5, 
    marginBottom: 20, 
    marginHorizontal: 10, 
  },
  recProductContainer:{
    backgroundColor: '#ffffff',
    marginBottom: 40,
  },
  productName2: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  productDescription2: {
    fontSize: 12,
    color: '#1f8522',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice2: {
    fontSize: 14,
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  
});

export default styles;
