import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet } from 'react-native';
import {
  Card,
  CardContent,
  Title,
  Paragraph,
} from 'react-native-paper';

const Data = [
  {
    name: '楊永民 主任牧師',
    img: 'http://www.torchchurch.com/images/img-pastor1.jpg',
    job: '火把行道會主任牧師',
    description: '致力於建造一個強壯、榮耀、健康、充滿愛的教會！渴望火把教會每一個人被聖靈充滿，成為具有熱情、信心、卓越的神兒女。楊牧師已婚，育有一個女兒，一個兒子。',
  },
  {
    name: '劉小芸 牧師',
    img: 'http://www.torchchurch.com/images/img-pastor2.png',
    job: '現為火把行道會牧師及區牧，同時也為裝備部及復原事工負責人，並牧養社會青年及復原小組。',
    description: '畢業於Vancouver Island University社會學系學士、中華福音神學院神學碩士。致力於順服主任牧師和師母暨開拓團隊一同建造一個強壯、榮耀的教會，渴望帶領、訓練強壯的平信徒領袖，成為具有使命、信心、喜樂和有智識的神的兒女',
  },
  {
    name: '侯麗婷 牧師',
    img: 'http://www.torchchurch.com/images/img-pastor3.png',
    job: '現為火把行道會牧師及兒童牧區Wonderland夢想樂園區牧。',
    description: '畢業於中臺醫護技術學院護理系學士、新加坡城市豐收聖經學院、浸信會神學院。渴望看見更多人相信主，生命經歷主的更新與恢復。看見這世代的兒童們被神興起被神使用，為主建立強壯榮耀健康的教會。已婚，與丈夫同心服事，育有一女。',
  },
  {
    name: '吳永成 牧師',
    img: 'http://www.torchchurch.com/images/img-pastor6.png',
    job: '現為火把行道會牧師及區牧，主要負責職場服事，並牧養成人與夫妻。',
    description: '畢業於臺灣大學電機研究所碩士、恩惠神學院。在職場上工作二十多年，渴望看見職場上的弟兄姊妹在職場上榮耀神、有美好的見證，並帶領更多人相信主，經歷神的大能、更新與恢復。已婚，與妻子同心服事，育有三女，二男。',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  paper: {
    padding: 8,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    margin: 10,
  },
});

export default class SpeakerScreen extends React.Component {
  renderContent() {
    const { navigation } = this.props;
    return Data.map((speaker) => {
      const {
        name, img, job, description,
      } = speaker;
      return (
        <Card
          key={speaker.name}
          onPress={() => {
            navigation.navigate('SpeakerInfo',
              {
                name, img, job, description,
              });
          }}
        >
          <CardContent>
            <Title>
              {name}
            </Title>
            <Paragraph>
              {job}
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

SpeakerScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
