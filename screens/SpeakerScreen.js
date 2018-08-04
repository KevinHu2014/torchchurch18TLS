import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet } from 'react-native';
import { ListItem, ListAccordion } from 'react-native-paper';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default class SpeakerScreen extends React.Component {
  static navigationOptions = {
    title: 'Speaker',
    headerStyle: {
      height: 60,
      backgroundColor: '#c00000',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <ListAccordion
          title="Day 1"
          icon="looks-one"
        >
          <ListItem
            title="楊永民 主任牧師"
            onPress={() => {
              navigation.navigate('SpeakerInfo',
                {
                  name: '楊永民 主任牧師',
                  img: 'http://www.torchchurch.com/images/img-pastor1.jpg',
                  job: '火把行道會主任牧師',
                  description: '致力於建造一個強壯、榮耀、健康、充滿愛的教會！渴望火把教會每一個人被聖靈充滿，成為具有熱情、信心、卓越的神兒女。楊牧師已婚，育有一個女兒，一個兒子。',
                });
            }}
          />
          <ListItem
            title="劉小芸 牧師"
            onPress={() => {
              navigation.navigate('SpeakerInfo',
                {
                  name: '劉小芸 牧師',
                  img: 'http://www.torchchurch.com/images/img-pastor2.png',
                  job: '現為火把行道會牧師及區牧，同時也為裝備部及復原事工負責人，並牧養社會青年及復原小組。',
                  description: '畢業於Vancouver Island University社會學系學士、中華福音神學院神學碩士。致力於順服主任牧師和師母暨開拓團隊一同建造一個強壯、榮耀的教會，渴望帶領、訓練強壯的平信徒領袖，成為具有使命、信心、喜樂和有智識的神的兒女',
                });
            }}
          />
          <ListItem title="侯麗婷 牧師" />
          <ListItem title="吳永成 牧師" />
        </ListAccordion>
        <ListAccordion
          title="Day 2"
          icon="looks-two"
        >
          <ListItem title="江韶恩 牧師" />
          <ListItem title="李冠利 牧師" />
          <ListItem title="王心怡 牧師" />
        </ListAccordion>
        <ListAccordion
          title="Day 3"
          icon="looks-3"
        >
          <ListItem title="王銘潔 牧師" />
          <ListItem title="蔡秉紘 牧師" />
          <ListItem title="錢惟清 牧師" />
        </ListAccordion>
      </ScrollView>
    );
  }
}

SpeakerScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
