import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, StyleSheet, Image, View, 
} from 'react-native';
import {
  Card,
  CardContent,
  Title,
  Paragraph,
} from 'react-native-paper';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: 195,
    backgroundColor: 'grey',
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    padding: 16,
    justifyContent: 'flex-end',
    resizeMode: 'contain',
  },
});

export default class SpeakerInfo extends React.Component {
  static navigationOptions = {
    title: 'Speaker',
    headerStyle: {
      height: 60,
      backgroundColor: '#c00000',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  };

  render() {
    const { navigation } = this.props;
    const img = navigation.getParam('img', 'https://portal.torchchurch.com/Activity/upload/2018062016130100237353622532273703665195.jpg');
    const job = navigation.getParam('job', '404');
    const description = navigation.getParam('description', '此頁面出了點問題 X X');
    return (
      <ScrollView style={styles.container}>
        <Card style={{ flexDirection: 'row' }}>
          {/* <CardCover
            resizeMode="contain"
            source={{ uri: 'http://www.torchchurch.com/images/img-pastor1.jpg' }}
          /> */}
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: img }} />
          </View>
          <CardContent>
            <Title>
              {job}
            </Title>
            <Paragraph>
              {description}
            </Paragraph>
          </CardContent>
        </Card>
      </ScrollView>
    );
  }
}

SpeakerInfo.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
