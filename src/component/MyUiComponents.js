import React, { Component } from 'react';
import{ ScrollView, Image, Text, View, Switch } from 'react-native'

export default class MyUiComponents extends Component {
    constructor() {
        super();
        this.state = {
            switchOn: false,
        }
    }

    render() {
        return(
            <ScrollView>
                <Switch
                    style={{}}
                    value={this.state.switchOn}
                    onValueChange={(value) => this.setState({switchOn: value})}
                />
            </ScrollView>
        );
    }
}


