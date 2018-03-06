import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
//    setInterval(() => {
//      this.setState(previousState => {
//        return { isShowingText: !previousState.isShowingText };
//      });
//    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}


export default class MyState extends Component {
  constructor(props) {
    super(props);

    this.state = {showingLines: 0};

    let _this = this;
    let outterTimer = setInterval(() => {
        if (_this.state.showingLines > 3) {
            _this.state.showingLines = 0;
        } else {
            _this.state.showingLines++;
        }

        console.log('timer lines:', this.state.showingLines);
        _this.setState(_this.state);
    }, 500);
  }

  render() {
    lstLines = [
        <Blink text='I love to blink' />,
        <Blink text='Yes blinking is so great' />,
        <Blink text='Why did they ever take this out of HTML' />,
        <Blink text='Look at me look at me look at me' />
    ];
    console.log('render lines:', this.state.showingLines);
    return (
      <View>
        {lstLines.slice(0, this.state.showingLines)}
      </View>
    );
  }
}

        //<Blink text='I love to blink' />
        //<Blink text='Yes blinking is so great' />
        //<Blink text='Why did they ever take this out of HTML' />
        //<Blink text='Look at me look at me look at me' />

//export default class MyState extends Component {
//  render() {
//    return (
//      <View>
//        <Blink text='I love to blink' />
//        <Blink text='Yes blinking is so great' />
//        <Blink text='Why did they ever take this out of HTML' />
//        <Blink text='Look at me look at me look at me' />
//      </View>
//    );
//  }
//}
