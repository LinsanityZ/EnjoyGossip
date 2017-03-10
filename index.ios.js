/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import App from './app/containers/app';

/**
 * 配置ios入口文件
 */

AppRegistry.registerComponent('EnjoyGossip', () => App);
