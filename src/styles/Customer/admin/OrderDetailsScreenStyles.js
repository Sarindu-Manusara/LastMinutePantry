import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailsWrapper: {
    padding: 20,
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 40,
  },
  contactsWrapper: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    gap: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  value: {
    fontWeight: 'normal',
    fontSize: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    gap: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // Shadow for Android
    backgroundColor: 'white',
  },
  buttonWrpper: {
    flexDirection: 'column',
    paddingHorizontal: 40,
    gap: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  cartItemsWrapper: {
    paddingHorizontal: 40,
   
  },
  cartTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  cartItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  cartItemDescription: {
    fontSize: 16,
    color: '#555',
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#333',
  },
  cartItemQuantity: {
    fontSize: 16,
    color: '#333',
  },
  total: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  disc: {
    fontSize: 22,
    lineHeight: 40,
    color: 'black',
  },
});


export default styles;
