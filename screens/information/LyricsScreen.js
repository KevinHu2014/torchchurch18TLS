import React from 'react';
import {
  ScrollView, StyleSheet, Dimensions,
} from 'react-native';
import { Paragraph } from 'react-native-paper';
import Colors from '../../constants/Colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width,
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  textStyle: {
    fontSize: 17,
    color: Colors.lightText,
    lineHeight: 30,
    textAlign: 'center',
  },
});

export default class Lyrics extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Paragraph
          style={styles.textStyle}
        >
          {'詞/曲：劉思捷（葡萄樹計畫）\n製作人/編曲：張四維\n\n當我還在母腹的時候\n神就已經 預備我道路\n高過我心思意念的道路\n神早已經 給了我祝福\n\n留在原地享受安逸 不是神心意\n雖然改變會有苦痛 但是我願意\n堅定相信 神的帶領必有最美的意義\n放下過去 勇敢前進\n\n別怕 神就在這裡\n祂的應許 從不曾改變\n走吧 抬頭看前方\n永恆閃耀 祢引領前路\n\n當我還在煩惱的時候\n神就已經 預備我道路\n全知全能超乎萬有的主\n祂早已經 給了我祝福\n\nHa~lal~ha~lal~hal~le~lu~jah~\nHa~lal~ha~lal~hal~le~lu~jah~\nHa~lal~ha~lal~hal~le~lu~jah~\nha~lal~hal~le~lu~jah~\n未曾看見 未曾聽見 \n未曾想過 主都預備\n我是神所 喜悅的寶貝'}
        </Paragraph>
      </ScrollView>
    );
  }
}
