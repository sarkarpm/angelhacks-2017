import { Dimensions, StyleSheet } from 'react-native';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  foodView: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    width: win.width,
    alignItems: 'center'
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
})

export default styles;