import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {Text} from '@components/common';

const {width, height} = Dimensions.get('window');
const IMAGE_SIZE = height * 0.3;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
});

export default function Slide({title, subtitle, image}) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image resizeMode="contain" source={image} style={styles.image} />
        <Text variant="title">{title}</Text>
        <Text variant="subtitle">{subtitle}</Text>
      </View>
    </View>
  );
}
