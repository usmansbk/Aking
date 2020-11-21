import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Container, Header, Button, TextInput} from '@components/common';
import {useTheme} from '@config/theme';

const styles = StyleSheet.create({
  forgotPassword: {
    alignItems: 'flex-end',
  },
});

export default function SignIn({navigation}) {
  const theme = useTheme();
  const passwordRef = useRef(null);
  return (
    <>
      <Header onPressLeftIcon={() => navigation.goBack()} />
      <Container>
        <Text variant="headline">Welcome back</Text>
        <Text variant="subheading" color="gray">
          Sign in to continue
        </Text>
        <View
          style={{
            paddingVertical: theme.spacing.space(6),
          }}>
          <TextInput
            label="Username"
            placeholder="Enter your username"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            style={{
              marginBottom: theme.spacing.space(6),
            }}
          />
          <TextInput
            ref={passwordRef}
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
          />
          <View style={styles.forgotPassword}>
            <Button
              variant="text"
              onPress={() => navigation.navigate('ForgotPassword')}>
              Forgot password
            </Button>
          </View>
        </View>
        <Button color="primary">Log In</Button>
      </Container>
    </>
  );
}
