/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import Root from './app/Root';

/**
 * 配置ios入口文件
 */

AppRegistry.registerComponent('EnjoyGossip', () => Root);
