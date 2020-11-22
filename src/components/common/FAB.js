import React from 'react';
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@config/theme';
import Text from './Text';

const SIZE = 56;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function AkingFAB({size = SIZE, onPress}) {
  const theme = useTheme();
  return (
    <RectButton
      onPress={onPress}
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: theme.colors.red,
        },
      ]}>
      <Text style={{fontSize: size / 2}} color="contrast">
        +
      </Text>
    </RectButton>
  );
}
