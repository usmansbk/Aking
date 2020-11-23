import React from 'react';
import {View, StyleSheet} from 'react-native';
import StatusBar from './StatusBar';
import {useTheme} from '@config/theme';
import IconButton from './IconButton';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 48,
  },
});

export default function Header({
  title,
  leftIcon,
  rightIcon = () => null,
  onPressLeftIcon,
  backgroundColor,
  barStyle,
}) {
  const theme = useTheme();
  return (
    <>
      <StatusBar
        backgroundColor={backgroundColor || theme.palatte.background.main}
        barStyle={barStyle || 'dark-content'}
      />
      <View
        style={[
          styles.container,
          {
            padding: theme.spacing.m,
            backgroundColor: backgroundColor || theme.palatte.background.main,
            height: theme.spacing.l * 4,
          },
        ]}>
        <View style={styles.icon}>
          {!!onPressLeftIcon && (
            <IconButton name={leftIcon} onPress={onPressLeftIcon} />
          )}
        </View>
        <View style={styles.title}>
          <Text
            variant="headerTitle"
            color={barStyle === 'dark-content' ? 'text' : 'contrast'}>
            {title}
          </Text>
        </View>
        <View style={styles.icon}>{rightIcon()}</View>
      </View>
    </>
  );
}
