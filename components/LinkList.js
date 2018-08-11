/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { ListItem, ListSection, Divider } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { WebBrowser } from 'expo';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.tintColor,
  },
});

export default class LinkList extends React.Component {
  handlePressFacebook = () => {
    WebBrowser.openBrowserAsync('https://zh-tw.facebook.com/torchfans/');
  };

  handlePressInstagram = () => {
    WebBrowser.openBrowserAsync('https://www.instagram.com/torchchurch/');
  };

  handlePressYoutube = () => {
    WebBrowser.openBrowserAsync('https://www.youtube.com/channel/UCePMQ8oujFbIetPRQBSekjQ');
  };

  handlePressApp = () => {
    if (Platform.OS === 'ios') {
      WebBrowser.openBrowserAsync('https://itunes.apple.com/tw/app/huo-ba-xing-dao-hui-app/id488795386?mt=8');
    } else {
      WebBrowser.openBrowserAsync('https://play.google.com/store/apps/details?id=com.tchurch.layout&hl=zh_TW');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ListSection title="火把相關連結">
          <ListItem
            title="Facebook"
            avatar={<Entypo name="facebook" size={25} color={Colors.tabIconDefault} />}
            onPress={this.handlePressFacebook}
          />
          <Divider />
          <ListItem
            title="Instagram"
            avatar={<Entypo name="instagram" size={25} color={Colors.tabIconDefault} />}
            onPress={this.handlePressInstagram}
          />
          <Divider />
          <ListItem
            title="Youtube"
            avatar={<Entypo name="youtube" size={25} color={Colors.tabIconDefault} />}
            onPress={this.handlePressYoutube}
          />
          <Divider />
          <ListItem
            title="App"
            avatar={(
              <Entypo
                name={
                  Platform.OS === 'ios'
                    ? 'app-store'
                    : 'google-play'
                }
                size={25}
                color={Colors.tabIconDefault}
              />
            )}
            onPress={this.handlePressApp}
          />
          <Divider />
        </ListSection>
      </View>
    );
  }
}
