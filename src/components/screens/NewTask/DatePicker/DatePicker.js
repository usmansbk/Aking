import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@components/common';
import {useTheme} from '@config/theme';
import {RectButton} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerButton: {
    borderRadius: 5,
  },
});

export default function DatePicker({label, value = 'Anytime'}) {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.palatte.textInput.background,
          paddingHorizontal: theme.spacing.l,
          height: theme.spacing.space(8),
        },
      ]}>
      <Text variant="label">{label}</Text>
      <View
        style={[
          styles.pickerButton,
          {
            marginHorizontal: theme.spacing.m,
            backgroundColor: theme.colors.blue,
          },
        ]}>
        <RectButton>
          <View
            style={{
              padding: theme.spacing.m,
              paddingHorizontal: theme.spacing.l,
            }}>
            <Text variant="picker" color="contrast">
              {value}
            </Text>
          </View>
        </RectButton>
      </View>
    </View>
  );
}
