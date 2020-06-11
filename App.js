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

import AsyncStorage from '@react-native-community/async-storage';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      navTo: 'Opportunity',
    };

    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;

    AsyncStorage.getItem('Language').then(val => {
      if (val) this.setState({
        navTo: {
          initialRouteName: 'Home',
          isCustomHeader: 1,
        },
      });
      setI18nConfig().then(isReady => this.setState({isReady}));
    });
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <PreLoading />;
}
