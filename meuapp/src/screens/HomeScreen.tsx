import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import NavigationButtons from '../components/NavigationButtons';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <InfoSection text="Bem-vindo ao MeuApp Multifunções! Aqui você encontrará várias ferramentas úteis em um só lugar." />
      <NavigationButtons />
      <InfoSection text="Toque em um botão acima para explorar novas funcionalidades!" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#EAF2FF',
  },
});
