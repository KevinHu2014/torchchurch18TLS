import React from 'react';
import {
  StyleSheet, Image, View, Dimensions, Text,
} from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import { Title } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo';
import Colors from '../../constants/Colors';
import LyricsScreen from './LyricsScreen';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  albumContainer: {
    flex: 3,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  album: {
    width: width * 0.65,
    height: width * 0.65,
  },
  lyricsBtn: {
    textAlign: 'right',
    paddingRight: 20,
    paddingTop: 10,
    color: 'white',
  },
});

export default class Music extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <HeaderBackButton
        tintColor="#fff"
        onPress={() => navigation.push('Information')}
      />
    ),
  });

  constructor(props) {
    super(props);
    this.playbackObject = new Audio.Sound();
    this.state = { play: false, showLyrics: false };
  }

  componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
  }

  loadMusic = async (source) => {
    const status = await this.playbackObject.getStatusAsync();
    if (status.isLoaded && status.uri === source.uri) {
      console.log('[loadMusic] already loaded');
      return false;
    } if (status.isLoaded) {
      if (status.isPlaying) {
        await this.playbackObject.stopAsync();
      }
      await this.playbackObject.unloadAsync();
    }
    await this.playbackObject.loadAsync(source);
    return true;
  }

  playMusic = async () => {
    const status = await this.playbackObject.getStatusAsync();
    if (!status.isLoaded) {
      console.log('[playMusic] not loaded');
      return false;
    }
    await this.playbackObject.stopAsync();
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
    await this.playbackObject.playAsync();
    return true;
  }

  stopMusic = async () => {
    const status = await this.playbackObject.getStatusAsync();
    if (!status.isLoaded) {
      console.log('[stopMusic] not loaded');
      return false;
    }
    await this.playbackObject.stopAsync();
    return true;
  }

  render() {
    const { play, showLyrics } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.albumContainer}>
          {
            (!showLyrics)
              ? (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    style={styles.album}
                    source={require('../../assets/images/album.png')} // eslint-disable-line
                  />
                  <Title style={{ color: Colors.gold, marginTop: 5 }}>
                    永恆閃耀
                  </Title>
                  <Text style={{ color: Colors.bubble }}>
                    火把敬拜團
                  </Text>
                </View>
              )
              : (<LyricsScreen />)
          }
        </View>
        <View style={{ flex: 1, backgroundColor: Colors.lightGray }}>
          <View style={{ flex: 1 }}>
            <Text
              style={styles.lyricsBtn}
              onPress={() => {
                this.setState({ showLyrics: !showLyrics });
              }}
            >
              {'歌詞'}
            </Text>
          </View>
          <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons
              name={play ? 'stop-circle-outline' : 'play-circle-outline'}
              size={70}
              style={{ margin: 5 }}
              color="white"
              onPress={async () => {
                if (!play) {
                  await this.loadMusic({ uri: 'https://firebasestorage.googleapis.com/v0/b/tls2018-6a8fb.appspot.com/o/%E6%B0%B8%E6%81%86%E9%96%83%E8%80%80with%E5%8D%A1%E4%BC%8Ademo.mp3?alt=media&token=d79f379e-8661-4e94-b578-9bd0f3bdd51e' });
                  await this.playMusic();
                  this.setState({ play: !play });
                } else {
                  await this.stopMusic();
                  this.setState({ play: !play });
                }
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
