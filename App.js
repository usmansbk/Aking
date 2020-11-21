import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import ThemeProvider, {theme} from '@config/theme';
import {Text, Button} from '@components/common';

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
      <Button>Get Started</Button>
      <Button variant="text">Log In</Button>
      <Button color="primary">Log In</Button>
      <Button color="secondary">Log In</Button>
    </ThemeProvider>
  );
}
