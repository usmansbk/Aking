import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';
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
    <MenuProvider
      backHandler
      customStyles={{
        backdrop: {
          backgroundColor: theme.colors.backdrop,
          opacity: 0.3,
        },
      }}>
      <ThemeProvider value={theme}>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </ThemeProvider>
    </MenuProvider>
  );
}
