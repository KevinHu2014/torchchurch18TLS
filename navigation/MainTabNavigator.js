/* eslint-disable  react/prop-types */
import React from 'react';
import { Text, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import ScheduleScreen from '../screens/ScheduleScreen';
import SpeakerScreen from '../screens/SpeakerScreen';
import InformationScreen from '../screens/InformationScreen';
import MoreScreen from '../screens/MoreScreen';
import SpeechInfoScreen from '../screens/SpeechInfoScreen';
import SpeakerInfoScreen from '../screens/SpeakerInfoScreen';
import QAScreen from '../screens/information/QAScreen';
import PreNotificationScreen from '../screens/information/PreNotificationScreen';
import LetterScreen from '../screens/information/LetterScreen';
import LyricsScreen from '../screens/information/LyricsScreen';
import MapScreen from '../screens/information/MapScreen';
import FeedBackScreen from '../components/TransformText';
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
      title: '議程',
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
  SpeechInfo: {
    screen: SpeechInfoScreen,
    path: '/speechinfo/:name',
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

ScheduleStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
    if (focused) {
      return (
        <Text style={styles.activeTabText}>
          議程
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
    path: '/speaker',
    navigationOptions: () => ({
      headerBackTitle: null,
      title: '講者',
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
    path: '/speakerinfo/:name',
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
          講者
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

const InformationStack = createStackNavigator({
  Information: {
    screen: InformationScreen,
    path: '/information',
    navigationOptions: () => ({
      headerBackTitle: null,
      title: '資訊',
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
  QA: {
    screen: QAScreen,
    path: '/qa',
    navigationOptions: () => ({
      title: '注意事項Q&A',
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
  PreNotification: {
    screen: PreNotificationScreen,
    path: '/prenotification',
    navigationOptions: () => ({
      title: '行前通知',
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
  Letter: {
    screen: LetterScreen,
    path: '/letter',
    navigationOptions: () => ({
      title: '牧師的話',
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
  Lyrics: {
    screen: LyricsScreen,
    path: '/lyrics',
    navigationOptions: () => ({
      title: '領袖高峰會主題曲',
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
  Map: {
    screen: MapScreen,
    path: '/map',
    navigationOptions: () => ({
      title: '場地資訊',
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
  Feedback: {
    screen: FeedBackScreen,
    path: '/feedback',
    navigationOptions: () => ({
      header: null,
    }),
  },
});

InformationStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
    if (focused) {
      return (
        <Text style={styles.activeTabText}>
          資訊
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

const MoreStack = createStackNavigator({
  More: {
    screen: MoreScreen,
    path: '/more',
    navigationOptions: () => ({
      headerBackTitle: null,
      title: '更多',
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

MoreStack.navigationOptions = {
  tabBarLabel: ({ focused }) => {
    if (focused) {
      return (
        <Text style={styles.activeTabText}>
          更多
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
  InformationStack,
  MoreStack,
}, {
  initialRouteName: 'InformationStack', // init tab
});
