import React from 'react';


import HomeScreen from './frontend/containers/UserHome'

import { StackNavigator } from 'react-navigation';
import LoginScreen from './frontend/containers/Login';
import RegisterScreen from './frontend/containers/Register';
import MapScreen from './frontend/containers/MapView';
import FoodView from './frontend/containers/FoodView';
import AllProviders from './frontend/containers/AllProviders';
import RestaurantPreview from './frontend/containers/UserHome';

import Ticket from './frontend/containers/Ticket';


export default StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  },
  FoodView: {
    screen: FoodView
  },
  AllProviders: {
    screen: AllProviders,
  },
  Home: {
    screen: RestaurantPreview
  },
  Map: {
    screen: MapScreen
  },
  Ticket: {
  	screen: Ticket
  }
}, {initialRouteName: 'Login'});
