import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  demi: {
    fontFamily: 'Demi',
  },
  regular: {
    fontFamily: 'Regular',
  },
  medium: {
    fontFamily: 'Medium',
  },
});

export default function App() {
  return (
    <>
      <Text style={styles.demi}>Aking</Text>
      <Text style={styles.medium}>Aking</Text>
      <Text style={styles.regular}>Aking</Text>
    </>
  );
}
