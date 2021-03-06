import React from 'react';
import {
  Platform, StatusBar, StyleSheet, View,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  AppLoading, Asset, Font, Icon,
} from 'expo';
import AppContainer from './AppContainer';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'), // eslint-disable-line global-require
      require('./assets/images/robot-prod.png'), // eslint-disable-line global-require
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Icon.Ionicons.font,
      // We include SpaceMono because we use it in ScheduleScreen.js. Feel free
      // to remove this if you are not using it in your app

      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'), // eslint-disable-line global-require
    }),
  ]);

  handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <PaperProvider>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppContainer />
        </View>
      </PaperProvider>
    );
  }
}
