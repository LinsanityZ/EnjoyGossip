/**
 * Created by function on 2017/3/9.
 */
import React, {Component} from 'react';


//配置store
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import App from './containers/App';


/**
 * 添加中间件
 * combineReducers方法，把reducers组合成一个传递给store。
 * 配置文件，不用死记硬背，理解才是重点
 * 应用中应有且仅有一个 store。
 */
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}