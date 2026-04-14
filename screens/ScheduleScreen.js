import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function ScheduleScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.item}>Monday: SWE201 - Cross Platform Dev</Text>
      <Text style={styles.item}>Tuesday: DBS101 - Database Systems</Text>
      <Text style={styles.item}>Wednesday: SWS101 - Security</Text>
      <Text style={styles.item}>Thursday: SDA202 - Software Design</Text>
      <Text style={styles.item}>Friday: Project Work</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
  },
  item: { 
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8
  }
});