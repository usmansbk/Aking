import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button} from '@components/common';
import {useTheme} from '@config/theme';
import TextInput from './TextInput';

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
        <Button color="primary">Add Task</Button>
      </View>
    </ScrollView>
  );
}
