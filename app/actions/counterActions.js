/**
 * Created by function on 2017/3/9.
 */
import * as types from './actionTypes';

export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return  {
        type: types.DECREMENT
    };
}