import React from 'react';
import { StyleSheet, View } from 'react-native';
import AnimatedTopTabs from '../components/AnimatedTopTabs';
import LinkList from '../components/LinkList';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default class InformationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
    };
  }

  handleTabChange = value => this.setState({ currentTab: value });

  renderContent() {
    const { currentTab } = this.state;
    if (currentTab === 1) {
      return (
        <LinkList />
      );
    }
    return true;
  }

  render() {
    return (
      <View style={styles.container}>
        <AnimatedTopTabs
          height={30}
          activeTabIndicatorColor="#CEA34E"
          containerStyle={{ backgroundColor: '#fff' }}
          tabTitles={['About', 'Links', 'Notifications']}
          onChangeTab={this.handleTabChange}
        />
        {this.renderContent()}
      </View>
    );
  }
}
