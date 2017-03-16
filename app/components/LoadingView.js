/**
 * Created by function on 2017/3/14.
 */
import React, {Component} from 'react';

import {
    View,
    ActivityIndicator,
    Platform,
} from 'react-native';

export default class LoadingView extends Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator
                    size={Platform.OS === 'ios' ? "small" : "large"}
                    color="#348CEE"/>
            </View>
        );
    }
}
