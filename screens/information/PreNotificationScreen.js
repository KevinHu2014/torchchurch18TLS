import React from 'react';

import {
  ScrollView, StyleSheet, Image,
} from 'react-native';
import {
  ListItem,
  Paragraph,
  Card,
} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    height: 40,
    width: 40,
  },
  contentStyle: {
    paddingLeft: 15,
    paddingBottom: 30,
    fontSize: 17,
    lineHeight: 25,
  },
});

export default class PreNotification extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card>
          <ListItem
            title="火把教會"
            description={'寄給 火把領袖\n 下午10:09'}
            avatar={(
              <Image
                source={require('../../assets/images/email-icon.png')} // eslint-disable-line
                style={styles.avatar}
              />
            )}
          />
          <Paragraph style={styles.contentStyle}>
            {'您好！\n2018火把領袖高峰會即將展開！\n我們非常期待與您在高峰會中相會！\n\n以下事項請特別留意：\n\n本次領袖高峰會將於09/07(五)19:00展開，\n當天的報到時間為17:30-19:50\n報到的地點為臺鐵六樓演藝廳 東側入口處。\n(原銷售櫃檯)\n請您告知櫃檯同工您的姓名，\n以利同工確認報名資訊並發取物資包給您。\n\n若您是09/08(六)才能前來參加領袖高峰會，\n當天同樣有報到櫃檯為您服務報到，\n時間為08:30-09:50。\n祝您在領袖高峰會大得造就、經歷神的擴張。\n\nbest regards,\n火把教會'}
          </Paragraph>
        </Card>
      </ScrollView>
    );
  }
}
