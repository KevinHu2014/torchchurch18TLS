import { Notifications } from 'expo';
import React from 'react';
import { BackHandler, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Snackbar } from 'react-native-paper';
import registerForPushNotificationsAsync from './api/registerForPushNotificationsAsync';
import AppNavigator from './navigation/AppNavigator';

export default class AppContainer extends React.Component {
  state = {
    visible: true,
  }

  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      console.log('backkkkkkkk pressed!!');
      this.setState({ visible: true });
      return true;
    });
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
    this.backHandler.remove();
  }

  _handleNotification = ({ origin, data }) => {
    // const { navigation } = this.props;
    console.log(this.props);
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
    console.log(data.title);
    console.log(data.content);
    // call navigate for AppNavigator here:
    this.navigator && this.navigator.dispatch(
      NavigationActions.navigate({ routeName: data.path }),
    );
  };

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  render() {
    const { visible } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator
          ref={(nav) => { this.navigator = nav; }}
        />
        <Snackbar
          visible={visible}
          duration={2000}
          onDismiss={() => this.setState({ visible: false })}
          action={{
            label: '確定',
            onPress: () => {
              BackHandler.exitApp();
            },
          }}
        >
          確定要離開應用程式嗎？
        </Snackbar>
      </View>
    );
  }
}
