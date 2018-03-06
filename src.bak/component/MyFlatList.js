import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    lstData = [];
    for (var i = 0; i < 30; i++) {
      lstData.push( {key: 'Hello ' + i} );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={ lstData }
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// vim: set ts=2 sw=2:
