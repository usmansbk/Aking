import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Button, Text, FAB} from '@components/common';
import {useTheme} from '@config/theme';
import TextInput, {TextField, RoundedInput} from './TextInput';
import DatePicker from './DatePicker';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default function NewTaskForm() {
  const theme = useTheme();
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: theme.spacing.xl,
      }}>
      <View
        style={[
          styles.row,
          {
            paddingHorizontal: theme.spacing.l,
            paddingBottom: theme.spacing.xl,
          },
        ]}>
        <RoundedInput label="For" placeholder="Assignee" />
        <RoundedInput label="In" placeholder="Project" />
      </View>
      <TextInput placeholder="Title" />
      <View
        style={{
          padding: theme.spacing.l,
        }}>
        <TextField label="Description" />
      </View>
      <View style={{paddingVertical: theme.spacing.m}}>
        <DatePicker label="Due Date" />
      </View>
      <View
        style={{
          padding: theme.spacing.l,
        }}>
        <Text variant="label">Add Member</Text>
        <View
          style={{
            paddingVertical: theme.spacing.m,
          }}>
          <FAB size={32} style={{backgroundColor: theme.colors.gray11}} />
        </View>
      </View>
      <View
        style={{
          padding: theme.spacing.l,
        }}>
        <Button color="primary">Add Task</Button>
      </View>
    </ScrollView>
  );
}
