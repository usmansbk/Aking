import React from 'react';
import {Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export default function Avatar({size = 32, url = 'https://i.pravatar.cc/300'}) {
  return (
    <RectButton>
      <Image
        source={{uri: url}}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
      />
    </RectButton>
  );
}
