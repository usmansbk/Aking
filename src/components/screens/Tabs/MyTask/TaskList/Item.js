import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@config/theme';
import {Text, CheckBox} from '@components/common';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
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
  status: {
    height: '30%',
  },
  completed: {
    textDecorationLine: 'line-through',
  },
});

export default function Item({title, time, completed}) {
  const theme = useTheme();
  const completedStyle = completed
    ? {
        textDecorationLine: 'line-through',
        color: theme.palatte.text.lineThrough,
      }
    : {};

  return (
    <RectButton
      style={[
        styles.container,
        {
          paddingLeft: theme.spacing.m,
          elevation: theme.shape.elevation,
          backgroundColor: theme.palatte.background.main,
          borderRadius: theme.shape.radius,
        },
      ]}>
      <CheckBox checked={completed} onPress={() => null} />
      <View
        style={[
          styles.body,
          {
            paddingLeft: theme.spacing.m,
          },
        ]}>
        <Text numberOfLines={1} style={[styles.title, completedStyle]}>
          {title}
        </Text>
        <Text
          style={[
            styles.subtitle,
            {
              color: theme.palatte.text.gray,
            },
            completedStyle,
          ]}>
          {time}
        </Text>
      </View>
      <Status completed={completed} />
    </RectButton>
  );
}

function Status({completed}) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.status,
        {
          width: theme.spacing.s,
          backgroundColor: completed ? theme.colors.red : theme.colors.blue,
        },
      ]}
    />
  );
}
