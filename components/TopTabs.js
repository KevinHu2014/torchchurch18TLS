import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ListSection, ListItem, Divider } from 'react-native-paper';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
const Schedule = () => (
  <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <ListSection title="10:00 AM">
      <ListItem
        title="Keynote"
        description="KEYNOTE - 1 HOUR 30 MIN"
      />
    </ListSection>
    <Divider />
    <ListSection title="11:30 AM">
      <ListItem
        title="Lunch"
        description="1 HOUR 30 MIN"
      />
      <ListItem
        title="Demos, Office Hours"
        description="UNTIL 4:00PM"
      />
    </ListSection>
    <Divider />
    <ListSection title="12:30 PM">
      <ListItem
        title="The Impact of VR in Nigeria"
        description="210 H - 20 MIN"
      />
      <ListItem
        title="The Social Impact of AI"
        description="UNTIL 4:00PM"
      />
    </ListSection>
  </ScrollView>
);
const Day1 = () => (
  <Schedule />
);

const Day2 = () => (
  <Schedule />
);

const Day3 = () => (
  <Schedule />
);

export default createMaterialTopTabNavigator({
  Day1,
  Day2,
  Day3,
});
