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

class FoodItemRestView extends React.Component {

  render() {
    return (
      <View style={styles.foodItem}>
        {this.props.quantity !== '0' ? <View><Text>Item: {this.props.name}</Text>
        <Text>Quantity: {this.props.quantity} {this.props.unit}</Text>
        <Text>Price per item: ${this.props.price}</Text></View> :
        <View><Text>Item: {this.props.name}</Text>
        <Text>Price per item: ${this.props.price}</Text>
        <View style={styles.soldOutRest}><Text style={{color: 'white'}}>Sold out</Text></View></View>}
      </View>
    )
  }
}

export default FoodItemRestView;
