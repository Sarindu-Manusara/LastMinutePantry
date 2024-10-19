// CustomerOrderReservationSumStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
    justifyContent: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  submitButton: {
    backgroundColor: '#a3fba8',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 50,
  },
  submitButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },


  horizontalLine: {
    width: '90%',
    height: 1,
    backgroundColor: 'black',
    marginHorizontal:'auto',
  },

  stageImage:{
    marginHorizontal: 'auto',
    marginBottom: 20,
  },
  inputFieldName:{
   fontWeight: 'bold',
   color: 'black',
  },
  iconConatiner:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    gap: 10,
  },
});

export default styles;
