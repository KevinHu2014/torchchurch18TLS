import * as React from 'react';
import {
  ScrollView, View, Image,
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
        ],
      },
      contentContainer: {
        paddingTop: 300,
        margin: 30,
        alignItems: 'center',
      },
      textStyle: {
        color: '#feda4a',
        fontSize: 25,
        fontFamily: 'pathway-gothic-one',
        lineHeight: 30,
        letterSpacing: 6,
        fontWeight: '800',
        textAlign: 'justify',
      },
    };
    const { navigation } = this.props;
    const { show, visible } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Image
          style={{ position: 'absolute', width: '100%', height: '30%' }}
          source={require('../assets/images/transform.png')} // eslint-disable-line
        />
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
                <Title style={[styles.textStyle, { fontSize: 35 }]}>
                  {'AMAZING\n'}
                </Title>
                <Paragraph style={[styles.textStyle, { textAlign: 'left' }]}>
                  {'You have found the easter egg in the App. Well done. Show it to your friends around you.\nThank you for using our App. It really means a lot to us. Hoping you really enjoyed it.\nSpecial thanks to Zoey for all the design icons and color in the App. Special thanks to Ian Yan for the documents of the App. Special thanks to my coworker Adam for all the support.\n I am Kevin by the way. You can find me on Github. https://github.com/KevinHu2014'}
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
