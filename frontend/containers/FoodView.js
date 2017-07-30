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
import styles from '../foodStyles.js';
import axios from 'axios';

var prov; 

class FoodView extends React.Component {
  static navigationOptions = {
    title: 'Food For Grabs'
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      provider: '',
      name: ''
    }
  }


  alertMe(name, quantity, price, unit, itemId) {
    var provider = this.state.provider;
    var userId = this.props.navigation.state.params.userId;
    Alert.alert(
      `Order: one ${name} from ${provider.name}`,
      'Are you sure you want to place this order?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancelled')},
        {text: 'OK', onPress: () => {
        axios.post('http://localhost:3000/newOrder', {
          userId: userId,
          provider: provider,
          name: name,
          quantity: 1,
          price: price,
          unit: unit
        })
        .then((resp) => {
          return axios.get(('http://localhost:3000/providers/' + itemId + '/remove-item'), {
            itemId: itemId
          })
        })
        .then(resp1 => {
            console.log('DONE BITCHHHH2', resp1)
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
        this.setState({
            items: resp.data.provider.forSale,
            provider: resp.data.provider,
            name: resp.data.provider.name
        }, () => {
            console.log("DONE");
        });
    })
    .catch((err) => {
        console.log('error getting items from food provider', err);
    })
  }
  render() {

    // var items = [{name: 'eggs', quantity: 10, unit: 'eggs', price: '0.50'},
    //              {name: 'soup', quantity: 20, unit: 'bowls', price: '1.00'}];
   
      

    if (this.state.items.length === 0) {
        return <Text style={styles.noItems}>No Items</Text>
    }
    else {
        console.log("ITEMS", this.state.items)
        return (
          <View style={styles.foodView}>

          <Text style={styles.providerTitle}>{this.state.name}</Text>
          <View>
           {this.state.items.map((item) => {
             return <FoodItem key={item._id} itemId={item._id} alertMe={this.alertMe.bind(this)} name={item.name} quantity={item.quantity} unit={item.unit} price={item.price} />
           })}
          </View>
        </View>

        )
    }
  }
}

export default FoodView;
