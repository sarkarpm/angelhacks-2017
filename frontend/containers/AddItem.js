import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
  Dimensions
} from 'react-native';
import styles from '../styles.js';
import axios from 'axios';

const win = Dimensions.get('window');

class AddItems extends React.Component {
  static navigationOptions = {
    title: 'AddItems'
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
      unit: '',
      price: '',
      description: '',
      store: ''
    }
  }

  componentDidMount() {
    // axios.post('http://localhost:3000/providers/' + '597d6184452eaf28eaa797a2' + '/new-item', {
    //   name: this.state.name,
    //   quantity: this.state.quantity,
    //   unit: this.state.unit,
    //   price: this.state.price,
    //   description: this.state.description,
    //   store: '597d6184452eaf28eaa797a2'
    // })
    // .then((resp) => {
    //   console.log('RESP', resp.data.response);
    //   this.setState({items: resp.data.provider.forSale})
    // })
    // .catch((err) => {
    //   console.log('error posting items to food provider page', err);
    //})
  }

  onPressCancel(e) {
    e.preventDefault();
    console.log('CANCELLED');
  }

  onPressSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:3000/providers/' + this.props.navigation.state.params.providerId + '/new-item', {
      name: this.state.name,
      quantity: this.state.quantity,
      unit: this.state.unit,
      price: this.state.price,
      description: this.state.description,
      store: this.props.navigation.state.params.providerId
    })
    .then((resp) => {
      console.log('RESP', resp.data.response);
      console.log('SUBMITTED');
      this.props.navigation.navigate('RestaurantView', {id: this.props.navigation.state.params.providerId});
    })
    .catch((err) => {
      console.log('error posting items to food provider page', err);
    })
  }

  render() {
    return (
      <View style={styles.foodView}>
        <TextInput
        style={styles.inputField}
        onChangeText={(name) => this.setState({name})}
        placeholder="Item name"
        value={this.state.name}
        />
        <TextInput
        style={styles.inputField}
        onChangeText={(quantity) => this.setState({quantity})}
        placeholder="Quantity"
        value={this.state.quantity}
        />
        <TextInput
        style={styles.inputField}
        onChangeText={(unit) => this.setState({unit})}
        placeholder="Unit"
        value={this.state.unit}
        />
        <TextInput
        style={styles.inputField}
        onChangeText={(price) => this.setState({price})}
        placeholder="Price per unit"
        value={this.state.price}
        />
        <TextInput
        style={styles.inputField}
        onChangeText={(description) => this.setState({description})}
        placeholder="Item description"
        value={this.state.description}
        />
        <Button
        onPress={(e) => this.onPressCancel(e)}
        title="Cancel"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={(e) => this.onPressSubmit(e)}
          title="Submit"
          color="#841584"
        />
      </View>
    )
  }
}

export default AddItems;
