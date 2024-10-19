import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
paddingBottom: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  dateButton: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    gap: 20,
  },
  generateButton: {
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 15,
    alignItems: 'center',
  },
  generateButtonText: {
    color: 'white',
    fontSize: 16,
  },
  wrapper: {
    flex: 1,
    marginTop: 20,
  },
  datePickerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 40,
  },
  to: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
  },
  backButton: {
    marginBottom: 20,
  },
  reportBtn: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 10,
  },
  viewRepoTxt: {
    fontSize: 16,
    color: 'black',
  },
  reportsWrapper:{
    marginTop: 60,
    flexDirection: 'column',
    gap: 20,
  }
});

export default styles;
