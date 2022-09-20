import React from 'react';
import { View } from 'react-native';

import { Container, Header, Title } from './styles';

const Orders: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Orders Done</Title>
      </Header>
    </Container>
  )
}

export { Orders };