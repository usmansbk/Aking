import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import moment from 'moment';
import Text from '../Text';
import Icon from '../Icon';
import {useTheme} from '@config/theme';
import {range, dates} from './utils';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekdays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dates: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  date: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default function Calendar() {
  const theme = useTheme();
  const [date, setDate] = useState(new Date());
  return (
    <View
      style={[
        {
          backgroundColor: theme.palatte.background.main,
          elevation: theme.shape.elevation,
        },
      ]}>
      <MonthHeader date={date} />
      <WeekHeader />
    </View>
  );
}

function WeekHeader() {
  const theme = useTheme();

  return (
    <View style={[styles.weekdays, {paddingBottom: theme.spacing.m}]}>
      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index, array) => (
        <Text
          key={index}
          variant="sectionHeader"
          color={index === array.length - 1 ? 'primary' : 'sectionHeader'}>
          {day}
        </Text>
      ))}
    </View>
  );
}

function MonthHeader({onPress, date = moment().toISOString(), expanded}) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.header, {paddingVertical: theme.spacing.l}]}>
      <Text variant="sectionHeader" style={{marginRight: theme.spacing.s}}>
        {moment(date).format('MMMM YYYY').toUpperCase()}
      </Text>
      <Icon name={expanded ? 'chevron-down' : 'chevron-up'} size={14} />
    </TouchableOpacity>
  );
}
