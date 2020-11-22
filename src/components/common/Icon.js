import React from 'react';
import ArrowLeft from '@assets/svgs/ArrowLeft.svg';
import Check from '@assets/svgs/Check.svg';
import List from '@assets/svgs/List.svg';
import Menu from '@assets/svgs/Menu.svg';
import Person from '@assets/svgs/Person.svg';
import {useTheme} from '@config/theme';

export default function Icon({size = 24, color, name}) {
  const theme = useTheme();

  let Component = null;

  switch (name) {
    case 'arrow-left':
      Component = ArrowLeft;
      break;
    case 'check':
      Component = Check;
      break;
    case 'list':
      Component = List;
      break;
    case 'menu':
      Component = Menu;
      break;
    case 'person':
      Component = Person;
      break;
    default:
      Component = ArrowLeft;
  }

  return (
    <Component
      width={size}
      height={size}
      fill={color || theme.colors.iconBlack}
      fillSecondary="white"
    />
  );
}
