import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RNAnimatedTabs from 'rn-animated-tabs';
import TopTabs from '../components/TopTabs';
import Colors from '../constants/Colors';

const DATA = ['Top Tab 1 Content', 'Extra Stuff for Top Tab 2', 'More stuff for Top Tab 3'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
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
        <RNAnimatedTabs
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
