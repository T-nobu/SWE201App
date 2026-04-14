import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const contacts = [
  { id: '1', name: 'IT Helpdesk', phone: '17123456' },
  { id: '2', name: 'Student Services', phone: '77234567' },
  { id: '3', name: 'Library', phone: '17654321' },
];

export default function ContactsScreen({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const width = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.item,
              { width: width * 0.9 },
              item.id === selectedId && styles.selected
            ]}
            onPress={() => {
              setSelectedId(item.id);
              navigation.navigate('Details', { contact: item });
            }}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    padding: 10 
  },
  item: { 
    padding: 15, 
    backgroundColor: '#ddd', 
    marginBottom: 10,
    borderRadius: 10 
  },
  selected: {
    backgroundColor: '#a5d6a7'
  },
  text: {
    fontSize: 16
  }
});