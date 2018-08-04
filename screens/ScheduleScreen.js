import React from 'react';
import TopTabs from '../components/TopTabs';
export default class ScheduleScreen extends React.Component {
  static navigationOptions = {
    title: 'Schedule',
    headerStyle: {
      height: 60,
      backgroundColor: '#f8f9fc',
    },
    headerTitleStyle: {
      color: '#000',
    },
  };

  render() {
    return (
      <TopTabs />
    );
  }
}
