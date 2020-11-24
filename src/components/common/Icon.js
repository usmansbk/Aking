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
import ChevronUp from '@assets/svgs/ChevronUp.svg';
import ChevronDown from '@assets/svgs/ChevronDown.svg';
import Dot from '@assets/svgs/Dot.svg';
import {useTheme} from '@config/theme';

export default function Icon({size = 24, color, name, fillColor}) {
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
    case 'chevron-up':
      Component = ChevronUp;
      break;
    case 'chevron-down':
      Component = ChevronDown;
      break;
    case 'dot':
      Component = Dot;
      break;
    default:
      Component = ArrowLeft;
  }

  return (
    <Component
      width={size}
      height={size}
      fill={color || theme.colors.black}
      fillSecondary={fillColor || theme.palatte.background.main}
    />
  );
}
