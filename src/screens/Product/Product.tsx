import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import { Container, Title, Header, DeleteLabel } from './styles';

const Product: React.FC = () => {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <Title>Register</Title>

        <TouchableOpacity>
          <DeleteLabel>
            Delete
          </DeleteLabel>
        </TouchableOpacity>
      </Header>
    </Container>
  )
}

export { Product };