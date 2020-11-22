import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@config/theme';
import {Text} from '@components/common';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
  },
  title: {
    fontFamily: 'Medium',
    fontSize: 16,
    lineHeight: 24,
  },
  subtitle: {
    fontFamily: 'Medium',
    fontSize: 16,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default function Item({title, time}) {
  const theme = useTheme();

  return (
    <RectButton
      style={[
        styles.container,
        {
          paddingHorizontal: theme.spacing.m,
          elevation: theme.shape.elevation,
          backgroundColor: theme.palatte.background.main,
          borderRadius: theme.shape.radius,
        },
      ]}>
      <View style={styles.body}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text style={[styles.subtitle, {color: theme.palatte.text.gray}]}>
          {time}
        </Text>
      </View>
    </RectButton>
  );
}
