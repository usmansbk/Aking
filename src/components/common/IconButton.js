import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '@config/theme';
import Icon from './Icon';

export default function IconButton({name, size, onPress}) {
  const theme = useTheme();
  return (
    <TouchableOpacity style={{padding: theme.spacing.xs}} onPress={onPress}>
      <Icon name={name} size={size} />
    </TouchableOpacity>
  );
}
