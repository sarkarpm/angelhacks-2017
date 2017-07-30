import { Dimensions, StyleSheet } from 'react-native';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    //fontFamily: 'Avenir'
  },

  infoContainer: {
    backgroundColor: 'white',
    opacity: 0.9,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 10,
    width: win.width - 20
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
  x : {
    top: -55,
    right: -315,
    width: 10
  },
  x1: {
    position: 'absolute',
    top: -48,
    right: 0
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
    right: 20,
    top: 0,
    marginTop: 0,
    paddingTop: 0
  },
  deleted: {
    display: 'none'
  },
});

export default styles;
