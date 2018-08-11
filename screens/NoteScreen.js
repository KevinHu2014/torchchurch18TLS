import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ListItem, ListSection, Divider } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
export default class NoteScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <ListSection title="活動資訊">
          <ListItem
            title="與會前通知"
            icon="notifications"
          />
          <Divider />
          <ListItem
            title="Q&A"
            icon="question-answer"
          />
          <Divider />
          <ListItem
            title="牧師的話"
            icon="format-quote"
          />
          <Divider />
          <ListItem
            title="擴張- 主題曲歌詞"
            icon="queue-music"
          />
          <Divider />
          <ListItem
            title="場地資訊"
            icon="map"
          />
          <Divider />
          <ListItem
            title="參與者回饋"
            icon="feedback"
          />
          <Divider />
        </ListSection>
      </ScrollView>
    );
  }
}
