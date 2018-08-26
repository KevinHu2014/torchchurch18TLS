import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import {
  Card,
  CardContent,
  Title,
  Paragraph,
} from 'react-native-paper';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  paper: {
    padding: 8,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    margin: 10,
  },
});

export default class SpeakerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
    };
  }

  componentDidMount() {
    const url = 'https://s3-ap-southeast-1.amazonaws.com/torch-2018/tlsschedule.json';
    axios.get(url)
      .then((responseData) => {
        console.log(responseData.data.Speaker);
        this.setState({ Data: responseData.data.Speaker });
      })
      .catch((err) => { console.log(err); });
  }

  renderContent() {
    const { navigation } = this.props;
    const { Data } = this.state;
    return Data.map((speaker) => {
      const {
        name, img, job, description,
      } = speaker;
      return (
        <Card
          key={speaker.name}
          onPress={() => {
            navigation.navigate('SpeakerInfo',
              {
                name, img, job, description,
              });
          }}
        >
          <CardContent>
            <Title style={{ color: Colors.blue }}>
              {name}
            </Title>
            <Paragraph style={{ color: Colors.darkGray }}>
              {job}
            </Paragraph>
          </CardContent>
        </Card>
      );
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderContent()}
      </ScrollView>
    );
  }
}

SpeakerScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
