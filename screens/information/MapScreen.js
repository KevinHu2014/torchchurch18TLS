import React from 'react';

import {
  ScrollView, StyleSheet,
} from 'react-native';
import {
  CardCover,
  Paragraph,
  Card,
} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
});

export default class Map extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card>
          <CardCover
            source={require('../../assets/images/map.png')}  // eslint-disable-line
          />
          <Paragraph style={styles.content}>
            地點：臺北車站六樓演藝廳 ( 請由東2門入口進入 )
          </Paragraph>
          <Paragraph style={[styles.content, { paddingTop: 0 }]}>
            地址：100 臺北市中正區北平西路3號
          </Paragraph>
        </Card>
      </ScrollView>
    );
  }
}
