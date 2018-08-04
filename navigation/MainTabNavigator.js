import React from 'react';
import { Text, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ScheduleScreen from '../screens/ScheduleScreen';
import SpeakerScreen from '../screens/SpeakerScreen';
import NoteScreen from '../screens/NoteScreen';
import InformationScreen from '../screens/InformationScreen';

const ScheduleStack = createStackNavigator({
  Schedule: ScheduleScreen,
});

ScheduleStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
    console.log(focused);
    if (focused) {
      return (<Text style={styles.activeTabText}>Schedule</Text>);
    }
    return null;
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-calendar${focused ? '' : '-outline'}`
          : 'md-calendar'
      }
    />
  ),
};

const SpeakerStack = createStackNavigator({
  Speaker: SpeakerScreen,
});

SpeakerStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
    console.log(focused);
    if (focused) {
      return (<Text style={styles.activeTabText}>Speaker</Text>);
    }
    return null;
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person'}
    />
  ),
};

const NoteStack = createStackNavigator({
  Note: NoteScreen,
});

NoteStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
    console.log(focused);
    if (focused) {
      return (<Text style={styles.activeTabText}>Note</Text>);
    }
    return null;
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-book${focused ? '' : '-outline'}` : 'md-book'}
    />
  ),
};

const InformationStack = createStackNavigator({
  Information: InformationScreen,
});

InformationStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
    console.log(focused);
    if (focused) {
      return (<Text style={styles.activeTabText}>Information</Text>);
    }
    return null;
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const styles = {
  activeTabText: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: '#929292',
    fontSize: 10,
    marginBottom: 1.5,
  }
}

export default createBottomTabNavigator({
  ScheduleStack,
  SpeakerStack,
  NoteStack,
  InformationStack,
});
