/**
 * Created by function on 2017/3/14.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    Platform,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

const {maxHeight, maxWidth} = Dimensions.get('window');

export default class Home extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        /**
         * leftSource: 左边图标所需的图片地址，
         * leftOnPress：左边图标点击事件
         * title： 标题，
         * titleOnPress：标题的点击事件，
         * rightSource：右边图标所需的图片地址，
         * rightOnPress：右边跳的点击事件
         */
        const {leftSource, title, rightSource, leftOnPress, rightOnPress, titleOnPress} = this.props;
        return (
            <View style={styles.bar}>
                <View style={styles.leftItem}>
                    <TouchableOpacity onPress={leftOnPress}>
                        {leftSource && <Image style={styles.icon} source={leftSource}/>}
                    </TouchableOpacity>
                </View>
                <View style={styles.title}>
                    <TouchableOpacity onPress={titleOnPress}>
                        <Text style={{color: '#fff', fontSize: 16}}>{title}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.leftItem}>
                    <TouchableOpacity onPress={rightOnPress}>
                        {rightSource && <Image style={styles.icon} source={rightSource}/>}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        height: Platform.OS === 'ios' ? 60 : 40,
        width: maxWidth,
        backgroundColor: '#348CEE',
        flexDirection: 'row',
        paddingTop: Platform.OS === 'ios' ? 20 : 0
    },
    leftItem: {
        width: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    icon: {
        width: 25,
        height: 25,
    }
});
