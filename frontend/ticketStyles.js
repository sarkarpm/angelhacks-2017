import { Dimensions, StyleSheet } from 'react-native';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
	realContainer: {
		backgroundColor: 'white',
  	borderRadius: 4,
  	marginTop: 15,
  	marginBottom: 10,

	},
	receipt: {
		backgroundColor: 'white',
		marginBottom: 5
	},
	container: {
    	backgroundColor: 'white',
    	flexDirection: 'row'
  	},
  	title: {
  		fontSize: 30,
  		margin: 5,
    	fontWeight: 'bold',
			color: '#1FAF9A'
  	},
  	description: {
  		marginLeft: 7,
  		marginBottom: 10,
  		borderColor: 'black',
  	},
  	welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  	image: {
    	width: 100,
    	height: 100,
    	marginTop: 20,
    	marginBottom: 20,
    	marginLeft: 75,
			display: 'flex',
			right: 40
    	// alignItems: 'center',
    	// justifyContent: 'center'

  	},
  	from: {
			marginLeft: 5,
  		marginBottom: 10,
  		flexDirection: 'row',
  		fontSize: 20
  	},
  	address: {
  		fontSize: 10,
  		marginLeft: 8,
  		marginBottom: 10,
			backgroundColor: 'white'
  	}
});

export default styles;
