import React from 'react';
import { MapView, Location } from 'expo';
import {
    View,
    Text
} from 'react-native';
import axios from 'axios';

export default class MapPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: []
        }
    }
    componentWillMount() {
        axios.get('http://localhost:3000/providers')
        // .then((res) => {
        //     console.log("PROVERS", res.data.providers)
        //     var newMap = res.data.providers.map(( provider ) => {
        //         console.log(Location.geocodeAsync(provider.location));
        //         return Location.geocodeAsync("1655 El Camino Real, San Mateo, CA 94402");
        //     });
        //     return newMap;
        // })
        .then(response => {
            console.log(Location.geocodeAsync("271 - 273 Baldwin Ave, San Mateo, CA 94401"))
            return response.data.providers.map((provider) => {
                return {
                    name: provider.name,
                    geocode: provider.geocode
                }
            })
        })
        .then(locationsArray => {
            console.log("RESPONSE", locationsArray);
            console.log("STATE", this.state);
            return this.setState({
                locations: locationsArray
            })
        })
        .then(res => {
            console.log("HERE", this.state);
        })
        .catch(err => console.log("ERROR: ", err))
    }

    render() {
        if (this.state.locations.length === 0) {
            return <Text>Loading...</Text>
        }
        else {
            return (
                <MapView
                    style={ { flex: 1 } }
                    initialRegion={{
                        latitude: this.state.locations[0].geocode.latitude,
                        longitude: this.state.locations[0].geocode.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                >
                    {this.state.locations.map((loc) => {
                        return <MapView.Marker
                            coordinate={loc.geocode}
                            title={loc.name}
                            description="Selling items!"
                        />
                    })}
                </MapView>
            );
        }
    }
}