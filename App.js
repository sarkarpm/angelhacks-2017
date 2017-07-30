import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './frontend/containers/Login';
import RegisterScreen from './frontend/containers/Register';
import MapScreen from './frontend/containers/MapView';

export default StackNavigator( {
    Map: {
        screen: MapScreen
    },
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    }
}, { initialRouteName: 'Map' } );
