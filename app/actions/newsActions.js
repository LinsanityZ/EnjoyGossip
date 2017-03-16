/**
 * Created by function on 2017/3/9.
 */

const AppKey = 'efad64d652ecc0087ecf7149375c0bbd';
import * as types from './actionTypes';

export function fetchNewsData(type, typeKey) {
    return (dispatch) => {
        fetch(`http://v.juhe.cn/toutiao/index?type=${type}&key=${AppKey}`, {
            method: 'GET',
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.result && responseJson.result.stat === '1') {
                    dispatch(updateJoke(responseJson.result.data, typeKey))
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function updateJoke(data, typeKey) {
    return {
        type: types.JOKE_UP_ATA,
        data: data,
        typeKey: typeKey
    };
}

export function isRefresh(typeKey) {
    return {
        type: types.IS_Refresh,
        typeKey: typeKey
    };
}