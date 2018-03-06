import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{ padding: 10, width: '100%' }}>
        <TextInput
          style={ {height: 40} }
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={ (text) => {} }
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

