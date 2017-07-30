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
  },
  foodItem: {
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
  }
})

export default styles;
