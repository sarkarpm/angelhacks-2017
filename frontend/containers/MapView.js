import React from 'react';
import { MapView, Location } from 'expo';
import {
    View,
    Text
} from 'react-native';
import axios from 'axios';

class MapScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: []
        }
    }
    componentWillMount() {
        console.log("MOUNTING MAP")
        axios.get('http://localhost:3000/providers')
        .then(response => {
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
            return <Text>MAPPING</Text>
        }
        else {
            return (
                <View>
                    <Button title="View Map" onPress={() => this.props.navigation.navigate('Map')} />
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
                </View>
            );
        }
    }
}

export default MapScreen;