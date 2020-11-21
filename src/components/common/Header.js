import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@config/theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {},
});

export default function Header({title}) {
  const theme = useTheme();
  return (
    <View
      style={{
        padding: theme.spacing.l,
      }}>
      <Text>{title}</Text>
    </View>
  );
}
