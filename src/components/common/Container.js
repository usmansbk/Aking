import React from 'react';
import {ScrollView} from 'react-native';
import {useTheme} from '@config/theme';

export default function Container({children}) {
  const theme = useTheme();

  return (
    <ScrollView
      style={{
        backgroundColor: theme.palatte.background.main,
        padding: theme.spacing.l,
      }}>
      {children}
    </ScrollView>
  );
}
