import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Text, FAB} from '@components/common';
import {useTheme} from '@config/theme';
import TextInput, {TextField} from './TextInput';

export default function NewTaskForm() {
  const theme = useTheme();
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: theme.spacing.xl,
      }}>
      <TextInput placeholder="Title" />
      <View
        style={{
          padding: theme.spacing.l,
        }}>
        <TextField label="Description" />
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
