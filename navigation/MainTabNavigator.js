/* eslint-disable  react/prop-types */
import React from 'react';
import { Text, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import ScheduleScreen from '../screens/ScheduleScreen';
import SpeakerScreen from '../screens/SpeakerScreen';
import NoteScreen from '../screens/NoteScreen';
import InformationScreen from '../screens/InformationScreen';
import SpeakerInfoScreen from '../screens/SpeakerInfoScreen';

const styles = {
  activeTabText: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: '#929292',
    fontSize: 10,
    marginBottom: 1.5,
  },
};

const ScheduleStack = createStackNavigator({
  Schedule: ScheduleScreen,
});

ScheduleStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
    console.log(focused);
    if (focused) {
      return (
        <Text style={styles.activeTabText}>
          Schedule
        </Text>
      );
    }
    return null;
  },
  tabBarIcon: ({ focused }) => ( // eslint-disable-line
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
  Speaker: {
    screen: SpeakerScreen,
    path: '/',
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  SpeakerInfo: {
    screen: SpeakerInfoScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
      headerTintColor: '#fff',
    }),
  },
});

SpeakerStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
    console.log(focused);
    if (focused) {
      return (
        <Text style={styles.activeTabText}>
          Speaker
        </Text>
      );
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
      return (
        <Text style={styles.activeTabText}>
          Note
        </Text>
      );
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
      return (
        <Text style={styles.activeTabText}>
          Information
        </Text>
      );
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

export default createBottomTabNavigator({
  ScheduleStack,
  SpeakerStack,
  NoteStack,
  InformationStack,
}, {
  initialRouteName: 'ScheduleStack', // init tab
});
