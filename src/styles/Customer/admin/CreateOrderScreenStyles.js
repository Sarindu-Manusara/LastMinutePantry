import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  inputField: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  inputFieldWrappper: {
    flexDirection: 'column',
    gap: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
  },
  btnStyles: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    paddingHorizontal: 50,
  },
  errorText: {
    color: 'red',
  },
});

export default styles;
