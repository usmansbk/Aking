import React, {useRef} from 'react';
import {View} from 'react-native';
import {Text, Container, Header, Button, TextInput} from '@components/common';
import {useTheme} from '@config/theme';

export default function ResetPassword({navigation}) {
  const theme = useTheme();
  const passwordRef = useRef(null);
  const confirmRef = useRef(null);

  return (
    <>
      <Header onPressLeftIcon={() => navigation.goBack()} />
      <Container>
        <Text variant="headline">Reset Password</Text>
        <Text variant="subheading" color="gray">
          Reset code was sent to your email. Please enter the code and create
          new password
        </Text>
        <View
          style={{
            paddingVertical: theme.spacing.space(6),
          }}>
          <TextInput
            label="Reset code"
            placeholder="Enter your number"
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => passwordRef.current.focus()}
            style={{
              marginBottom: theme.spacing.space(6),
            }}
          />
          <TextInput
            ref={passwordRef}
            label="New password"
            placeholder="Enter your password"
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => confirmRef.current.focus()}
            secureTextEntry
            style={{
              marginBottom: theme.spacing.space(6),
            }}
          />
          <TextInput
            ref={confirmRef}
            label="Confirm password"
            placeholder="Enter your confirm password"
            secureTextEntry
          />
        </View>
        <Button color="primary" onPress={() => navigation.navigate('Success')}>
          Change password
        </Button>
      </Container>
    </>
  );
}
