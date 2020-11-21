import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {useTheme} from '@config/theme';
import IconButton from './IconButton';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default function Header({title, leftIcon}) {
  const theme = useTheme();
  return (
    <>
      <StatusBar
        backgroundColor={theme.palatte.background.main}
        barStyle="dark-content"
      />
      <View
        style={[
          styles.container,
          {
            padding: theme.spacing.m,
            backgroundColor: theme.palatte.background.main,
            height: theme.spacing.l * 4,
          },
        ]}>
        <IconButton name={leftIcon} />
        <Text>{title}</Text>
      </View>
    </>
  );
}
