import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ListView,
    Alert,
    Button,
    AsyncStorage
} from 'react-native';
import axios from 'axios';
import styles from '../styles';
import { Location } from 'expo';

class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Register'
    };
    constructor( props ) {
        super( props );
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            passwordRepeat: '',
            location: '',
            phone: ''
        }
    }
    registerUser( username, password, passwordRepeat, firstName, lastName ) {
        if ( passwordRepeat !== password ) {
            Alert.alert(
                'Invalid Register',
                'Your passwords do not match. Please try again.',
                [{ text: 'Dismiss Button' }] // Button
            )
        }
        else {
            axios.post( 'http://localhost:3000/register', {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName
            } )
                .then( response => {
                    console.log( "Login response: ", response );
                    this.props.navigation.navigate( 'Login' );
                } )
                .catch( err => console.log( err ) );
        }
    }
    registerRestaurant( username, password, passwordRepeat, location, name, phone ) {
        if ( passwordRepeat !== password ) {
            Alert.alert(
                'Invalid Register',
                'Your passwords do not match. Please try again.',
                [{ text: 'Dismiss Button' }] // Button
            )
        }
        else {
            Location.geocodeAsync( location )
                .then( geocode => {
                    return axios.post( 'http://localhost:3000/providers', {
                        name: name,
                        username: username,
                        password: password,
                        location: location,
                        type: 'restaurant',
                        phone: phone,
                        geocode: geocode[0]
                    } )
                } )
                .then( response => {
                    console.log( "Login response: ", response );
                    this.props.navigation.navigate( 'Login' );
                } )
                .catch( err => console.log( err ) );
        }
    }
    render() {
        const admin = this.props.navigation.state.params.admin;
        return (
            <View style={ styles.container }>
                <Text style={ styles.titleFont }>Register</Text>
                <TextInput
                    style={ [styles.textInput] }
                    placeholder="Enter your username"
                    onChangeText={ ( text ) => this.setState( { username: text } ) }
                />
                <TextInput
                    style={ [styles.textInput] }
                    secureTextEntry={ true }
                    placeholder="Enter your password"
                    onChangeText={ ( text ) => this.setState( { password: text } ) }
                />
                <TextInput
                    style={ [styles.textInput] }
                    secureTextEntry={ true }
                    placeholder="Repeat your password"
                    onChangeText={ ( text ) => this.setState( { passwordRepeat: text } ) }
                />
                {
                    admin ?
                        <View>
                            <TextInput
                                style={ [styles.textInput] }
                                placeholder="Restaurant Name"
                                onChangeText={ ( text ) => this.setState( { name: text } ) }
                            />
                            <TextInput
                                style={ [styles.textInput] }
                                placeholder="Pickup Address"
                                onChangeText={ ( text ) => this.setState( { location: text } ) }
                            />
                            <TextInput
                                style={ [styles.textInput] }
                                placeholder="Phone Number"
                                onChangeText={ ( text ) => this.setState( { phone: text } ) }
                            />
                            <TouchableOpacity
                                style={ [styles.button, styles.buttonPink] }
                                onPress={ () => this.registerRestaurant( this.state.username, this.state.password, this.state.passwordRepeat, this.state.location, this.state.name, this.state.phone ) }
                            >
                                <Text style={ styles.buttonLabel }>Submit</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View>
                            <TextInput
                              style={[styles.textInput]}
                              secureTextEntry={false}
                              placeholder="Enter your first name"
                              onChangeText={(text) => this.setState({firstName: text})}
                            />
                            <TextInput
                              style={[styles.textInput]}
                              secureTextEntry={false}
                              placeholder="Enter your last name"
                              onChangeText={(text) => this.setState({lastName: text})}
                            />
                            <TouchableOpacity
                                style={ [styles.button, styles.buttonPink] }
                                onPress={ () => this.registerUser( this.state.username, this.state.password, this.state.passwordRepeat, this.state.firstName, this.state.lastName ) }
                            >
                                <Text style={ styles.buttonLabel }>Submit</Text>
                            </TouchableOpacity>
                        </View>
                }

                <TouchableOpacity
                    style={ [styles.button, styles.buttonPink] }
                    onPress={ () => this.props.navigation.navigate( 'Login' ) }
                >
                    <Text style={ styles.buttonLabel }>Cancel</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default RegisterScreen;