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
import styles from '../foodStyles.js';

class FoodItem extends React.Component {

  render() {
    return (
      <View style={styles.foodItem}>
        <Text>Item: {this.props.name}</Text>
        {this.props.quantity === '0'? null : <Text>Quantity: {this.props.quantity} {this.props.unit}</Text>}
        <Text>Price per item: ${this.props.price}</Text>
        {this.props.quantity === '0' ?
          <View style={styles.soldOutUser}><Text style={{color: 'white'}}>Sold out</Text></View> :
          <TouchableOpacity style={styles.addButton} onPress={() => this.props.alertMe(this.props.name, this.props.quantity, this.props.price, this.props.unit, this.props.itemId)}>
            <View><Text style={{color: 'white'}}>+</Text></View>
          </TouchableOpacity>
        }
      </View>
    )
  }
}

export default FoodItem;
