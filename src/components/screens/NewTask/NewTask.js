import React from 'react';
import {View} from 'react-native';
import {Text, Header} from '@components/common';
import {useTheme} from '@config/theme';

export default function NewTask({navigation}) {
  const theme = useTheme();

  return (
    <>
      <Header
        backgroundColor={theme.palatte.primary.main}
        barStyle="light-content"
        leftIcon="arrow-left"
        onPressLeftIcon={() => navigation.goBack()}
        iconColor={theme.palatte.background.main}
      />
      <View>
        <Text>New Task</Text>
      </View>
    </>
  );
}
