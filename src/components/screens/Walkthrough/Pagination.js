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
export default function Pagination({currentIndex, pages = 3}) {
  const theme = useTheme();
  const dots = new Array(pages).fill(0);
  return (
    <View style={[styles.container, {padding: theme.spacing.s}]}>
      {dots.map((_, index) => (
        <Dot key={index} currentIndex={currentIndex} index={index} />
      ))}
    </View>
  );
}
