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
import FoodItem from '../components/FoodItem';
import styles from '../styles.js';
import axios from 'axios';

class FoodView extends React.Component {
  static navigationOptions = {
    title: 'Food View'
  };

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    console.log('NAVIGATION', this.props.navigation);
    axios.get('http://localhost:3000/providers/' + this.props.navigation.state.params.providerId + '/items')
    .then((resp) => {
      console.log('RESP', resp.data.provider);
      this.setState({items: resp.data.provider.forSale})
    })
    .catch((err) => {
      console.log('error getting items from food provider', err);
    })
  }
  render() {
    // var items = [{name: 'eggs', quantity: 10, unit: 'eggs', price: '0.50'},
    //              {name: 'soup', quantity: 20, unit: 'bowls', price: '1.00'}];
    return (
      <View style={styles.foodView}>
       {this.state.items.map((item, index) => {
         return <FoodItem key={index} name={item.name} quantity={item.quantity} unit={item.unit} price={item.price} />
       })}
      </View>
    )
  }
}

export default FoodView;
