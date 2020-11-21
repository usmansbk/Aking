import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {useTheme} from '@config/theme';

const DIAMETER = 8;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: DIAMETER,
    width: DIAMETER,
    borderRadius: DIAMETER / 2,
  },
});

function Dot({currentIndex, index}) {
  const theme = useTheme();
  const opacity = currentIndex.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.4, 1, 0.4],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.dot,
        {
          backgroundColor: theme.colors.darkest,
          margin: theme.spacing.s,
          opacity,
        },
      ]}
    />
  );
}
export default function Pagination({currentIndex}) {
  const theme = useTheme();
  const dot = new Array(3).fill(0);
  return (
    <View style={[styles.container, {padding: theme.spacing.s}]}>
      {dot.map((_, index) => (
        <Dot key={index} currentIndex={currentIndex} index={index} />
      ))}
    </View>
  );
}
