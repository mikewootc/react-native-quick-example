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
    Slider,
    Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-root-toast';
import { NotificationsAndroid } from 'react-native-notifications';

export default class MyUiComponents extends Component {
    constructor() {
        super();
        this.state = {
            switchOn: false,
            checked: false,
            picked: 'picker',
            sliderValue: 0.3,
        }
    }

    alertMe() {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        );
    }

    render() {
        return(
            <ScrollView style={{width: '100%'}}>
                {/* Button & Toast */} 
                <View style={[styles.itemLineContainerLayout, styles.itemLineContainer]}>
                    <Text>Button</Text>
                    <Button
                        style={{}}
                        title="Show Toast"
                        onPress={() => {
                            Toast.show('Button pressed');
                        }}
                        color="#4080f0"
                        accessibilityLabel="Button's accessibilityLabel"
                    />
                </View>

                {/* Switch (bool开关) */}
                <View style={[styles.itemLineContainerLayout, styles.itemLineContainer]}>
                    <Text>Switch</Text>
                    <Switch
                        style={styles.itemLineContainer}
                        value={this.state.switchOn}
                        onValueChange={(value) => this.setState({switchOn: value})}
                    />
                </View>

                {/* Checkbox 复选框 */}
                <View style={[styles.itemLineContainerLayout, styles.itemLineContainer]}>
                    <Text>CheckBox</Text>
                    <CheckBox
                        style={{}}
                        value={this.state.checked}
                        onValueChange={(value) => this.setState({checked: value})}
                    />
                </View>

                {/* ActivityIndicator Loading圆圈 */}
                <View style={[styles.itemLineContainerLayout, styles.itemLineContainer]}>
                    <Text>ActivityIndicator</Text>
                    <ActivityIndicator
                        size='large'
                        animating={false /*需要true才能转动, 默认为true */ }
                    />
                </View>

                {/* Picker 选择器 */}
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

                {/* TextInput 输入框 */}
                <View style={[styles.itemLineContainer]}>
                    <TextInput
                        style={{width: '100%'}}
                        placeholder='TextInput'
                        onChangeText={(text) => {xxx}}
                    />
                </View>

                {/* Slider 滑动条 */}
                <View style={[styles.itemLineContainerLayout, styles.itemLineContainer]}>
                    <Text>Slider : {this.state.sliderValue}</Text>
                    <Slider
                        style={{width: 240}}
                        value={this.state.sliderValue}
                        onValueChange={(value) => this.setState({sliderValue: value})}
                    />
                </View>

                {/* Icon 图标 */}
                <View style={[styles.itemLineContainerLayout, styles.itemLineContainer]}>
                    <Text>Icon</Text>
                    <Icon name="rocket" size={30} color="#ace" />
                </View>

                {/* Icon Button 图标按钮 */}
                <Icon.Button name="rocket" backgroundColor="#48c" onPress={() => {
                    console.log('button pressed');
                    this.alertMe();
                }}>
                    Icon Button         Press to Alert
                </Icon.Button>

                <View style={[styles.itemLineContainerLayout, styles.itemLineContainer]}>
                    <Button
                        title="Notify"
                        onPress={() => {
                            console.log('NotificationsAndroid:', NotificationsAndroid);
                            NotificationsAndroid.localNotification({
                                title: 'Notification title',
                                body : 'This is notification data',
                                extra: 'This is extra'
                            });
                        }}
                    />
                </View>

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


