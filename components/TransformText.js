import * as React from 'react';
import {
  ScrollView, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { Font } from 'expo';
import { Paragraph, Title, Snackbar } from 'react-native-paper';

export default class TransformText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      show: false,
      visible: true,
    };
    this.scrolling = this.scrolling.bind(this);
  }

  async componentDidMount() {
    await Font.loadAsync({
      'pathway-gothic-one': require('../assets/fonts/PathwayGothicOne-Regular.ttf'),// eslint-disable-line
    });

    this.setState({ show: true });
    this.activeInterval = setInterval(this.scrolling, 100);
  }

  componentWillUnmount() {
    clearInterval(this.activeInterval);
  }

  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => { // eslint-disable-line
    return contentOffset.y >= contentSize.height;
  };

  scrolling() {
    const { start } = this.state;
    this.scrollView && this.scrollView.scrollTo({ x: 0, y: start, animated: true });// eslint-disable-line
    this.setState({ start: start + 3 });
  }

  render() {
    const styles = {
      container: {
        backgroundColor: 'black',
        transform: [
          { perspective: 300 },
          { rotateX: '30deg' },
          { scaleY: 2.7 },
        ],
      },
      contentContainer: {
        paddingTop: 300,
        margin: 30,
        alignItems: 'center',
      },
      textStyle: {
        color: '#feda4a',
        fontSize: 20,
        fontFamily: 'pathway-gothic-one',
        lineHeight: 20,
        letterSpacing: 6,
        fontWeight: '600',
      },
    };
    const { navigation } = this.props;
    const { show, visible } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        {
          show
            ? (
              <ScrollView
                style={styles.container}
                scrollEventThrottle={16}
                contentContainerStyle={styles.contentContainer}
                scrollEnabled={false}
                onScroll={({ nativeEvent }) => {
                  if (this.isCloseToBottom(nativeEvent)) {
                    clearInterval(this.activeInterval);
                    this.setState({ show: false });
                    navigation.pop();
                  }
                }}
                ref={(ref) => { this.scrollView = ref; }}
              >
                <Title style={styles.textStyle}>
                  {'AMAZING'}
                </Title>
                <Paragraph style={[styles.textStyle, { textAlign: 'left' }]}>
                  {'Thank you for using my App. It really means a lot to me. Hoping you really enjoyed it.'}
                </Paragraph>
                <Paragraph style={[styles.textStyle, { textAlign: 'left' }]}>
                  {'Deserunt amet eu pariatur ut adipisicing velit pariatur sit sunt velit eu mollit adipisicing. Lorem ea consectetur qui nostrud in laboris voluptate Lorem id. Reprehenderit magna deserunt proident enim qui aute occaecat quis cillum exercitation. Tempor minim velit consectetur culpa occaecat ex do ipsum fugiat nulla reprehenderit. Non laborum velit officia nostrud labore amet eu sit nostrud officia. Laboris duis aliqua elit id sunt enim non duis culpa reprehenderit nisi nostrud.'}
                </Paragraph>
                <Paragraph style={[styles.textStyle, { textAlign: 'left' }]}>
                  {'Deserunt amet eu pariatur ut adipisicing velit pariatur sit sunt velit eu mollit adipisicing. Lorem ea consectetur qui nostrud in laboris voluptate Lorem id. Reprehenderit magna deserunt proident enim qui aute occaecat quis cillum exercitation. Tempor minim velit consectetur culpa occaecat ex do ipsum fugiat nulla reprehenderit. Non laborum velit officia nostrud labore amet eu sit nostrud officia. Laboris duis aliqua elit id sunt enim non duis culpa reprehenderit nisi nostrud.'}
                </Paragraph>
              </ScrollView>
            )
            : null
        }
        <Snackbar
          visible={visible}
          duration={100000}
          onDismiss={() => this.setState({ visible: false, show: false })}
          action={{
            label: 'Close',
            onPress: () => {
              navigation.pop();
            },
          }}
        >
          Congratulations! You Found an Easter Egg!
        </Snackbar>
      </View>
    );
  }
}

TransformText.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
