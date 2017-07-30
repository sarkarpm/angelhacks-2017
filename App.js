import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FoodView from './frontend/containers/FoodView';
import styles from './frontend/styles.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FoodView />
      </View>
    );
  }
}
