import React from 'react';
import {View, StatusBar} from 'react-native';
import {useTheme} from '@config/theme';
import IconButton from './IconButton';
import Text from './Text';

export default function Header({title, leftIcon}) {
  const theme = useTheme();
  return (
    <>
      <StatusBar
        backgroundColor={theme.palatte.background.main}
        barStyle="dark-content"
      />
      <View
        style={{
          backgroundColor: theme.palatte.background.main,
          padding: theme.spacing.l,
        }}>
        <IconButton name={leftIcon} />
        <Text>{title}</Text>
      </View>
    </>
  );
}
