/**
 * Created by function on 2017/3/11.
 */
import React, {Component} from 'react';
import SecondPage from './SecondPage';
import TextButton from '../components/TextButton';
import {
    View,
    Text,
} from 'react-native';
export default class Home extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            id: 2,
            user: '',
        };
    }

    _onPress = () => {
        /**
         * 为什么这里可以取得 props.navigator?请看上面的App.js:
         * <Component {...route.params} navigator={navigator} />
         * 这里传递了navigator作为props
         */
        const {navigator} = this.props;

        if (navigator) {
            navigator.push({
                name: 'SecondPage',
                component: SecondPage,
                params: {
                    id: this.state.id,
                    /**
                     * 把getUser这个方法传递给下一个页面获取user
                     * @param user
                     */
                    getUser: (user) => {
                        this.setState({
                            user: user
                        })
                    }
                }
            })
        }
    };

    render() {
        const {user} = this.state;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                {user === '' && <Text>我是第一个界面</Text>}
                {user !== '' && <Text>用户信息: { JSON.stringify(user) }</Text>}
                <TextButton onPress={this._onPress} text={'点击跳转'}/>
            </View>
        );
    }
}