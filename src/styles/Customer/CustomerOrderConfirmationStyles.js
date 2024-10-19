import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  customerOrderConfirmation: {
    backgroundColor: '#f8f8f8',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  orderStageImage: {
    width: width * 0.8,
    height: height * 0.08,
    marginTop: 20,
  },
  orderConfirmationImage: {
    width: width * 0.9,
    height: height * 0.4,
    marginTop: 20,
  },
  thankYouMessage: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: '#4e544e',
    marginTop: 20,
  },
  homeButton: {
    backgroundColor: '#98fb98',
    borderRadius: 10,
    width: width * 0.3,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  homeButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  rootWrapper: {
    flexGrow: 1,
    backgroundColor:"white",
  },
  subWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  customerDetails:{
    width: '90%',
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#98fb98',
    borderRadius: 10,
  },
  detail:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
  },
  text:{
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  oType:{
    alignSelf:'flex-end',
    marginRight: 25,
  },
  btnWrapper:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  updateBtn:{
    backgroundColor: '#3dc645',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  dltBtn:{
    backgroundColor: '#ea4343',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  paymentBtn:{
    backgroundColor: '#98fb98',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    width: '100%',
  },
  paymentBtnWrapper:{
    width: '80%',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  orderDetails:{
    width: '90%',
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#98fb98',
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,

  },
  dwnloadBtn:{
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
    justifyContent:"flex-end",
    marginRight: 60,
  },
  downloadButtonText:{
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
});

export default styles;
