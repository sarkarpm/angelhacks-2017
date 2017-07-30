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
import styles from '../homeStyles.js';

const items = [
1337,
'janeway',
[ 4, 2, 'tree' ],
];

class RestaurantPreview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView>
			<Text style={styles.welcome}>Welcome {this.props.navigation.state.params.firstName}! :)</Text>
			<View style={styles.container}>
				<View style={styles.restaurant}>			
					<Image
						style={styles.image}
						source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
					/> 
					<View style={styles.restContainer}>
						<Text style={styles.title}>Grandma's Café</Text>
						<Text style={styles.description}> Description </Text>
						<Text style={styles.address}> Address </Text>
					</View>
					<TouchableOpacity style={styles.buttonBlue}>
						<Text style={{textAlign: 'center'}}> View Profile</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.container}>
				<View style={styles.restaurant}>			
					<Image
					style={styles.image}
					source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
					/> 
					<View style={styles.restContainer}>
						<Text style={styles.title}>Teaspoon</Text>
						<Text style={styles.description}> Description </Text>
						<Text style={styles.address}> Address </Text>
					</View>
					<TouchableOpacity style={styles.buttonBlue}>
						<Text style={{textAlign: 'center'}}> View Profile</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.container}>
				<View style={styles.restaurant}>			
					<Image
					style={styles.image}
					source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
					/> 
					<View style={styles.restContainer}>
						<Text style={styles.title}>Teaspoon</Text>
						<Text style={styles.description}> Description </Text>
						<Text style={styles.address}> Address </Text>
					</View>
					<TouchableOpacity style={styles.buttonBlue}>
						<Text style={{textAlign: 'center'}}> View Profile</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.container}>
				<View style={styles.restaurant}>			
					<Image
					style={styles.image}
					source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
					/> 
					<View style={styles.restContainer}>
						<Text style={styles.title}>Teaspoon</Text>
						<Text style={styles.description}> Description </Text>
						<Text style={styles.address}> Address </Text>
					</View>
					<TouchableOpacity style={styles.buttonBlue}>
						<Text style={{textAlign: 'center'}}> View Profile</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.container}>
				<View style={styles.restaurant}>			
					<Image
					style={styles.image}
					source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
					/> 
					<View style={styles.restContainer}>
						<Text style={styles.title}>Teaspoon</Text>
						<Text style={styles.description}> Description </Text>
						<Text style={styles.address}> Address </Text>
					</View>
					<TouchableOpacity style={styles.buttonBlue}>
						<Text style={{textAlign: 'center'}}> View Profile</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.container}>
				<View style={styles.restaurant}>			
					<Image
					style={styles.image}
					source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
					/> 
					<View style={styles.restContainer}>
						<Text style={styles.title}>Teaspoon</Text>
						<Text style={styles.description}> Description </Text>
						<Text style={styles.address}> Address </Text>
					</View>
					<TouchableOpacity style={styles.buttonBlue}>
						<Text style={{textAlign: 'center'}}> View Profile</Text>
					</TouchableOpacity>
				</View>
			</View>
			</ScrollView>
			)
	}
}

export default RestaurantPreview;