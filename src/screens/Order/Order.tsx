import React from 'react';
import { Platform, View } from 'react-native';
import ButtonBack from '../../components/ButtonBack/ButtonBack';

import { Container, Header } from './styles';

const Order: React.FC = () => {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <ButtonBack
          onPress={() => { }}
          style={{ marginBottom: 108 }}
        />
      </Header>
    </Container>
  )
}

export { Order };