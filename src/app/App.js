/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MyState          from '../component/MyState.js';
import MyStyle          from '../component/MyStyle.js';
import MyWidth          from '../component/MyWidth.js';
import MyFlexbox        from '../component/MyFlexbox.js';
import MyTextInput      from '../component/MyTextInput.js';
import MyTouch          from '../component/MyTouch.js';
import MyTouchDiy       from '../component/MyTouchDiy.js';
import MyScrollView     from '../component/MyScrollView.js';
import MyFlatList       from '../component/MyFlatList.js';
import MyUiComponents   from '../component/MyUiComponents.js';
import MySectionList    from '../component/MySectionList.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <MyUiComponents />
      </View>
    );
  }
}
        //<MyState />
        //<MyStyle />
        //<MyTextInput />
        //<MyFlexbox />
        //<MyTouch />
        //<MyTouchDiy />
        //<MyScrollView />
        //<MyFlatList />
        //<MySectionList />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
