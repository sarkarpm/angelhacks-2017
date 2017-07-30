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

	render(){
		return (
			<View style={styles.realContainer}>
			<View style={styles.container}>
				<View>
					<Text style={styles.title}> Your Order: </Text>
					<View style={styles.description}>
						<Text> AMOUNT: {this.props.navigation.state.params.quantity} {this.props.navigation.state.params.units}</Text>
						<Text> ITEM: {this.props.navigation.state.params.foodName} </Text>
						<Text> TOTAL PRICE: ${parseFloat(this.props.navigation.state.params.price) * parseFloat(this.props.navigation.state.params.quantity)}</Text>
					</View>
					<Text style={styles.from}> From: {this.props.navigation.state.params.provider.name} </Text>
				</View>
				<View> 
					<Image
						style={styles.image}
						source={{uri: `https://api.qrserver.com/v1/create-qr-code/?data=${this.props.navigation.state.params.provider._id}}&amp;size=100x100` }}
						/> 
				</View>

			</View>
			<Text style={styles.address}> {this.props.navigation.state.params.provider.location} | {this.props.navigation.state.params.provider.phone} </Text>
			</View>
			)
	}
	
}

export default Ticket;