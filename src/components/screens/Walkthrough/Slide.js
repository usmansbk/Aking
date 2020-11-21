import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {Text} from '@components/common';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
  body: {},
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default function Slide({title, subtitle, image, footer}) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={image} />
        <Text variant="title">{title}</Text>
        <Text variant="subtitle">{subtitle}</Text>
      </View>
      <View style={styles.footer}>
        <Image source={footer} />
      </View>
    </View>
  );
}
