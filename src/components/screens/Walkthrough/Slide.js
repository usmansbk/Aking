import React from 'react';
import {View, Image} from 'react-native';
import {Text} from '@components/common';

export default function Slide({title, subtitle, image, footer}) {
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      <Image source={footer} />
    </View>
  );
}
