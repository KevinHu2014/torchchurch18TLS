import * as React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import 'core-js/es6/array';

export default function Main() {
  return (
    <App />
  );
}

AppRegistry.registerComponent('main', () => Main);
