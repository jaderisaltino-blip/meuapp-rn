import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoSection({ text }: { text: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F9FF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    color: '#003366',
    fontSize: 16,
    textAlign: 'center',
  },
});
