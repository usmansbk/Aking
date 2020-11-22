import React from 'react';
import ArrowLeft from '@assets/svgs/ArrowLeft.svg';

export default function Icon({size = 24, color = 'black'}) {
  return (
    <ArrowLeft width={size} height={size} fill={color} fillSecondary="white" />
  );
}
