import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Companion</Text>
      <Text style={styles.subtitle}>Welcome to CST Student Helper App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold',
    marginBottom: 10 
  },
  subtitle: { 
    fontSize: 16, 
    color: 'gray' 
  }
});