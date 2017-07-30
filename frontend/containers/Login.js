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


class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: ""
    }
  }
  loginUser(username, password) {
    axios.post('http://localhost:3000/login', {
        username: username,
        password: password
    })
    .then(response => {
      //console.log("Login response: ", response.data);
      this.setState({firstName: response.data.firstName});
      this.setState({lastName: response.data.lastName});
      return AsyncStorage.setItem('user', JSON.stringify({
          username: username,
          password: password
        })
      )
    })
    .then(() => this.props.navigation.navigate('Home', {firstName: this.state.firstName}))
    .catch(err => {
      Alert.alert(
          'Invalid Login',
          'Your username or password is incorrect. Register or try again',
          [{text: 'Dismiss Button'}] // Button
        )
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleFont}>Welcome</Text>
        <TextInput
          style={[styles.textInput]}
          placeholder="Enter your username"
          onChangeText={(text) => this.setState({username: text})}
        />
        <TextInput
          style={[styles.textInput]}
          secureTextEntry={true}
          placeholder="Enter your password"
          onChangeText={(text) => this.setState({password: text})}
        />
        <TouchableOpacity style={[styles.button, styles.button]} onPress={() => this.loginUser(this.state.username, this.state.password)}>
          <Text style={styles.buttonLabel}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.button]} onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.buttonLabel}>Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  titleFont: {
    color: 'black',
    fontSize: 32,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Avenir',
    fontWeight: 'bold'
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
    fontWeight: 'bold',
    fontSize: 20
  },
  fontMessage: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7FDBD3'
  }
});


export default LoginScreen;