import React, { Component } from 'react';
import{ 
    StyleSheet, 
    View, 
    Text, 
    Button, 
    Image, 
    ScrollView, 
    Switch,
    CheckBox,
    TextInput,
    Picker,
    ActivityIndicator,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MyUiComponents extends Component {
    constructor() {
        super();
        this.state = {
            switchOn: false,
            checked: false,
            picked: 'picker',
        }
    }

    render() {
        return(
            <ScrollView style={{width: '100%'}}>
                <View style={[styles.itemLineContainerLayout, styles.itemLineContainer]}>
                    <Text>Button</Text>
                    <Button
                        style={{}}
                        title="Button"
                        onPress={() => {}}
                        color="#4080f0"
                        accessibilityLabel="Button's accessibilityLabel"
                    />
                </View>


                <View style={[styles.itemLineContainerLayout, styles.itemLineContainer]}>
                    <Text>Switch</Text>
                    <Switch
                        style={styles.itemLineContainer}
                        value={this.state.switchOn}
                        onValueChange={(value) => this.setState({switchOn: value})}
                    />
                </View>

                <View style={[styles.itemLineContainerLayout, styles.itemLineContainer]}>
                    <Text>CheckBox</Text>
                    <CheckBox
                        style={{}}
                        value={this.state.checked}
                        onValueChange={(value) => this.setState({checked: value})}
                    />
                </View>

                <View style={[styles.itemLineContainerLayout, styles.itemLineContainer]}>
                    <Text>ActivityIndicator</Text>
                    <ActivityIndicator
                        size='large'
                    />
                </View>

                <View style={styles.itemLineContainer}>
                    <Picker
                        selectedValue={this.state.picked}
                        onValueChange={(value) => this.setState({picked: value})}
                        mode={'dropdown'}
                    >
                        <Picker.Item label="Picker" value="picker" />
                        <Picker.Item label="React xxxxxxxxxxxxxxx" value="react" />
                        <Picker.Item label="Native ^_^" value="native" />
                    </Picker>
                </View>

                <View style={[styles.itemLineContainer]}>
                    <TextInput
                        style={{width: '100%'}}
                        placeholder='TextInput'
                        onChangeText={(text) => {xxx}}
                    />
                </View>

                <View style={[styles.itemLineContainerLayout, styles.itemLineContainer]}>
                    <Text>Icon</Text>
                    <Icon name="rocket" size={30} color="#ace" />
                </View>

                <Icon.Button name="rocket" backgroundColor="#48c" onPress={() => {console.log('button pressed');}}>
                    Icon Button
                </Icon.Button>

            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    itemLineContainerLayout: {
        flexDirection: 'row', /* row, column */
        justifyContent: 'space-between',  /* flex-start, center, flex-end, space-around, space-between */
        alignItems: 'center', /* flex-start, center, flex-end, stretch */
    },
    itemLineContainer: {
        backgroundColor: '#bbccdd',
        margin: 2,
        backgroundColor: '#ddeeff',
        borderWidth: 1,
        borderColor: '#bbccdd',
        borderRadius: 5,
    },
    red: {
        color: 'red',
    },
});


