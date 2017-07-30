import React from 'react';
import { MapView, Location } from 'expo';
import {
    View,
    Text,
    Button
} from 'react-native';
import axios from 'axios';
import MapBlip from '../components/MapBlip';
import MapMarker from '../components/MapMarker';

class MapScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: []
        }
    }
    componentWillMount() {
        axios.get('http://localhost:3000/providers')
        .then(response => {
            console.log("RESPONSE", response.data.providers);
            console.log("STATE", this.state);
            this.setState({
                locations: response.data.providers
            })
        })
        .then(res => {
            console.log("HERE", this.state.locations);
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
                        console.log("lOC", loc);
                        return <MapView.Marker
                                coordinate={loc.geocode}
                                title={loc.name}
                                description={loc.location}
                                onCalloutPress={() => this.props.navigation.navigate('FoodView', {providerId: loc._id})}
                            >
                                  
                            </MapView.Marker>
                    })}
                </MapView>
            );
        }
    }
}

export default MapScreen;