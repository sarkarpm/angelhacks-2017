import React from 'react';

import HomeScreen from './frontend/containers/UserHome'


import { StackNavigator } from 'react-navigation';
import LoginScreen from './frontend/containers/Login';
import RegisterScreen from './frontend/containers/Register';
// import RestaurantPreview from './frontend/containers/';

export default StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  }
  // Home: {
  //   screen: RestaurantPreview
  // }
}, {initialRouteName: 'Login'});

