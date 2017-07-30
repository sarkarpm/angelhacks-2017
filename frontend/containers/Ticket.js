import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	ListView,
	Image,
	Button,
	TouchableOpacity,
	ScrollView
} from 'react-native';
import styles from '../ticketStyles.js';
import axios from 'axios';

class Ticket extends React.Component {
	static navigationOptions = {
    	title: 'Ticket'
  	};

  	componentDidMount(){
  		console.log('VFDFJKHZDFJK')
  		axios.get('https://api.qrserver.com/v1/create-qr-code/?data=GrandmasCafe&size=100x100', {

  		}).then(resp => {
  			console.log(resp);
  		})
  		.catch(err => {
  			console.log('ERROR', err);
  		})
  	}
	render(){
		return (
			<View style={styles.container}>
			<View>
				<Text style={styles.title}> Your Order: </Text>
				<View style={styles.description}>
					<Text> AMOUNT: 5 </Text>
					<Text> ITEM: Avocados </Text>
				</View>
				<Text style={styles.from}> From: Grandma's Café </Text>
				<Text style={styles.address}> 11908 Blairmont Pl | (804) 922-7759</Text>
			</View>
			<View> 
				<Image
					style={styles.image}
					source={{uri: "https://api.qrserver.com/v1/create-qr-code/?data=GrandmasCafe&amp;size=100x100" }}
					/> 
			</View>
			</View>
			)
	}
	
}

export default Ticket;