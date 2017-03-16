/**
 * Created by function on 2017/3/11.
 */
import React, {Component} from 'react';
import SecondPage from '../pages/WebViewPage';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/newsActions';
import {connect} from 'react-redux';
import NavigatorBar from '../components/NavigatorBar';
import JokePage from '../pages/NewsPage'
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import {
    StyleSheet,
    Dimensions,
    View,
    Text,
} from 'react-native';

const {maxHeight, maxWidth} = Dimensions.get('window');

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

    render() {
        // const {user} = this.state;
        return (
            <View style={{flex: 1}}>
                <NavigatorBar title="郑金辉"/>
                <ScrollableTabView
                    locked={true}
                    renderTabBar={() => <ScrollableTabBar/>}
                    tabBarActiveTextColor="#348CEE"
                    tabBarUnderlineStyle={{backgroundColor: "#348CEE", height: 2}}>
                    <JokePage typeKey="0" type='top' {...this.props} tabLabel='头条'/>
                    <JokePage typeKey="1" type='shehui' {...this.props} tabLabel='社会'/>
                    <JokePage typeKey="2" type='guonei' {...this.props} tabLabel='国内'/>
                    <JokePage typeKey="3" type='guoji' {...this.props} tabLabel='国际'/>
                    <JokePage typeKey="4" type='yule' {...this.props} tabLabel='娱乐'/>
                    <JokePage typeKey="5" type='tiyu' {...this.props} tabLabel='体育'/>
                    <JokePage typeKey="6" type='junshi' {...this.props} tabLabel='军事'/>
                    <JokePage typeKey="7" type='keji' {...this.props} tabLabel='科技'/>
                    <JokePage typeKey="8" type='caijing' {...this.props} tabLabel='财经'/>
                    <JokePage typeKey="9" type='shishang' {...this.props} tabLabel='时尚'/>
                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topBar: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: maxWidth,
        backgroundColor: '#348CEE',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});


// function select (store) {
//     return {
//         counter: store.counter
//     }
// }
//
// function mapStateToProps(state) {
//     return {
//         counter: state.counter
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Home);

