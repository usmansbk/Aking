import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useTheme} from '@config/theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default function Container({children}) {
  const theme = useTheme();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{
        backgroundColor: theme.palatte.background.main,
        padding: theme.spacing.l,
      }}>
      {children}
    </ScrollView>
  );
}
