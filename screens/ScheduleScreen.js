import React from 'react';
import { StyleSheet, View } from 'react-native';
import AnimatedTopTabs from '../components/AnimatedTopTabs';
import TopTabs from '../components/TopTabs';

const DATA = ['Top Tab 1 Content', 'Extra Stuff for Top Tab 2', 'More stuff for Top Tab 3'];

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
    };
  }

  handleTabChange = value => this.setState({ currentTab: value });

  render() {
    const { currentTab } = this.state;
    return (
      <View style={styles.container}>
        <AnimatedTopTabs
          height={30}
          activeTabIndicatorColor="#CEA34E"
          containerStyle={{ backgroundColor: '#fff' }}
          tabTitles={['Day 1', 'Day 2', 'Day 3']}
          onChangeTab={this.handleTabChange}
        />
        <TopTabs />
      </View>
    );
  }
}
