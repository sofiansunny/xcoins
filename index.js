/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import DashboardScreen from './src/screens/dashboard';

const store = configureStore();

const MainApp = () => (
  <Provider store={store}>
    <DashboardScreen />
  </Provider>
);

AppRegistry.registerComponent(appName, () => MainApp);
