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
        title: 'FoodView'
    };

    constructor( props ) {
        super( props );
        this.state = {
            items: []
        }
    }

    addToCart(item) {
        this.props.navigation.navigate("Ticket", {item});
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
    return (
      <View style={ styles.foodView }>
          { this.state.items.map(( item, index ) => {
              return <FoodItem
                  key={ index }
                  item={ item }
                  admin={ false }
                  function={ this.addToCart.bind(this) }
              />
          } ) }
      </View>
    )
  }
}

export default FoodView;
