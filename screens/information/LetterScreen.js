import React from 'react';
import {
  ScrollView, StyleSheet, Image, View,
} from 'react-native';
import {
  Paragraph,
  Card,
  CardContent,
} from 'react-native-paper';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    height: 40,
    width: 100,
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
  imgContainer: {
    alignItems: 'flex-end',
    height: 50,
    paddingRight: 15,
  },
  textStyle: {
    margin: 15,
    fontSize: 17,
    color: Colors.lightText,
    lineHeight: 30,
  },
});

export default class Letter extends React.Component {
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
            <Paragraph
              style={styles.textStyle}
            >
              {'擴張神的國度，理應是由聖靈來主導完工。然而，每位耶穌的門徒、教會的領袖，都應當有一個認知，就是神要我們與祂一起在地上同工。完成神偉大的工作是合作的、是同心的、是有相同藍圖的，也是大家可以說阿們的 !\n\n2018火把領袖高峰會 --「擴張  神國度的藍圖」將挑戰你的思想、挑戰你的眼光、挑戰你的執行力，當然，也極度挑戰你的屬靈生命力與對神國度的委身程度......。\n\n相信神掌權，帶領我們在祂裡面迸發熱情、更新、神蹟，超乎想像的領導力擴張 ！\n\n神能照著運行在我們心裡的大力充充足足的成就一切，超過我們所求所想的。\n但願他在教會中，並在基督耶穌裡，得著榮耀，直到世世代代，永永遠遠。阿們！\n\n以弗所書3：20~21\n'}
            </Paragraph>
            <Paragraph style={[styles.textStyle, { fontSize: 15, textAlign: 'right' }]}>
              {'\n愛你們的牧師'}
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
