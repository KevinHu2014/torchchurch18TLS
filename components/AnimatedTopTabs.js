/**
 * Inspire by @damianlajara
 * Special thanks
 * https://github.com/damianlajara/rn-animated-tabs
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  tabView: {
    backgroundColor: '#fff',
    position: 'relative',
    left: 0,
    right: 0,
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButton: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedLineContainer: {
    position: 'absolute',
    left: 0, // ignore parent padding
    right: 0, // ignore parent padding
    flexDirection: 'row',
  },
  tabText: {
    color: '#6B6868',
    fontSize: 16,
    fontWeight: '500',
    padding: 2,
  },
});

export default class AnimatedTopTabs extends Component {
  static propTypes = {
    tabTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChangeTab: PropTypes.func.isRequired,
    initialActiveTabIndex: PropTypes.number,
    top: PropTypes.bool,
    height: PropTypes.number,
    containerStyle: ViewPropTypes.style,
    tabButtonStyle: ViewPropTypes.style,
    tabTextStyle: ViewPropTypes.style,
    renderTabContent: PropTypes.func, // function that returns an element
    activeTabOpacity: PropTypes.number,
    activeTabIndicatorHeight: PropTypes.number,
    activeTabIndicatorColor: PropTypes.string,
  };

  static defaultProps = {
    initialActiveTabIndex: 0,
    top: false, // Defaults active tab indicator to bottom
    height: 60,
    containerStyle: {},
    tabButtonStyle: {},
    tabTextStyle: {},
    activeTabOpacity: 0.8,
    activeTabIndicatorHeight: 3,
    activeTabIndicatorColor: '#FE5F55',
    renderTabContent: undefined,
  };

  constructor(props) {
    super(props);
    const { tabTitles } = this.props;
    this.state = {
      left: new Animated.Value(0),
      tabWidth: width / tabTitles.length,
    };
  }

  componentDidMount() {
    const { initialActiveTabIndex } = this.props;
    this.moveTo(initialActiveTabIndex);
  }

  moveTo = (index) => {
    const { onChangeTab } = this.props;
    const { tabWidth, left } = this.state;
    if (onChangeTab) {
      onChangeTab(index);
    }

    Animated.timing(left, {
      toValue: tabWidth * index,
    }).start();
  };

  renderTabContent = (title, index) => {
    const { renderTabContent, tabTextStyle } = this.props;
    if (renderTabContent) return renderTabContent(title, index);
    return (
      <Text style={[styles.tabText, tabTextStyle]}>
        {title}
      </Text>
    );
  };

  renderTabs = () => {
    const { tabButtonStyle, activeTabOpacity, tabTitles } = this.props;
    return tabTitles.map((title, index) => (
      <TouchableOpacity
        key={`customTab${index + 1}`}
        style={[styles.tabButton, tabButtonStyle]}
        onPress={() => this.moveTo(index)}
        activeOpacity={activeTabOpacity}
      >
        {this.renderTabContent(title, index)}
      </TouchableOpacity>
    ));
  };

  render() {
    const {
      height,
      top,
      activeTabIndicatorHeight,
      activeTabIndicatorColor,
      containerStyle,
    } = this.props;
    const { left, tabWidth } = this.state;
    const activeLineDirection = top ? { top: 0 } : { bottom: 0 }; // Stick to bottom or top
    return (
      <View style={[styles.tabView, { width, height }, containerStyle]}>
        <View style={styles.tabs}>
          {this.renderTabs()}
        </View>
        <View
          style={[
            styles.animatedLineContainer,
            { height: activeTabIndicatorHeight },
            activeLineDirection,
          ]}
        >
          <Animated.View
            style={[
              {
                height: activeTabIndicatorHeight,
                backgroundColor: activeTabIndicatorColor,
                marginLeft: left,
                width: tabWidth,
              },
            ]}
          />
        </View>
      </View>
    );
  }
}
