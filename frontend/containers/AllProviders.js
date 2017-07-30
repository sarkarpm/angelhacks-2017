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
  AsyncStorage
} from 'react-native';
import FoodProvider from '../components/FoodProvider';
import styles from '../styles.js';
import axios from 'axios';


class AllProviders extends React.Component {
  static navigationOptions = {
    title: 'All Providers'
  };

  constructor(props) {
    super(props);
    this.state = {
      foodProviders: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:3000/providers/')
    .then((resp) => {
      this.setState({foodProviders: resp.data.providers})
    })
    .catch((err) => {
      console.log('error getting items from food provider', err);
    })
  }

  render() {
    return (
      <View style={styles.foodView}>
       {this.state.foodProviders && this.state.foodProviders.map((provider, index) => {
         return <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('Food View', {providerId: provider._id})}>
           <FoodProvider key={index} id={provider._id} />
         </TouchableOpacity>
       })}
      </View>
    )
  }
}

export default AllProviders;
