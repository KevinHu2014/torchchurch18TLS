import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class InformationScreen extends React.Component {
  static navigationOptions = {
    title: 'Information',
    headerStyle: {
      height: 60,
      backgroundColor: '#f7b32d',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
