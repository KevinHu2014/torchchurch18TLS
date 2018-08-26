import React from 'react';
import {
  StyleSheet, View, ScrollView,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import { ListSection, ListItem } from 'react-native-paper';
import axios from 'axios';
import AnimatedTopTabs from '../components/AnimatedTopTabs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default class ScheduleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      Data: null,
    };
  }

  componentDidMount() {
    const url = 'https://s3-ap-southeast-1.amazonaws.com/torch-2018/tlsschedule.json';
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        this.setState({ Data: response.data });
      })
      .catch((err) => { console.log(err); });
  }

  handleTabChange = value => this.setState({ currentTab: value });

  renderContent() {
    const { currentTab, Data } = this.state;
    const { navigation } = this.props;
    if (!Data) {
      return true;
    }
    return Data[`Day${currentTab + 1}`].map((events) => {
      // TODO: Json 要多代一個講者的照片參數 img
      const {
        name, start, end, speaker, topic, outline,
      } = events;
      const time = new Date(start);
      const diff = (new Date(end) - new Date(start)) / 1000;
      const Hour = diff / (60 * 60);
      const Min = (diff % (60 * 60)) / 60;
      const duration = `${(Hour >= 1) ? Math.floor(Hour) : ''}${(Hour >= 1) ? ' HOUR ' : ''}${(Min >= 1) ? Min : ''}${(Min >= 1) ? ' MIN' : ''}`;
      return (
        <View key={start}>
          <ListSection
            title={
              Platform.OS === 'ios'
                ? time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
                : time.toLocaleTimeString().substr(0, 5)
            }
            style={{ backgroundColor: '#f3f3f3' }}
          >
            <ListItem
              style={{ backgroundColor: '#fff' }}
              title={name}
              description={`${speaker || ''}${speaker ? '- ' : ''}${duration}`}
              onPress={() => {
                let SpeakerImg = '';
                let SpeakerJob = '';
                let SpeakerDescription = '';
                const SpeakerMax = 3;
                let i = 0;

                for (i = 0; i < Data.Speaker.length; i++) {
                  if (Data.Speaker[i].name === speaker) {
                    SpeakerImg = Data.Speaker[i].img;
                    SpeakerJob = Data.Speaker[i].job;
                    SpeakerDescription = Data.Speaker[i].description;
                  }
                  if (speaker && SpeakerMax === 3) {
                    navigation.navigate('SpeechInfo',
                      {
                        name, speaker, topic, outline, duration, SpeakerImg, SpeakerJob, SpeakerDescription,
                      });
                  }
                }
              }}
            />
          </ListSection>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <AnimatedTopTabs
          height={30}
          activeTabIndicatorColor="#CEA34E"
          containerStyle={{ backgroundColor: '#fff' }}
          tabTitles={['Day 1', 'Day 2', 'Day 3']}
          onChangeTab={this.handleTabChange}
        />
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
          {this.renderContent()}
        </ScrollView>
      </View>
    );
  }
}

ScheduleScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
