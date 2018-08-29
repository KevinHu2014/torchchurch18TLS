/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
  Card,
  CardContent,
  Title,
  Paragraph,
} from 'react-native-paper';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.tintColor,
  },
});

const Data = [
  {
    title: '火把領袖高峰會通知',
    index: 1,
    content: '2018火把領袖高峰會即將於明天展開，下午5:30起開放物資領取櫃檯。地點在台鐵東二門1樓入口，請務必記得攜帶您的報名成功憑證，換取物資包。祝福您在高峰會中有豐富的收穫。',
  },
  {
    title: '火把領袖高峰會通知',
    index: 2,
    content: '2018火把領袖高峰會即將於明天展開，下午5:30起開放物資領取櫃檯。地點在台鐵東二門1樓入口，請務必記得攜帶您的報名成功憑證，換取物資包。祝福您在高峰會中有豐富的收穫。',
  },
];

export default class LatestInfo extends React.Component {
  renderContent() { // eslint-disable-line class-methods-use-this
    // TODO: 在幫我寫個用index 排序
    return Data.map((info) => {
      const {
        title, content, index,
      } = info;
      return (
        <Card key={index}>
          <CardContent>
            <Title style={{ color: Colors.blue }}>
              {title}
            </Title>
            <Paragraph style={{ color: Colors.darkGray }}>
              {content}
            </Paragraph>
          </CardContent>
        </Card>
      );
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderContent()}
      </ScrollView>
    );
  }
}
