import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 30, 
    padding: 10,
    fontSize: 18,
    color: '#228b22',
  },
  searchIcon: {
    position: 'absolute',
    right: 30,
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: 'gray',
  },
  listContainer: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: 24,
    paddingBottom: 20, 
  },
  productContainer: {
    width: (width / 2) - 30, 
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 5, 
    marginBottom: 20, 
    marginHorizontal: 10, 
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 5,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 12,
    color: '#1f8522',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  storename: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 15,
    width: '100%',
    
  },
  goback:{
    flexDirection: 'row',
    width:'70%',

  },
  backButton:{
    alignItems:'flex-start'
   
  }
});

export default styles;
