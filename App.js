import React from 'react';
import HomeScreen from './frontend/containers/UserHome'
import { StackNavigator } from 'react-navigation';
import LoginScreen from './frontend/containers/Login';
import RegisterScreen from './frontend/containers/Register';
import FoodView from './frontend/containers/FoodView';
import AllProviders from './frontend/containers/AllProviders';

export default StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  },
  "Food View": {
    screen: FoodView
  },
  "All Providers": {
    screen: AllProviders
  }
  // Home: {
  //   screen: RestaurantPreview
  // }
}, {initialRouteName: 'Login'});
