import React from 'react';
import HomeScreen from './frontend/containers/UserHome'
import { StackNavigator } from 'react-navigation';
import LoginScreen from './frontend/containers/Login';
import RegisterScreen from './frontend/containers/Register';
import MapScreen from './frontend/containers/MapView';
import RestaurantPreview from './frontend/containers/UserHome';

export default StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  },
  Home: {
    screen: RestaurantPreview
  },
  Map: {
    screen: MapScreen
  }
}, {initialRouteName: 'Map'});

