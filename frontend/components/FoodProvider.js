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
  Dimensions,
  AsyncStorage,
  Image
} from 'react-native';
import FoodItem from '../components/FoodItem';
import styles from '../styles.js';
import axios from 'axios';

class FoodProvider extends React.Component {
  static navigationOptions = {
    title: 'Food Provider'
  };

  constructor(props) {
    super(props);
    this.state = {
      provider: null
    }
  }

  componentWillMount() {
    axios.get('http://localhost:3000/providers/' + this.props.id)
    .then((resp) => {
      this.setState({provider: resp.data.provider})
    })
    .catch((err) => {
      console.log('error getting items from food provider', err);
    })
  }
  render() {
    return (
      <View style={styles.foodView}>
        {this.state.provider && <View>
          <Image source={{uri: this.state.provider.imgURL}} style={{height: 40, width: 40}}/>
          <Text>{this.state.provider.name}</Text>
          <Text>Address: {this.state.provider.location}</Text>
          <Text>Phone number: {this.state.provider.phone}</Text>
          <Text>{this.state.provider.description}</Text>
        </View>}
       {!this.state.provider && <Text>Loading...</Text>}
      </View>
    )
  }
}

export default FoodProvider;
