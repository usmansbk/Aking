import React from 'react';
import {View} from 'react-native';
import moment from 'moment';
import Text from '../Text';
import {useTheme} from '@config/theme';

export default function Calendar() {
  return (
    <View>
      <Header />
      <Text>Calendar</Text>
    </View>
  );
}

function Header() {
  return (
    <View>
      <Text>{moment().format('MMMM YYYY')}</Text>
    </View>
  );
}
