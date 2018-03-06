import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';


export default class MyFlexbox extends Component {
  render() {
    return (
      <View style={{
        width:200,
        flexDirection: 'row',            /* 布局的主轴: row or column */
        justifyContent: 'space-between', /* 子元素沿着主轴的排列方式: flex-start / center / flex-end / space-around / space-between */
        alignItems: 'flex-start',        /* 子元素沿着次轴的排列方式: flex-start / center / flex-end / stretch(延展充满次轴) */
      }}>
        <View style={{width: 25, height: 25, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 25, height: 25, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};


