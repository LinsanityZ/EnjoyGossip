/**
 * Created by function on 2017/3/11.
 */
import React, {Component} from 'react';
import TextButton from '../components/TextButton';
import {
    View,
    Text,
} from 'react-native';

const USER = {
    1: {name: 'Action', age: 23},
    2: {name: 'Function', age: 25}
};

export default class SecondPage extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            id: '',
        };
    }

    componentDidMount() {
        /**
         *  这里获取从上个页面跳转传递过来的参数: id，赋值给this.state.id
         */
        this.setState({
            id: this.props.id
        })
    }

    _onPress = () => {
        const {navigator} = this.props;
        if (this.props.getUser) {
            let user = USER[this.props.id];
            this.props.getUser(user);
        }
        if (navigator) {
            /**
             * 感觉就像入栈出栈
             */
            navigator.pop();
        }
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 15}}>获得的参数: id={ this.state.id }</Text>
                <Text style={{color: 'red'}}>我是第二个界面</Text>
                <TextButton onPress={this._onPress} text={'点击跳回去'}/>
            </View>
        );
    }
}