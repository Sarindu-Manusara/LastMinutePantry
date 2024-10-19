import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  description:{ 
    width: '35%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 10,
    paddingTop: 30,
  },
  cartItemContainer: {
    backgroundColor:"white",
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    width: '100%',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  productImage: {
    width: 100,
    height: 120,
    marginRight: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityText: {
    marginHorizontal: 10,
  },
  couponContainer: {
    backgroundColor:"white",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    width: '100%',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  couponInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor:"white",
  },
  submitButton: {
    backgroundColor: '#98fb98',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
  },
  submitButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  subtotalContainer: {
    backgroundColor:"white",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    width: '100%',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  subtotalText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black', 
  },
  subtotalTextValue: {
    color: '#8ca58a',
    alignSelf: 'flex-end',
  },
  checkoutButton: {
    backgroundColor: '#98fb98',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
    width: 300,
  },
  checkoutButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  deleteIcon: {
    width: 20,
    height: 25,
    marginLeft: 10,
  },
  rightSide: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSide: {
    flexDirection: 'column',
    gap: 10,
    paddingLeft: 15,
  },
  couponText: {
    fontSize: 20,
    marginBottom: 5,
    color: 'black',
  },
  subTotalText: {
    fontSize: 18,
    marginBottom: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  subtotalSubContainer:{
    paddingLeft: 20,
  },
  emptyCartContainer:{
    backgroundColor: 'white',
    height: height,
    alignItems: 'center',
    paddingTop: 80,
  },
  emptyCartText:{
    fontSize: 20,
    color: 'black',
  },
  emptyCartImage:{
    width: 200,
    height: 200,
  },
  backButton:{
    backgroundColor: 'white',
  
  
  },

});

export default styles;
