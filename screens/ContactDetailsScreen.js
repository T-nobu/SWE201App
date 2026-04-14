import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContactDetailsScreen({ route }) {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Details</Text>
      <Text style={styles.text}>Name: {contact.name}</Text>
      <Text style={styles.text}>Phone: {contact.phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    marginBottom: 5
  }
});