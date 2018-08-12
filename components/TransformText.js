import * as React from 'react';
import {
  ScrollView, StyleSheet, View,
} from 'react-native';
import { Paragraph, Title, Button } from 'react-native-paper';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     transform: [
//       { perspective: 400 },
//       // { rotateZ: '0.785398rad' },
//       { rotateX: '30deg' },
//     ],
//   },
//   contentContainer: {
//     paddingTop: 30,
//     margin: 30,
//     alignItems: 'center',
//   },
// });

export default class TransformText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
    };
    this.scrolling = this.scrolling.bind(this);
  }

  componentDidMount() {
    this.activeInterval = setInterval(this.scrolling, 100);
  }

  componentWillUnmount() {
    clearInterval(this.activeInterval);
  }

  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return contentOffset.y >= contentSize.height + layoutMeasurement.height;
  };

  scrolling() {
    const { start } = this.state;
    this.scrollView.scrollTo({ x: 0, y: start, animated: true });
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
    };

    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <ScrollView
          style={styles.container}
          scrollEventThrottle={16}
          contentContainerStyle={styles.contentContainer}
          scrollEnabled={false}
          onScroll={({ nativeEvent }) => {
            if (this.isCloseToBottom(nativeEvent)) {
              clearInterval(this.activeInterval);
            }
          }}
          ref={ref => this.scrollView = ref}
        >
          <Title style={{ color: '#feda4a', fontSize: 30 }}>
            {'A NEW HOPE'}
          </Title>
          <Paragraph style={{ color: '#feda4a', fontSize: 20, textAlign: 'left' }}>
            {'Deserunt amet eu pariatur ut adipisicing velit pariatur sit sunt velit eu mollit adipisicing. Lorem ea consectetur qui nostrud in laboris voluptate Lorem id. Reprehenderit magna deserunt proident enim qui aute occaecat quis cillum exercitation. Tempor minim velit consectetur culpa occaecat ex do ipsum fugiat nulla reprehenderit. Non laborum velit officia nostrud labore amet eu sit nostrud officia. Laboris duis aliqua elit id sunt enim non duis culpa reprehenderit nisi nostrud.'}
          </Paragraph>
          <Paragraph style={{ color: '#feda4a', fontSize: 20, textAlign: 'left' }}>
            {'Deserunt amet eu pariatur ut adipisicing velit pariatur sit sunt velit eu mollit adipisicing. Lorem ea consectetur qui nostrud in laboris voluptate Lorem id. Reprehenderit magna deserunt proident enim qui aute occaecat quis cillum exercitation. Tempor minim velit consectetur culpa occaecat ex do ipsum fugiat nulla reprehenderit. Non laborum velit officia nostrud labore amet eu sit nostrud officia. Laboris duis aliqua elit id sunt enim non duis culpa reprehenderit nisi nostrud.'}
          </Paragraph>
          <Paragraph style={{ color: '#feda4a', fontSize: 20, textAlign: 'left' }}>
            {'Deserunt amet eu pariatur ut adipisicing velit pariatur sit sunt velit eu mollit adipisicing. Lorem ea consectetur qui nostrud in laboris voluptate Lorem id. Reprehenderit magna deserunt proident enim qui aute occaecat quis cillum exercitation. Tempor minim velit consectetur culpa occaecat ex do ipsum fugiat nulla reprehenderit. Non laborum velit officia nostrud labore amet eu sit nostrud officia. Laboris duis aliqua elit id sunt enim non duis culpa reprehenderit nisi nostrud.'}
          </Paragraph>
        </ScrollView>
      </View>
    );
  }
}
