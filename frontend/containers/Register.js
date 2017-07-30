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

class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register'
  };
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordRepeat: '',
      firstName: "",
      lastName: ""
    }
  }
  registerUser(username, password, passwordRepeat, firstName, lastName) {
    if (passwordRepeat !== password) {
      Alert.alert(
        'Invalid Register',
        'Your passwords do not match. Please try again.',
        [{text: 'Dismiss Button'}] // Button
      )
    }
    else {
      axios.post('http://localhost:3000/register', {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName
      })
      .then(response => {
        console.log("Login response: ", response);
        this.props.navigation.navigate('Login');
      })
      .catch(err => console.log(err));
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleFont}>Register</Text>
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
        <TextInput
          style={[styles.textInput]}
          secureTextEntry={true}
          placeholder="Repeat your password"
          onChangeText={(text) => this.setState({passwordRepeat: text})}
        />
        <TouchableOpacity style={[styles.button, styles.buttonPink]} onPress={() => this.registerUser(this.state.username, this.state.password, this.state.passwordRepeat, this.state.firstName, this.state.lastName)}>
          <Text style={styles.buttonLabel}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonPink]} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.buttonLabel}>Cancel</Text>
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
export default RegisterScreen;