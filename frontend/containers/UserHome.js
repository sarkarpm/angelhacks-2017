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



// class HomeScreen extends React.Component {
// 	constructor() {
// 		super();
// 		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
// 		this.state = {
// 			dataSource: ['ShareTea', 'Moo']
// 		};
// 	}

// 	render() {
// 		return (
// 			<View style={styles.container}>
// 			<Text style={[styles.textBig, {color: '#53E0CF'}]}>boop the snoot</Text>
// 			{this.state.dataSource.map(items => {<Text> items </Text>})}
// 			</View>
// 			)
// 	}
// }

class RestaurantPreview extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items,
			results: []
		};
		this._handleResults = this._handleResults.bind(this);
	}

	_handleResults(results) {
		this.setState({ results });
	}

	render() {
		return (
			<ScrollView>
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
			<SearchBar
			ref={'ref'}
			data={items}
			handleResults={this._handleResults}
			showOnLoad
			/>
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