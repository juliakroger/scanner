import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';

class Cam extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Cam</Text>
        </View>
      );
    }
  }



  export default Cam;
