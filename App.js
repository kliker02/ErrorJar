/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'; //required by https://reactnavigation.org/docs/getting-started/

import React, { Component } from 'react';
import { Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import PreLoading from './src/components/uikit/Loading';


class App extends Component {
  constructor(props) {
    super(props);
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <PreLoading />;
}
