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

class FoodView extends React.Component {
  render() {
    var items = [{name: 'eggs', quantity: 10, unit: 'eggs', price: '0.50'},
                 {name: 'soup', quantity: 20, unit: 'bowls', price: '1.00'}];
    return (
      <View style={styles.foodView}>
       {items.map((item, index) => {
         return <FoodItem key={index} name={item.name} quantity={item.quantity} unit={item.unit} price={item.price} />
       })}
      </View>
    )
  }
}

export default FoodView;
