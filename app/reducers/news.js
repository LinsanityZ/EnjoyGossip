/**
 * Created by function on 2017/3/9.
 */
import * as types from '../actions/actionTypes';

const initialState = [
    {
        data: [],
        isRefresh: true,
    }, {
        data: [],
        isRefresh: true,
    }, {
        data: [],
        isRefresh: true,
    }, {
        data: [],
        isRefresh: true,
    }, {
        data: [],
        isRefresh: true,
    }, {
        data: [],
        isRefresh: true,
    }, {
        data: [],
        isRefresh: true,
    }, {
        data: [],
        isRefresh: true,
    }, {
        data: [],
        isRefresh: true,
    }, {
        data: [],
        isRefresh: true,
    }
];

export default function news(state = initialState, action = {}) {
    switch (action.type) {
        case types.JOKE_UP_ATA: {
            state[action.typeKey].data = action.data;
            state[action.typeKey].isRefresh = false;
        }
            break;
        case types.IS_Refresh: {
            state[action.typeKey].isRefresh = true;
        }
            break;
        default:
            break;
    }
    return Object.assign({}, state)

}