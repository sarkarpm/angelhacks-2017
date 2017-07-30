import React from 'react';
import { MapView, Location } from 'expo';
import {
    View
} from 'react-native';
import axios from 'axios';

export default class MapPage extends React.Component {
    render() {
        let providersLocs = axios.get( 'http://localhost:3000/providers' )
            .then(( res ) => {
                return res.providers.map(( provider ) => {
                    return Location.geocodeAsync( provider.location );
                } );
            } )
            .catch(( err ) => {
                console.log( 'ERROR', err );
            } );
        providersLocs = Promise.all( providersLocs );
        return (
            <MapView
                style={ { flex: 1 } }
                initialRegion={ providersLocs[0] }
            >
                { providersLocs.map(( loc ) => {
                    return <MapView.Marker coordinate={ loc } />
                } ) }
            </MapView >
        );
    }
}
