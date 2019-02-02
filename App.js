import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LogIn from './src/components/logIn/LogIn';
import SignUp from './src/components/signUp/SignUp';
import License from './src/components/license/License';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppStackNavigator = createStackNavigator(
  {
    LogIn: LogIn,
    SignUp: SignUp,
    License: License,
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
