import { Dimensions, StyleSheet } from 'react-native';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    display: 'block',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    padding: 0
  },
  foodView: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    width: win.width,
    alignItems: 'center'
  },
  deleted: {
    display: 'none'
  },
  foodItem: {
    width: win.width,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomColor: '#4AC9BA',
    borderBottomWidth: 2,
    display: 'inline-block',
    position: 'relative'
  },
  addButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 40,
    height: 40,
    backgroundColor: '#4AC9BA',
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 20,
    top: 16
  },
  soldOutRest: {
    height: 40,
    width: 90,
    backgroundColor: '#9e9e9e',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    top: -2,
    marginTop: 0,
    paddingTop: 0
  },
  soldOutUser: {
    height: 40,
    width: 90,
    backgroundColor: '#9e9e9e',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 19,
    top: 7,
    marginTop: 0,
    paddingTop: 0
  },
  addButtonRest: {
    width: 40,
    height: 40,
    backgroundColor: '#4AC9BA',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  inputField: {
    height: 40,
    width: win.width - 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10
  },
  allAvailable: {
    width: 150,
    height: 40,
    backgroundColor: '#4AC9BA',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
})

export default styles;
