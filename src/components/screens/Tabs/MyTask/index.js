import React from 'react';
import {Container, Header} from '@components/common';
import {useTheme} from '@config/theme';

export default function Menu() {
  const theme = useTheme();

  return (
    <>
      <Header
        title="Work List"
        barStyle="light-content"
        backgroundColor={theme.palatte.primary.main}
      />
      <Container></Container>
    </>
  );
}
