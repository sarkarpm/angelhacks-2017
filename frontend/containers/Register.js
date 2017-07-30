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
            username: "",
            password: "",
            passwordRepeat: '',
            location: ''
        }
    }
    registerUser( username, password, passwordRepeat ) {
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
                password: password
            } )
                .then( response => {
                    console.log( "Login response: ", response );
                    this.props.navigation.navigate( 'Login' );
                } )
                .catch( err => console.log( err ) );
        }
    }
    registerRestaurant( username, password, passwordRepeat, location ) {
        if ( passwordRepeat !== password ) {
            Alert.alert(
                'Invalid Register',
                'Your passwords do not match. Please try again.',
                [{ text: 'Dismiss Button' }] // Button
            )
        }
        else {
            Location.geocodeAsync( location )
                .then( loc => {
                    return axios.post( 'http://localhost:3000/providers', {
                        name: username,
                        password: password,
                        type: 'restaurant',
                        geocode: loc
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
                        <div>
                            <TextInput
                                style={ [styles.textInput] }
                                secureTextEntry={ true }
                                placeholder="Pickup Address"
                                onChangeText={ ( text ) => this.setState( { location: text } ) }
                            />
                            <TouchableOpacity
                                style={ [styles.button, styles.buttonPink] }
                                onPress={ () => this.registerRestaurant( this.state.username, this.state.password, this.state.passwordRepeat, this.state.location ) }
                            >
                                <Text style={ styles.buttonLabel }>Submit</Text>
                            </TouchableOpacity>
                        </div>
                        :
                        <TouchableOpacity
                            style={ [styles.button, styles.buttonPink] }
                            onPress={ () => this.registerUser( this.state.username, this.state.password, this.state.passwordRepeat ) }
                        >
                            <Text style={ styles.buttonLabel }>Submit</Text>
                        </TouchableOpacity>
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