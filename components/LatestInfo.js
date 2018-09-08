/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
import {
  Card,
  CardContent,
  Title,
  Paragraph,
} from 'react-native-paper';
import axios from 'axios';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.tintColor,
  },
});

export default class LatestInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      isRefreshing: false,
    };
  }

  componentDidMount() {
    const url = 'https://s3-ap-southeast-1.amazonaws.com/torch-2018/latestInfo.json';
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        const temp = response.data.LatestInfo;
        temp.sort((x, y) => {
          return x.index < y.index ? 1 : -1;
        });
        this.setState({ Data: temp });
      })
      .catch((err) => { console.log(err); });
  }

  renderContent() { // eslint-disable-line class-methods-use-this
    const { Data } = this.state;
    return Data.map((info) => {
      const {
        title, content, index,
      } = info;
      return (
        <Card key={index}>
          <CardContent>
            <Title style={{ color: Colors.blue }}>
              {title}
            </Title>
            <Paragraph style={{ color: Colors.darkGray }}>
              {content}
            </Paragraph>
          </CardContent>
        </Card>
      );
    });
  }

  render() {
    const { isRefreshing } = this.state;
    return (
      <ScrollView 
        style={styles.container}
        refreshControl={(
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              this.setState({ isRefreshing: true });
              const url = 'https://s3-ap-southeast-1.amazonaws.com/torch-2018/latestInfo.json';
              axios.get(url)
                .then((response) => {
                  console.log(response.data);
                  const temp = response.data.LatestInfo;
                  temp.sort((x, y) => {
                    return x.index < y.index ? 1 : -1;
                  });
                  this.setState({ Data: temp });
                  this.setState({ isRefreshing: false });
                })
                .catch((err) => { console.log(err); });
            }}
          />)}
      >
        {this.renderContent()}
      </ScrollView>
    );
  }
}
