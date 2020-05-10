import React from 'react';
import SwipeComponent from './SwipeComponent';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={(e) => {
        console.debug('press', e.nativeEvent);
      }}>Привет мир!</Text>
      <SwipeComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: 360,
    fontSize: 40,
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  }
});
