import * as React from 'react';
import {
  ScrollView, StyleSheet, View,
} from 'react-native';
import { Paragraph, Title, Button } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    transform: [
      { perspective: 400 },
      // { rotateZ: '0.785398rad' },
      { rotateX: '30deg' },
    ],
  },
  contentContainer: {
    paddingTop: 30,
    margin: 30,
    alignItems: 'center',
  },
});

export default class TransformText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
    }
    this.scrolling = this.scrolling.bind(this);
  }

  componentDidMount() {
    this.activeInterval = setInterval(this.scrolling, 100);
  }

  componentWillUnmount() {
    clearInterval(this.activeInterval);
  }

  scrolling() {
    const { start } = this.state;
    if (start > 1000) {
      clearInterval(this.activeInterval);
    }
    this.scrollView.scrollTo({ x: 0, y: start, animated: true });
    this.setState({ start: start + 5 });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1.5 }}>
          <ScrollView
            scrollEventThrottle={16}
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            scrollEnabled={false}
            ref={(ref) => this.scrollView = ref}
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
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          <Button
            raised
            onPress={() => {
              console.log('pressed');
            }}
          >
            Press me
          </Button>
        </View>
      </View>
    );
  }
}
