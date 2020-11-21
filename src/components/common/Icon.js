import React from 'react';
import {Image} from 'react-native';

function getSource(name) {
  switch (name) {
    case 'arrow-back':
      return require('@assets/icons/arrow_left.png');
    default:
      return require('@assets/icons/arrow_left.png');
  }
}

export default function Icon({name = 'arrow-back', size = 24, dark}) {
  return (
    <Image
      source={getSource(name)}
      resizeMode="contain"
      style={{width: size, height: size}}
    />
  );
}
