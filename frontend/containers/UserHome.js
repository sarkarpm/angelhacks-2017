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
	static navigationOptions = {
    title: 'Restaurants'
  };
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ScrollView>
			<Button title="View Map" onPress={() => this.props.navigation.navigate('Map')} />
			<View style={{marginBottom: 100, marginTop: 100}}>
			{
				this.state.results.map((result, i) => {
					return (
						<Text key={i}>
						{typeof result === 'object' && !(result instanceof Array) ? 'gold object!' : result.toString()}
						</Text>
						);
				})
			}
			</View>
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