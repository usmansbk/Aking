import React from 'react';
import {ScrollView} from 'react-native';
import {Text} from '@components/common';
import {useTheme} from '@config/theme';

export default function NewTaskForm() {
  const theme = useTheme();
  return (
    <ScrollView>
      <Text>Form</Text>
    </ScrollView>
  );
}
