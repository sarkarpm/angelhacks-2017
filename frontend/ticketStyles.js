import { Dimensions, StyleSheet } from 'react-native';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
	realContainer: {
		backgroundColor: '#F7F7F2',
    	borderRadius: 4,
    	borderWidth: 0.75,
    	borderColor: 'black',
    	marginTop: 5,
    	marginBottom: 10,
	},

	container: {
    	
    	flexDirection: 'row'
  	},
  	title: {
  		fontSize: 30,
  		margin: 5,
    	fontWeight: 'bold'
  	},
  	description: {
  		marginLeft: 30,
  		marginBottom: 10, 
  		borderColor: 'black',
  	},
  	image: {
    	width: 100, 
    	height: 100, 
    	marginTop: 20,
    	marginBottom: 20,
    	marginLeft: 75,
    	alignItems: 'center',
    	justifyContent: 'center'
    	
  	},
  	from: {
  		marginBottom: 10,
  		flexDirection: 'row',
  		fontSize: 20
  	},
  	address: {
  		fontSize: 10,
  		marginLeft: 10,
  		marginBottom: 10
  	}
});

export default styles;