import React from 'react';
import {
  ScrollView, StyleSheet, Image, View,
} from 'react-native';
import {
  Paragraph,
} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  avatar: {
    height: 40,
    width: 100,
  },
  imgContainer: {
    alignItems: 'flex-end',
    height: 50,
    paddingRight: 30,
  },
});

export default class Letter extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Paragraph
          style={{ margin: 15 }}
        >
          {'2017火把領袖高峰會 牧師的話\n時代在改變，我們都知道，\n只有腳不知道，所以沒跟到;\n時代在改變，我們都知道，\n只有心不知道，所以沒想到;\n時代在改變，我們都知道，\n只有手不知道，所以沒抓到;\n時代在改變，世界都知道，\n只有信徒不知道，所以保持現狀;\n時代在改變，所有領袖都知道，\n只有門徒不知道，所以絲毫不在意。\n時代的門徒，在聖靈的大能與真理的大火中，\n獨領風騷、帶動改變 !\n火把行道會主任牧師 楊永民'}
        </Paragraph>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/images/signature.png')} // eslint-disable-line
            style={styles.avatar}
          />
        </View>
      </ScrollView>
    );
  }
}
