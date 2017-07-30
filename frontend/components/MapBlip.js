import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

class MapBlip extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('FoodView', {providerId: this.props.provider._id})}>
        <View>
          <Image
            source={{uri: this.props.provider.imgURL}}
          />
          <Text>{this.props.provider.name}</Text>
          <Text>{this.props.provider.location}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default MapBlip;