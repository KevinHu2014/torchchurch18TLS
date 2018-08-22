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
  quoteContainer: {
    alignItems: 'flex-start',
    height: 60,
    margin: 15,
    marginBottom: 0,
  },
  quote: {
    height: 40,
    width: 50,
  },
  textStyle: {
    margin: 15,
    fontSize: 17,
    color: '#C0C0C0',
    lineHeight: 30,
  },
});

export default class Lyrics extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card style={{ flexDirection: 'row' }}>
          <CardContent>
            <View style={styles.quoteContainer}>
              <Image
                source={require('../../assets/images/quoteDown.png')} // eslint-disable-line
                style={styles.quote}
              />
            </View>
            <Title style={{ margin: 15 }}>
              永恆閃耀
            </Title>
            <Paragraph
              style={styles.textStyle}
            >
              {'當我還在母腹的時候\n神就已經 預備我道路\n高過我心思意念的道路\n神早已經 給了我祝福\n\n留在原地享受安逸 不是神心意\n雖然改變會有苦痛 但是我願意\n堅定相信 神的帶領必有最美的意義\n放下過去 勇敢前進\n\n別怕 神就在這裡\n祂的應許 從不曾改變\n走吧 抬頭看前方\n永恆閃耀 祢引領前路\n\n當我還在煩惱的時候\n神就已經 預備我道路\n全知全能超乎萬有的主\n祂早已經 給了我祝福\n\n\nHa~lal~ha~lal~hal~le~lu~jah~\nHa~lal~ha~lal~hal~le~lu~jah~\nHa~lal~ha~lal~hal~le~lu~jah~\nha~lal~hal~le~lu~jah~\n未曾看見 未曾聽見 \n未曾想過 主都預備\n我是神所 喜悅的寶貝'}
            </Paragraph>
          </CardContent>
        </Card>
      </ScrollView>
    );
  }
}
