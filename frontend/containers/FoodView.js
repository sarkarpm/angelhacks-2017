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

var prov; 

class FoodView extends React.Component {
  static navigationOptions = {
    title: 'Food View'
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      provider: ''
    }
  }


  alertMe(name, quantity, price, unit, itemId) {
    var provider = this.state.provider
    console.log('JUSTIN BIEBER', provider)
    Alert.alert(
      `Order: one ${name} from ${provider.name}`,
      'Are you sure you want to place this order?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancelled')},
        {text: 'OK', onPress: () => {
          axios.post(('http://localhost:3000/providers/' + this.props.navigation.state.params.providerId + '/remove-item'), {
            itemId: itemId
          })
          .then((resp) => {
             console.log("ITEM WORKED", resp.data.item)
          })
          .catch((err) => {
            console.log('error getting items from food provider', err);
          })
          this.props.navigation.navigate('Ticket', {foodName: name, quantity: 1, price: price, units: unit, provider: provider})
        } 
        },
      ],
      { cancelable: false }
    )
  }

  componentWillMount() {

    axios.get('http://localhost:3000/providers/' + this.props.navigation.state.params.providerId + '/items')
    .then((resp) => {
      console.log('RESP', resp.data.provider);
      this.setState({items: resp.data.provider.forSale, provider: resp.data.provider})
        console.log("UIREGHAUIRGU", this.state.provider)

    })
    .catch((err) => {
        console.log('error getting items from food provider', err);
    })
  }
  render() {

    // var items = [{name: 'eggs', quantity: 10, unit: 'eggs', price: '0.50'},
    //              {name: 'soup', quantity: 20, unit: 'bowls', price: '1.00'}];
    return (
      

    if (this.state.items.length === 0) {
        return <Text>Loading...</Text>
    }
    else {
        console.log("ITEMS", this.state.items)
        return (
          <View style={styles.foodView}>
       {this.state.items.map((item, index) => {
         return <FoodItem key={index} alertMe={this.alertMe.bind(this)} name={item.name} quantity={item.quantity} unit={item.unit} price={item.price} itemId={item._id} />
       })}
      </View>
        )
    }
  }
}

export default FoodView;
