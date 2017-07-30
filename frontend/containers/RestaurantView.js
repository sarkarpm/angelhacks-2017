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


class RestaurantView extends React.Component {
    static navigationOptions = {
        title: 'RestaurantView'
    };

    constructor( props ) {
        super( props );
        this.state = {
            items: []
        }
    }

    deleteItem( item ) {
        axios.post( 'http://locolhost:3000/providers/' + this.props.navigation.state.params.id + "/delete-item",
            { itemId: item._id }
        );
    }

    addItem() {
        this.props.navigation.navigate( 'AddItem', {providerId: this.props.navigation.state.params.id} );
    }

    allAvailable() {
      console.log('making all products available');
    }

    componentWillMount() {
        axios.get( 'http://locolhost:3000/providers/' + this.props.navigation.state.params.id + '/items' )
            .then(( resp ) => {
              console.log("HERE FiRST", this.state);
                this.setState( { items: resp.data.provider.forSale }, () => {
                    console.log("STATE: ", this.state)
                })
            } )
            .catch(( err ) => {
                console.log( 'error getting items from food provider', err );
            } );
    }
    render() {
        if (this.state.items.length === 0) {
            return <Text>Loading...</Text>
        }
        else {
            console.log("STATE LOADED," ,this.state);
            return (
            <View style={ styles.foodView }>
                { this.state.items.map(( item, index ) => {
                    return <FoodItem
                        key={ index }
                        item={ item }
                        admin={ true }
                        function={ this.deleteItem.bind( this ) }
                    />
                } ) }
                <TouchableOpacity style={ styles.addButton } onPress={ this.addItem.bind( this ) }>+</TouchableOpacity>
            </View>
            )
        }
        
        return (
        <View style={ styles.foodView }>
          <TouchableOpacity style={ styles.allAvailable } onPress={ this.allAvailable.bind( this ) }>
            <Text style={{color: 'white'}}>Make all available now</Text>
          </TouchableOpacity>
            { this.state.items.length !== 0 && this.state.items.map(( item, index ) => {
                return <FoodItemRestView
                    key={ index}
                    providerId={this.props.navigation.state.params.id}
                    itemId={item._id}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                    unit={item.unit}
                    admin={ true }
                    function={ this.deleteItem.bind( this ) }
                />
            })}
            <TouchableOpacity style={ styles.addButtonRest } onPress={ this.addItem.bind( this ) }>
              <Text style={{color: 'white'}}>+</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

export default RestaurantView;
