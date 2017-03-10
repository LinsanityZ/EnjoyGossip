/**
 * Created by function on 2017/3/9.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Button from '../components/Button';
import * as counterActions from '../actions/counterActions';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
// @connect(
//     state => ({
//         state: state.counter
//     }), {counterActions})
class CounterApp extends Component {

    constructor(props) {
        super(props);
    }

    onAdd = () => {
        const {counterActions} = this.props;
        counterActions.increment()
    };

    onDel = () => {
        const {counterActions} = this.props;
        counterActions.decrement()
    };

    render() {
        const {counter} = this.props;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{counter.count}</Text>
                <Button onPress={this.onAdd} text={'add'}/>
                <Button onPress={this.onDel} text={'del'}/>
            </View>
        );
    }
}

// function select (store) {
//     return {
//         counter: store.counter
//     }
// }

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        counterActions: bindActionCreators(counterActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);