import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import ThemeProvider, {theme} from '@config/theme';
import {Text} from '@components/common';

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider value={theme}>
      <Text variant="title">Welcome to aking</Text>
      <Text variant="subtitle">Whats going to happen tomorrow?</Text>
    </ThemeProvider>
  );
}
