import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

class MapMarker extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{
        height: 10,
        width: 10,
        borderRadius: 5,
        color: '#ED6300'
      }}>
      </View>
    )
  }
}

export default MapMarker;