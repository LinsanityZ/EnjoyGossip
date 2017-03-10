/**
 * Created by function on 2017/3/9.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

/**
 * 简单封装一个Button
 * text：显示的内容
 * onPress：回调
 */
export default class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {text, onPress} = this.props;

        return (
            <View>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text>{text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    }
});