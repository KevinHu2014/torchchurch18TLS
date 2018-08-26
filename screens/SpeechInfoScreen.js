import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, StyleSheet, Image,
} from 'react-native';
import {
  Card,
  CardContent,
  Title,
  Paragraph,
  ListItem,
} from 'react-native-paper';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: 195,
    backgroundColor: 'grey',
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
  avatar: {
    height: 40,
    width: 40,
  },
  textStyle: {
    margin: 15,
    // fontSize: 17,
    color: Colors.lightText,
    lineHeight: 25,
  },
});

export default class SpeechInfo extends React.Component {
  render() {
    const { navigation } = this.props;

    const img = navigation.getParam('img', 'https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png');
    const speaker = navigation.getParam('speaker', '404');
    const topic = navigation.getParam('topic', '此頁面出了點問題 X X');
    const outline = navigation.getParam('outline', '此頁面出了點問題 X X');
    const duration = navigation.getParam('duration', '404');

    const SpeakerImg = navigation.getParam('SpeakerImg', 'https://portal.torchchurch.com/Activity/upload/2018062016130100237353622532273703665195.jpg');
    const SpeakerJob = navigation.getParam('SpeakerJob', '404');
    const SpeakerDescription = navigation.getParam('SpeakerDescription', '此頁面出了點問題 X X');
    return (
      <ScrollView style={styles.container}>
        <Card style={{ flexDirection: 'row' }}>
          <CardContent>
            <ListItem
              title={speaker}
              description={duration}
              avatar={(
                <Image
                  source={{ uri: img }}
                  style={styles.avatar}
                />
              )}
              onPress={() => {
                navigation.navigate('SpeakerInfo',
                  {
                    name: speaker, img: SpeakerImg, job: SpeakerJob, description: SpeakerDescription,
                  });
              }}
            />
            <Title style={{ color: '#0D3760', marginLeft: 15 }}>
              {topic}
            </Title>
            <Paragraph style={styles.textStyle}>
              {outline}
            </Paragraph>
          </CardContent>
        </Card>
      </ScrollView>
    );
  }
}

SpeechInfo.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
