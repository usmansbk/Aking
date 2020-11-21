import React, {useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

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
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Text style={styles.demi}>Aking</Text>
      <Text style={styles.medium}>Aking</Text>
      <Text style={styles.regular}>Aking</Text>
    </>
  );
}
