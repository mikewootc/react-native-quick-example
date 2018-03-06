import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class MyWidth extends Component {
  render() {
    return (
      <View>
        <View style={{width: 25, height: 25, backgroundColor: 'steelblue'}} />

        <View style={{height: 50}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </View>

      </View>
    );
  }
}

