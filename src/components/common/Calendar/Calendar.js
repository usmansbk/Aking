import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Text from '../Text';
import Icon from '../Icon';
import {useTheme} from '@config/theme';
import {
  formatMonth,
  getWeekDates,
  formatDay,
  isSameDay,
  dateString,
  getDate,
  isDateMarked,
} from './utils';

const DAY_SIZE = 48;

const styles = StyleSheet.create({
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  day: {
    width: DAY_SIZE,
    height: DAY_SIZE,
    borderRadius: DAY_SIZE / 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    position: 'absolute',
    bottom: 4,
  },
});

export default function Calendar({
  dots = [dateString(2), dateString(5), dateString(-20)],
}) {
  const theme = useTheme();
  const [date, setDate] = useState(getDate());
  return (
    <View
      style={[
        {
          backgroundColor: theme.palatte.background.main,
          elevation: theme.shape.elevation,
          paddingBottom: theme.spacing.l,
        },
      ]}>
      <MonthHeader date={date} />
      <WeekHeader />
      <Weeks
        dots={dots}
        date={date}
        onDateChange={(newDate) => setDate(newDate)}
      />
    </View>
  );
}

function MonthHeader({onPress, date = new Date(), expanded}) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.monthHeader, {paddingVertical: theme.spacing.l}]}>
      <Text variant="sectionHeader" style={{marginRight: theme.spacing.s}}>
        {formatMonth(date)}
      </Text>
      <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={14} />
    </TouchableOpacity>
  );
}

function WeekHeader() {
  const theme = useTheme();

  return (
    <View style={[styles.weekHeader, {paddingBottom: theme.spacing.m}]}>
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

function Weeks({date, onDateChange = () => null, dots = []}) {
  const weeks = getWeekDates(date);
  return (
    <View>
      {weeks.map((week, index) => (
        <Week
          key={index}
          week={week}
          date={date}
          onDateChange={onDateChange}
          dots={dots}
        />
      ))}
    </View>
  );
}

function Week({week = [], date, onDateChange, dots = []}) {
  return (
    <View style={styles.weekRow}>
      {week.map((day, index) => (
        <Day
          key={index}
          day={day}
          isCurrentDate={isSameDay(date, day.date)}
          onPress={onDateChange}
          dot={isDateMarked(dots, day.date)}
        />
      ))}
    </View>
  );
}

function Day({day, isCurrentDate, onPress, dot}) {
  const theme = useTheme();
  let colors = theme.palatte.date;

  if (day.isToday) {
    colors = theme.palatte.today;
  }
  if (isCurrentDate) {
    colors = theme.palatte.selectedDay;
  }

  return (
    <RectButton
      onPress={() => onPress(day.date)}
      style={[
        styles.day,
        {
          marginBottom: theme.spacing.xs,
          backgroundColor: colors.backgroundColor,
        },
      ]}>
      <Text
        variant="sectionHeader"
        color={day.sameMonth ? 'main' : 'sectionHeader'}
        style={{
          color: isCurrentDate
            ? colors.text
            : day.sameMonth
            ? theme.palatte.text.main
            : theme.palatte.text.sectionHeader,
        }}>
        {formatDay(day.date)}
      </Text>
      {dot && (
        <View style={styles.dot}>
          <Icon name="dot" size={5} />
        </View>
      )}
    </RectButton>
  );
}
