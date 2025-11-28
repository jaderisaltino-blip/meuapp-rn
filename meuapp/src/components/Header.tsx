import React from 'react';
import { View, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/logo.png')}
        style={styles.logo}
      />
      
      <View style={styles.searchBox}>
        <TextInput placeholder="Pesquisar..." style={styles.input} />
        <Ionicons name="search" size={20} color="#333" />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Ionicons name="person-circle-outline" size={30} color="#007BFF" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#E6F0FF',
  },
  logo: {
    width: 40,
    height: 40,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 8,
    flex: 1,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 6,
  },
  loginButton: {
    padding: 5,
  },
});
