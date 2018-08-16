import React from 'react';
import {
  ScrollView, StyleSheet, Image, View,
} from 'react-native';
import {
  Paragraph,
  Card,
  CardContent,
  Title,
} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    height: 40,
    width: 100,
  },
  imgContainer: {
    alignItems: 'flex-end',
    height: 50,
    paddingRight: 15,
  },
  textStyle: {
    margin: 15,
    fontSize: 17,
    color: '#C0C0C0',
    lineHeight: 30,
  },
});

export default class Letter extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card style={{ flexDirection: 'row' }}>
          <CardContent>
            <Paragraph
              style={styles.textStyle}
            >
              {'時代在改變，我們都知道，\n只有腳不知道，所以沒跟到;\n時代在改變，我們都知道，\n只有心不知道，所以沒想到;\n時代在改變，我們都知道，\n只有手不知道，所以沒抓到;\n時代在改變，世界都知道，\n只有信徒不知道，所以保持現狀;\n時代在改變，所有領袖都知道，\n只有門徒不知道，所以絲毫不在意。\n時代的門徒，在聖靈的大能與真理中，\n獨領風騷、帶動改變 !'}
            </Paragraph>
            <Paragraph style={[styles.textStyle, { fontSize: 15 }]}>
              {'\n火把行道會主任牧師'}
            </Paragraph>
            <View style={styles.imgContainer}>
              <Image
                source={require('../../assets/images/signature.png')} // eslint-disable-line
                style={styles.avatar}
              />
            </View>
          </CardContent>
        </Card>
      </ScrollView>
    );
  }
}
