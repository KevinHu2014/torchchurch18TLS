import React from 'react';
import { Platform } from 'react-native';
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
  tabBarLabel: 'Schedule',
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
  tabBarLabel: 'Speaker',
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
  tabBarLabel: 'Note',
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
  tabBarLabel: 'Information',
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

export default createBottomTabNavigator({
  ScheduleStack,
  SpeakerStack,
  NoteStack,
  InformationStack,
});
