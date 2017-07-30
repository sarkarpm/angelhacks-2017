import { Dimensions, StyleSheet } from 'react-native';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    //fontFamily: 'Avenir'
  },

  infoContainer: {
    // backgroundColor: 'white',
    opacity: 0.9,
    paddingHorizontal: 15,
    paddingVertical: 5,
    display: 'flex',
    alignItems: 'center',
    width: win.width
  },
  image: {
    width: win.width,
    height: 250,
    position: 'absolute'
  },
  restaurant: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative',
    height: 250
  },
  title: {
    fontSize: 25,
    width: win.width,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  address: {
    fontSize: 15,
    marginBottom: 5
  },
  welcome: {
    fontSize: 30,
    width: win.width,
    height: 300,
    color: '#479F00',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  availableAll: {
    width: 180,
    height: 40,
    backgroundColor: '#4AC9BA',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
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
});

export default styles;
