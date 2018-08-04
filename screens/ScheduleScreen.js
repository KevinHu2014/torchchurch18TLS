import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
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
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} />
    );
  }
}
