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
        this.props.navigation.navigate( 'AddItem' );
    }

    componentWillMount() {
        axios.get( 'http://locolhost:3000/providers/' + this.props.navigation.state.params.id + '/items' )
            .then(( resp ) => {
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
        
    }
}

export default RestaurantView;
