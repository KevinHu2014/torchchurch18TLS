import React from 'react';
import {
  ScrollView, StyleSheet, Image, View,
} from 'react-native';
import {
  Paragraph,
  Card,
  CardContent,
  Title,
} from 'react-native-paper';
import { Audio } from 'expo';
import Colors from '../../constants/Colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  quoteContainer: {
    alignItems: 'flex-start',
    height: 60,
    margin: 15,
    marginBottom: 0,
  },
  quote: {
    height: 40,
    width: 50,
  },
  textStyle: {
    margin: 15,
    fontSize: 17,
    color: Colors.lightText,
    lineHeight: 30,
  },
});

export default class Music extends React.Component {
  componentDidMount() {
    this.playbackObject = new Audio.Sound();
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
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>1');
    if (status.isLoaded && status.uri === source.uri) {
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>2');
      console.warn('[loadMusic] already loaded');
      return false;
    } if (status.isLoaded) {
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>3');
      if (status.isPlaying) {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>4');
        await this.playbackObject.stopAsync();
      }
      await this.playbackObject.unloadAsync();
    }
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>5');
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
    return (
      <ScrollView style={styles.container}>
        <Card style={{ flexDirection: 'row' }}>
          <CardContent>
            <View style={styles.quoteContainer}>
              <Image
                source={require('../../assets/images/music.png')} // eslint-disable-line
                style={styles.quote}
              />
            </View>
            <Title
              style={{ color: Colors.blue, margin: 15 }}
              onPress={async () => {
                await this.loadMusic({ uri: 'https://firebasestorage.googleapis.com/v0/b/tls2018-6a8fb.appspot.com/o/%E6%B0%B8%E6%81%86%E9%96%83%E8%80%80with%E5%8D%A1%E4%BC%8Ademo.mp3?alt=media&token=d79f379e-8661-4e94-b578-9bd0f3bdd51e' });
                await this.playMusic();
              }}
            >
              永恆閃耀
            </Title>
            <Paragraph
              style={styles.textStyle}
            >
              {'當我還在母腹的時候\n神就已經 預備我道路\n高過我心思意念的道路\n神早已經 給了我祝福\n\n留在原地享受安逸 不是神心意\n雖然改變會有苦痛 但是我願意\n堅定相信 神的帶領必有最美的意義\n放下過去 勇敢前進\n\n別怕 神就在這裡\n祂的應許 從不曾改變\n走吧 抬頭看前方\n永恆閃耀 祢引領前路\n\n當我還在煩惱的時候\n神就已經 預備我道路\n全知全能超乎萬有的主\n祂早已經 給了我祝福\n\n\nHa~lal~ha~lal~hal~le~lu~jah~\nHa~lal~ha~lal~hal~le~lu~jah~\nHa~lal~ha~lal~hal~le~lu~jah~\nha~lal~hal~le~lu~jah~\n未曾看見 未曾聽見 \n未曾想過 主都預備\n我是神所 喜悅的寶貝'}
            </Paragraph>
          </CardContent>
        </Card>
      </ScrollView>
    );
  }
}
