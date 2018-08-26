import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Platform,
  View,
  Text,
} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';
import { ListItem, ListSection, Divider } from 'react-native-paper';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';

let times = 0;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topStyle: {
    backgroundColor: Colors.header,
    color: Colors.headerText,
    margin: 3,
    fontSize: 13,
    lineHeight: 17,
    flex: 1,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: '200',
  },
});
export default class InformationScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={{ backgroundColor: Colors.header, justifyContent: 'center' }}>
          <LinearGradient
            colors={['#E0C98D', '#AC8331', '#C2B171']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.7, 0.9]}
            style={{
              height: 100,
              margin: 3,
            }}
          >
            <Text style={styles.topStyle}>
              {'以賽亞書54:2\n\n要擴張你帳幕之地，張大你居所的幔子，不要限止；\n要放長你的繩子，堅固你的橛子。 '}
            </Text>
          </LinearGradient>
        </View>
        <ListSection title="活動資訊">
          <ListItem
            title="牧師的話"
            icon="format-quote"
            onPress={() => {
              navigation.navigate('Letter');
            }}
          />
          <Divider />
          <ListItem
            title="領袖高峰會主題曲"
            icon="queue-music"
            onPress={() => {
              navigation.navigate('Lyrics');
            }}
          />
          <Divider />
          <ListItem
            title="與會前通知"
            icon="notifications"
            onPress={() => {
              navigation.navigate('PreNotification');
            }}
          />
          <Divider />
          <ListItem
            title="場地資訊"
            icon="map"
            onPress={() => {
              navigation.navigate('Map');
            }}
          />
          <Divider />
          <ListItem
            title="注意事項 Q&A"
            icon="question-answer"
            onPress={() => {
              navigation.navigate('QA');
            }}
          />
          <Divider />
          <ListItem
            title="參與者回饋"
            icon="feedback"
            onPress={() => {
              WebBrowser.openBrowserAsync('https://goo.gl/forms/fbybJGogQTSP6aQN2');
            }}
          />
          <Divider />
          {
            Platform.OS === 'ios'
              ? (
                <ListItem
                  title=" "
                  onPress={() => {
                    times += 1;
                    if (times > 10) {
                      navigation.navigate('Feedback');
                      times = 0;
                    }
                  }}
                />
              )
              : null
          }
        </ListSection>
      </ScrollView>
    );
  }
}

InformationScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
