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
import styles from '../styles.js';

class FoodItem extends React.Component {
    render() {
        const admin = this.props.admin;
        const item = this.props.item;
        return (
            <View style={ styles.foodItem }>
                <Text>Item: { item.name }</Text>
                <Text>Quantity: { item.quantity } { item.unit }</Text>
                <Text>Price per item: ${ item.price }</Text>
                { 
                    <TouchableOpacity style={ styles.addButton } onPress={ () => this.props.function(item) }>
                        <View><Text style={ { color: admin ? 'red' : 'white' } }>{admin ? "X" : "+"}</Text></View>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}

export default FoodItem;
