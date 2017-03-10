/**
 * Created by function on 2017/3/9.
 */
import * as types from '../actions/actionTypes';

const initialState = {
    count: 0
};

export default function counter(state = initialState, action = {}) {
    console.log(2333);
    switch (action.type) {
        case types.INCREMENT: {
            state.count = state.count + 1
        }
            break;
        case types.DECREMENT: {
            console.log(2333);
            state.count = state.count - 1
        }
            break;
        default:
            break;
    }
    console.log(state);
    return Object.assign({}, state)

}