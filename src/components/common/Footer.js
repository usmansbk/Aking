import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@config/theme';

export default function Footer() {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: theme.palatte.secondary.dark,
          height: theme.spacing.space(10),
        },
      ]}
    />
  );
}
