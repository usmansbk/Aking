import React from 'react';
import ArrowLeft from '@assets/svgs/ArrowLeft.svg';
import Check from '@assets/svgs/Check.svg';
import List from '@assets/svgs/List.svg';
import Menu from '@assets/svgs/Menu.svg';
import Person from '@assets/svgs/Person.svg';
import Options from '@assets/svgs/Options.svg';
import Checked from '@assets/svgs/Checked.svg';
import Unchecked from '@assets/svgs/Unchecked.svg';
import Pen from '@assets/svgs/Pen.svg';
import Trash from '@assets/svgs/Trash.svg';
import Mark from '@assets/svgs/Mark.svg';
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
    case 'options':
      Component = Options;
      break;
    case 'checked':
      Component = Checked;
      break;
    case 'unchecked':
      Component = Unchecked;
      break;
    case 'pen':
      Component = Pen;
      break;
    case 'trash':
      Component = Trash;
      break;
    case 'mark':
      Component = Mark;
      break;
    default:
      Component = ArrowLeft;
  }

  return (
    <Component
      width={size}
      height={size}
      fill={color || theme.colors.iconBlack}
      fillSecondary={theme.palatte.background.main}
    />
  );
}
