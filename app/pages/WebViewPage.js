/**
 * Created by function on 2017/3/11.
 */
import React, {Component} from 'react';
import NavigatorBar from '../components/NavigatorBar'
import {
    View,
    WebView,
    StyleSheet
} from 'react-native';

export default class WebViewPage extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentDidMount() {

    }

    leftOnPress = () => {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    };

    render() {
        const {data} = this.props;
        const leftSource = require('../Images/back.png');
        return (
            <View style={styles.webView}>
                <NavigatorBar title={data.category} leftSource={leftSource} leftOnPress={this.leftOnPress}/>
                <WebView
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: data.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    onNavigationStateChange={this.onNavigationStateChange}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                    startInLoadingState={false}
                    scalesPageToFit={this.state.scalesPageToFit}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    webView: {
        flex: 1,
    }
});