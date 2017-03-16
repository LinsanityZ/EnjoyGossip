/**
 * Created by function on 2017/3/9.
 */
import React, {Component} from 'react';
//导入对应的页面文件
import Home from './Home'
import {
    StyleSheet,
    View,
    Text,
    Navigator
} from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let defaultName = 'Home';
        let defaultComponent = Home;
        return (
            /**
             * initialRoute：指定了默认的页面，也就是启动app之后会看到界面的第一屏。 需要填写两个参数: name 跟 component。
             * configureScene：页面之间跳转时候的动画和手势，具体请看官方文档
             * renderScene：导航栏可以根据指定的路由来渲染场景，调用的参数是路由和导航器
             */
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}/>
        );
    }
}
