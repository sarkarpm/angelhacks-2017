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
  Modal,
  TouchableHighlight
} from 'react-native';
import styles from '../styles.js';
import axios from 'axios';

class FoodItemRestView extends React.Component {
  deleteItem(itemId) {
    console.log('provider id', this.props.providerId);
    axios.post('http://localhost:3000/providers/' + this.props.providerId + '/delete-items', {
      itemId: itemId
    })
    .then((resp) => {
      console.log('deleting items');
      console.log('deleted', resp);
    })
    .catch((err) => {
      console.log('error deleting items', err);
    })
  }

  render() {
    console.log('props', this.props);
    return (
      <View style={styles.foodItem}>
        {this.props.quantity !== '0' ?
        <View>
          <Text>Item: {this.props.name}</Text>
          <Text>Quantity: {this.props.quantity} {this.props.unit}</Text>
          <Text>Price per item: ${this.props.price}</Text>
          <TouchableOpacity style={styles.x} onPress={() => this.deleteItem(this.props.itemId)}><Text style={{color: '#9e9e9e'}}>x</Text></TouchableOpacity>
        </View> :
        <View>
          <Text>Item: {this.props.name}</Text>
          <Text>Price per item: ${this.props.price}</Text>
        <View style={styles.soldOutRest}><Text style={{color: 'white'}}>Sold out</Text></View>
        <TouchableOpacity style={styles.x1} onPress={() => this.deleteItem(this.props.key)}><Text style={{color: '#9e9e9e'}}>x</Text></TouchableOpacity>
      </View>}
      </View>
    )
  }
}

export default FoodItemRestView;
