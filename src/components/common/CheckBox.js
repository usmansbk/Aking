import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@config/theme';
import Icon from './Icon';

const SIZE = 48;

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function CheckBox({checked, onPress}) {
  const theme = useTheme();
  const onValueChange = useCallback(() => onPress(!checked), [
    checked,
    onPress,
  ]);
  return (
    <RectButton onPress={onValueChange} style={styles.container}>
      <Icon
        color={theme.palatte.background.main}
        name={checked ? 'checked' : 'unchecked'}
        size={SIZE / 2}
      />
    </RectButton>
  );
}
