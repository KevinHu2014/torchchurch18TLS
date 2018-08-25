import React from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {
  Paragraph,
  Card,
} from 'react-native-paper';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  imageContainer: {
    height: 195,
    backgroundColor: Colors.lightGray,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    padding: 16,
    justifyContent: 'flex-end',
    resizeMode: 'contain',
  },
});

export default class Map extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/images/map.png')} // eslint-disable-line
            />
          </View>
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
