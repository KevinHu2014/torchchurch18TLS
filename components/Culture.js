/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Card,
  CardContent,
  Title,
  Paragraph,
  Divider,
} from 'react-native-paper';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.tintColor,
  },
});

export default class Culture extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card style={{ flexDirection: 'row' }}>
          <CardContent>
            <Title>
              {'火把教會的異象'}
            </Title>
            <Paragraph>
              {'我們以門徒訓練的方式，建立一個強壯、榮耀、健康，充滿愛的教會。並且為了贏得靈魂，以活力、熱情、卓越、創新、夢想的宣教，改變世界，見證耶穌。'}
            </Paragraph>
            <Title>
              {'\n火把教會的異象'}
            </Title>
            <Paragraph>
              {'01. 視教會全體重要性高過我個人所做一切\n02. 以喜樂的心來生活和服事主\n03. 不斷自我成長，謙卑互相學習\n04. 不發怨言、不說人是非、不掌控人\n05. 樂於接受改變和創新\n06. 成全包容彼此的差異性\n07. 給人成長、發揮、嘗試、冒險、夢想的機會\n08. 委身並尊榮彼此、團隊和權柄\n09. 追求達到更好的境界\n10. 表達感謝的言語和行動'}
            </Paragraph>
          </CardContent>
        </Card>
      </View>
    );
  }
}
