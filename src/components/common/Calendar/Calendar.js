import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import moment from 'moment';
import Text from '../Text';
import Icon from '../Icon';
import {useTheme} from '@config/theme';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Calendar() {
  return (
    <View>
      <Header />
      <Text>Calendar</Text>
    </View>
  );
}

function Header({onPress, date = moment().toISOString(), expanded}) {
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
