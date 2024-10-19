import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768;

const styles = StyleSheet.create({

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 35,
  },
  headerText:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
    maxWidth: 200,
  },
  headerIcons:{
    width: 30,
    height: 30,
  } ,
});

export default styles;
