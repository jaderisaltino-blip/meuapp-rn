import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function NavigationButtons() {
  const buttons = [1, 2, 3, 4, 5, 6];

  return (
    <View style={styles.container}>
      {buttons.map((num) => (
        <TouchableOpacity key={num} style={styles.button}>
          <Text style={styles.text}>{num}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    margin: 8,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
