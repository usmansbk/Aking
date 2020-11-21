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

function Dot({x, index}) {
  const theme = useTheme();

  return (
    <Animated.View
      style={[
        styles.dot,
        {
          backgroundColor: theme.colors.darkest,
          margin: theme.spacing.s,
        },
      ]}
    />
  );
}
export default function Pagination({scrollX}) {
  const theme = useTheme();
  const dot = new Array(3).fill(0);
  return (
    <View style={[styles.container, {padding: theme.spacing.s}]}>
      {dot.map((_, index) => (
        <Dot key={index} x={scrollX} index={index} />
      ))}
    </View>
  );
}
