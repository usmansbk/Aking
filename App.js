import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import ThemeProvider, {theme} from '@config/theme';
import Screens from '@components/screens';

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider value={theme}>
      <Screens />
    </ThemeProvider>
  );
}
