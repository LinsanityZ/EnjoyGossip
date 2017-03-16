/**
 * Created by function on 2017/3/14.
 */
import React, {Component} from 'react';
import * as actions from '../actions/newsActions'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import WebViewPage from '../pages/WebViewPage'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Navigator,
    Dimensions,
    Platform,
    TouchableOpacity,
    ListView,
    ActivityIndicator,
    RefreshControl
} from 'react-native';

const {maxHeight, maxWidth} = Dimensions.get('window');

class NewsPage extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态

        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2,}),
        };
    }

    componentDidMount() {
        const {actions, type, typeKey} = this.props;
        actions.isRefresh(typeKey);
        actions.fetchNewsData(type, typeKey);
    }

    shouldComponentUpdate( nextProps, nextState) {
        const {news, typeKey} = this.props;
        console.log(news[typeKey] === nextProps.news[typeKey]);
        return news[typeKey] === nextProps.news[typeKey];
    }

    _onPress = (data) => {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'WebViewPage',
                component: WebViewPage,
                params: {
                    data: data
                }
            })
        }
    };

    _renderRow = (data) => {
        return (
            <TouchableOpacity onPress={() => this._onPress(data)}>
                <View style={styles.content}>
                    <View style={styles.imgView}>
                        <Image
                            style={styles.img}
                            source={{uri: data.thumbnail_pic_s}}/>
                    </View>
                    <View style={styles.rightView}>
                        <Text style={styles.title}>{data.title}</Text>
                        <View style={styles.author}>
                            <Text style={{color: 'darkgrey'}}>作者：{data.author_name}</Text>
                            <Text style={{color: 'darkgrey'}}>{data.date}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    _onRefresh = () => {
        const {actions, type, typeKey} = this.props;
        actions.isRefresh(typeKey);
        actions.fetchNewsData(type,typeKey);
    };

    render() {
        const {news, typeKey} = this.props;
        console.log('render', typeKey);
        return (
            <ListView
                initialListSize={1}
                enableEmptySections={true}
                dataSource={this.state.dataSource.cloneWithRows(news[typeKey].data)}
                renderRow={this._renderRow}
                refreshControl={
                    <RefreshControl
                        refreshing={news[typeKey].isRefresh}
                        onRefresh={this._onRefresh}
                        enabled={!news[typeKey].isRefresh}
                        colors={['#348CEE', '#ff0000', '#0000ff']}
                        title= {news[typeKey].isRefresh ? '刷新中....':'下拉刷新'}
                    />}
            />
        );
    }
}
const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        margin: 5,
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderColor: '#CCCCCC'
    },
    imgView: {
        width: 150,
        height: 100,

    },
    img: {
        width: 150,
        height: 100,
    },
    rightView: {
        flex: 1,
        paddingLeft: 10,
        // backgroundColor: 'red'
    },
    title: {
        fontSize: 18,
        color: '#000',
    },
    author: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'flex-end',
        right: 0,
    }
});

function mapStateToProps(state) {
    return {
        news: state.news
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
