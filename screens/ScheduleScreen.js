import React from 'react';
import {
  StyleSheet, View, ScrollView,
  Platform,
} from 'react-native';
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
    const url = 'https://gist.githubusercontent.com/KevinHu2014/bb2f9e96dba15f6bd26804874f3ff0a9/raw/5a8ebb0aa830493a94d962ff427d61657a798f23/tlsschedule.json';
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
    if (!Data) {
      return true;
    }
    return Data[`Day${currentTab + 1}`].map((events) => {
      const time = new Date(events.start);
      const diff = (new Date(events.end) - new Date(events.start)) / 1000;
      const Hour = diff / (60 * 60);
      const Min = (diff % (60 * 60)) / 60;
      const duration = `${(Hour >= 1) ? Math.floor(Hour) : ''}${(Hour >= 1) ? ' HOUR ' : ''}${(Min >= 1) ? Min : ''}${(Min >= 1) ? ' MIN' : ''}`;
      return (
        <View key={events.start}>
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
              title={events.name}
              description={`${events.speaker ? events.speaker : ''}${events.speaker ? '- ' : ''}${duration}`}
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
