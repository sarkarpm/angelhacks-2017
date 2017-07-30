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
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import axios from 'axios';


class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login'
    };
    constructor( props ) {
        super( props );
        this.state = {
            username: "",
            password: ""
        }
    }
    loginUser( username, password ) {
        console.log("USR", username);
        console.log("USR", password);

        axios.post( 'http://localhost:3000/login', {
            username: this.state.username,
            password: this.state.password
        } )
        .then( response => {
            console.log("RESPONSE", response);
            if (! response.data.firstName) {
                console.log("SUCCESS");
                this.props.navigation.navigate('RestaurantView', {name: response.data.name, id: response.data.providerId});
            }
            else {
                this.props.navigation.navigate('Home', {firstName: response.data.firstName, lastName: response.data.lastName, userId: response.data.userId, user: response.data.user} );
            }
        } )
        .catch( err => {
            Alert.alert(
                'Invalid Login',
                'Your username or password is incorrect. Register or try again',
                [{ text: 'Dismiss Button' }] // Button
            )
        } );
    }
    render() {
        return (
            <View style={ [styles.container] }>
                <Text style={ [styles.titleFont, {fontFamily: 'Avenir', fontWeight: 'bold'}] }>Welcome</Text>
                <TextInput
                    style={ [styles.textInput, {fontFamily: 'Avenir'}] }
                    placeholder="Enter your username"
                    onChangeText={ ( text ) => this.setState( { username: text } ) }
                />
                <TextInput
                    style={ [styles.textInput, {fontFamily: 'Avenir'}] }
                    secureTextEntry={ true }
                    placeholder="Enter your password"
                    onChangeText={ ( text ) => this.setState( { password: text } ) }
                />
                <TouchableOpacity style={ [styles.button, styles.button] } onPress={ () => this.loginUser( this.state.username, this.state.password ) }>
                    <Text style={ [styles.buttonLabel, {fontFamily: 'Avenir'}] }>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ [styles.button, styles.button] } onPress={ () => this.props.navigation.navigate( 'Register', { admin: false } ) }>
                    <Text style={ [styles.buttonLabel, {fontFamily: 'Avenir'}] }>Register User</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ [styles.button, styles.button] } onPress={ () => this.props.navigation.navigate( 'Register', { admin: true } ) }>
                    <Text style={ [styles.buttonLabel, {fontFamily: 'Avenir'}] }>Register Restaurant</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create( {
    titleFont: {
        color: 'black',
        fontSize: 32,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    textBig: {
        fontSize: 36,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    },
    button: {
        alignSelf: 'stretch',
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        backgroundColor: '#649BE5'
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    },
    textInput: {
        height: 40,
        backgroundColor: 'white',
        borderColor: '#39393A',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        padding: 10
    },
    list: {
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#013489',
        borderRadius: 5,
        padding: 5,
        margin: 5
    },
    listFont: {
        margin: 3,
        borderRadius: 5,
        paddingLeft: 15,
        color: 'white'
    },
    fontUsers: {
        padding: 15
    },
    fontHeader: {
        //fontWeight: 'bold',
        fontSize: 20
    },
    fontMessage: {
        fontSize: 26,
        //fontWeight: 'bold',
        color: '#7FDBD3'
    }
} );


export default LoginScreen;
