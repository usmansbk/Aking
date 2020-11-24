import React, {useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Button, Text, FAB, Avatar} from '@components/common';
import {useTheme} from '@config/theme';
import TextInput, {TextField, RoundedInput} from './TextInput';
import DatePicker from './DatePicker';
import Dropdown from './Dropdown';

const members = [1, 2, 3, 4];

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  members: {
    flexDirection: 'row',
  },
});

const users = [
  {
    title: 'Stephen Chow',
    subtitle: 'Stephenchow@company.com',
  },
];

export default function NewTaskForm() {
  const theme = useTheme();
  const [showResult, setResultVisible] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {
          paddingVertical: theme.spacing.xl,
        },
      ]}>
      <View
        style={[
          styles.row,
          {
            paddingHorizontal: theme.spacing.l,
            paddingBottom: theme.spacing.xl,
          },
        ]}>
        <RoundedInput
          label="For"
          placeholder="Assignee"
          onFocus={() => setResultVisible(true)}
          onBlur={() => setResultVisible(false)}
        />
        <RoundedInput label="In" placeholder="Project" />
      </View>
      {showResult ? (
        <Dropdown data={users} />
      ) : (
        <>
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
              style={[
                styles.members,
                {
                  paddingVertical: theme.spacing.m,
                },
              ]}>
              {members.map((_, index) => (
                <View
                  key={index}
                  style={{
                    marginHorizontal: theme.spacing.s,
                  }}>
                  <Avatar size={32} />
                </View>
              ))}
              <FAB size={32} style={{backgroundColor: theme.colors.gray11}} />
            </View>
          </View>
          <View
            style={{
              padding: theme.spacing.l,
            }}>
            <Button color="primary">Add Task</Button>
          </View>
        </>
      )}
    </ScrollView>
  );
}
