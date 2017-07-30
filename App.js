import React from 'react';
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
}, {initialRouteName: 'Login'});
