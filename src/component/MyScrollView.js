import React, { Component } from 'react';
import{ ScrollView, Image, Text, View } from 'react-native'

export default class MyScrollView extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:36}}>Scroll me plz</Text>
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Text style={{fontSize:36}}>If you like</Text>
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Text style={{fontSize:36}}>Scrolling down</Text>
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Text style={{fontSize:36}}>What's the best</Text>
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Text style={{fontSize:36}}>Framework around?</Text>
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Image source={require('./MyScrollViewImg.jpg')} />
          <Text style={{fontSize:20}}>React Native</Text>
        </ScrollView>
    );
  }
}


