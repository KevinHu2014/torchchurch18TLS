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
import Colors from '../constants/Colors';

const styles = {
  activeTabText: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: Colors.tintColor,
    fontSize: 10,
    marginBottom: 1.5,
  },
};

const ScheduleStack = createStackNavigator({
  Schedule: {
    screen: ScheduleScreen,
    path: '/',
    navigationOptions: () => ({
      headerBackTitle: null,
      title: 'Schedule',
      headerStyle: {
        height: 60,
        backgroundColor: Colors.header,
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTitleStyle: {
        color: Colors.headerText,
        fontSize: 23,
      },
    }),
  },
});

ScheduleStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
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
  tabBarOptions: ({
    style: {
      backgroundColor: Colors.tabBar,
    },
  }),
};

const SpeakerStack = createStackNavigator({
  Speaker: {
    screen: SpeakerScreen,
    path: '/',
    navigationOptions: () => ({
      headerBackTitle: null,
      title: 'Speaker',
      headerStyle: {
        height: 60,
        backgroundColor: Colors.header,
      },
      headerTitleStyle: {
        color: Colors.headerText,
        fontSize: 23,
      },
    }),
  },
  SpeakerInfo: {
    screen: SpeakerInfoScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
      headerTintColor: Colors.header,
      headerStyle: {
        height: 60,
        backgroundColor: Colors.headerText,
      },
      headerTitleStyle: {
        color: Colors.header,
        fontSize: 23,
      },
    }),
  },
});

SpeakerStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
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
  tabBarOptions: ({
    style: {
      backgroundColor: Colors.tabBar,
    },
  }),
};

const NoteStack = createStackNavigator({
  Note: {
    screen: NoteScreen,
    path: '/',
    navigationOptions: () => ({
      headerBackTitle: null,
      title: 'Information',
      headerStyle: {
        height: 60,
        backgroundColor: Colors.header,
      },
      headerTitleStyle: {
        color: Colors.headerText,
        fontSize: 23,
      },
    }),
  },
});

NoteStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
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
  tabBarOptions: ({
    style: {
      backgroundColor: Colors.tabBar,
    },
  }),
};

const InformationStack = createStackNavigator({
  Information: {
    screen: InformationScreen,
    path: '/',
    navigationOptions: () => ({
      headerBackTitle: null,
      title: 'More',
      headerStyle: {
        height: 60,
        backgroundColor: Colors.header,
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTitleStyle: {
        color: Colors.headerText,
        fontSize: 23,
      },
    }),
  },
});

InformationStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
    if (focused) {
      return (
        <Text style={styles.activeTabText}>
          More
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
          ? `ios-more${focused ? '' : '-outline'}`
          : 'md-more'
      }
    />
  ),
  tabBarOptions: ({
    style: {
      backgroundColor: Colors.tabBar,
    },
  }),
};

export default createBottomTabNavigator({
  ScheduleStack,
  SpeakerStack,
  NoteStack,
  InformationStack,
}, {
  initialRouteName: 'SpeakerStack', // init tab
});
