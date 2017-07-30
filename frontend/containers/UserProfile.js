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
import SearchBar from 'react-native-searchbar'
import styles from '../ticketStyles.js';
import axios from 'axios';

class UserProfile extends React.Component {
	static navigationOptions = {
    title: 'UserProfile'
  };
  constructor(props) {
		super(props);
		this.state = {
      		user: ""
    	}
	}
	

	componentWillMount(){
	
		axios.get('http://localhost:3000/users/' + this.props.navigation.state.params.user._id)
		.then(resp => {
			console.log('priyasarkar')
			if(resp.data.success){
				console.log('RESP w user', resp.data.user)
				this.setState({user: resp.data.user});
			}
		})
		.catch(err => {
			console.log('priyasarkarerr')
			console.log('ERR', err)
		})
	}

	render() {
		if(this.state.user === ""){
			return <Text> Loading... </Text>
		}
		else {
		return (
			<ScrollView>
			<Text style={styles.welcome}> {this.state.user.firstName} {this.state.user.lastName}'s profile</Text>
   
          {this.state.user.orders.map((order, index) => {
         	return <View key={index} style={styles.realContainer}>
			<View style={styles.container}>
				<View>
					<Text style={styles.title}> Your Order: </Text>
					<View style={styles.description}>
						<Text> AMOUNT: {order.quantity} {order.units}</Text>
						<Text> ITEM: {order.name} </Text>
						<Text> TOTAL PRICE: ${parseFloat(order.price) * parseFloat(order.quantity)}</Text>
					</View>
					<Text style={styles.from}> From: {order.provider.name} </Text>
				</View>
				<View> 
					<Image
						style={styles.image}
						source={{uri: `https://api.qrserver.com/v1/create-qr-code/?data=${order.name + index}}&amp;size=100x100` }}
						/> 
				</View>

			</View>
			<Text style={styles.address}> {order.provider.location} | {order.provider.phone} </Text>
			</View>
       })}
			</ScrollView>
		)
	}
	}
}

export default UserProfile;