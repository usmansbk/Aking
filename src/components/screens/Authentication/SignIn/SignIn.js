import React from 'react';
import {Text, Container, Header, Button} from '@components/common';

export default function SignIn() {
  return (
    <>
      <Header />
      <Container>
        <Text variant="headline">Welcome back</Text>
        <Text variant="subheading" color="gray">
          Sign in to continue
        </Text>
        <Button color="primary">Log In</Button>
      </Container>
    </>
  );
}
