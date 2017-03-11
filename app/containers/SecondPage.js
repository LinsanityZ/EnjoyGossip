/**
 * Created by function on 2017/3/11.
 */
import React, {Component} from 'react';
import TextButton from '../components/TextButton';
import {
    View,
    Text,
} from 'react-native';
export default class SecondPage extends Component {

    _onPress = () => {
        const { navigator } = this.props;
        if(navigator) {
            /**
             * 感觉就像入栈出栈
             */
            navigator.pop();
        }
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'red'}}>我是第二个界面</Text>
                <TextButton onPress={this._onPress} text={'点击跳回去'}/>
            </View>
        );
    }
}