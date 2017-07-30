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

const TEST_RESTAURANT_ID = "597d30f9cbe8a8262bb1d206";

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
        axios.post( 'http://locolhost:3000/providers/' + TEST_RESTAURANT_ID + "/delete-item",
            { itemId: item._id }
        );
    }

    addItem() {
        this.props.navigation.navigate( 'AddItem' );
    }

    componentDidMount() {
        axios.get( 'http://locolhost:3000/providers/' + TEST_RESTAURANT_ID + '/items' )
            .then(( resp ) => {
                this.setState( { items: resp.data.provider.forSale } )
            } )
            .catch(( err ) => {
                console.log( 'error getting items from food provider', err );
            } );
    }
    render() {
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

export default RestaurantView;
