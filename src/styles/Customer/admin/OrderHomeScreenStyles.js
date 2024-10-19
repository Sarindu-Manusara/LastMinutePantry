import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingHorizontal: 35,
  },
  headerText:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black'
  },
  headerIcons:{
    width: 30,
    height: 30,
  } ,
  orderItem:{
    padding: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // Shadow for Android
    borderRadius: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  orderListWrapper:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  actionWrapper:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  orderNumText:{
    fontSize: 18,
    fontWeight: 'medium',
    color: 'black',
  },
  btn: {
    backgroundColor: 'red',
    width: 60, 
    height: 60,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginBottom: 30,
    marginHorizontal: 40,
    alignSelf:'flex-end'
},
  createordertext:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  pdfbtn:{
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // Shadow for Android
    borderRadius: 16,
    backgroundColor: 'white',
    width: '80%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 40,
    alignSelf:'flex-start',
    borderRadius: 16,
    marginBottom: 20,
    flexDirection: 'row',
    gap: 40,
  },
  reporTxt:{
    fontSize: 18,
    color: 'black',
  },
  reportIcn:{
    width: 30,
    height: 30,
    borderRadius: 4,
  },
});

export default styles;
