import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Promo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Promo Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8DC',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4500',
  },
});
