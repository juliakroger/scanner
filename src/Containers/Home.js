import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';


class Home extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Scan  images</Text>
        <Button title="Camera" onPress={() => Actions.Camera()}/>
        <Button title="Photos" onPress={() => Actions.Photos()}/>
      </View>
    );
  };
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }

}

export default Home;
