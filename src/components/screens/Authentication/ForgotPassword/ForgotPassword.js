import React from 'react';
import {View} from 'react-native';
import {Text, Container, Header, Button, TextInput} from '@components/common';
import {useTheme} from '@config/theme';

export default function SignIn({navigation}) {
  const theme = useTheme();
  return (
    <>
      <Header onPressLeftIcon={() => navigation.goBack()} />
      <Container>
        <Text variant="headline">Forgot Password</Text>
        <Text variant="subheading" color="gray">
          Please enter your email below to receive your password reset
          instructions
        </Text>
        <View
          style={{
            paddingVertical: theme.spacing.space(6),
          }}>
          <TextInput label="Username" placeholder="Enter your username" />
        </View>
        <Button color="primary">Send Request</Button>
      </Container>
    </>
  );
}
