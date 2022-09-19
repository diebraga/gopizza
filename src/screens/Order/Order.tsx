import React from 'react';
import { Platform, View } from 'react-native';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { RadioButton } from '../../components/RadioButton/RadioButton';

import { Container, Header, Photo, Sizes } from './styles';

const Order: React.FC = () => {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <ButtonBack
          onPress={() => { }}
          style={{ marginBottom: 108 }}
        />
      </Header>

      <Photo source={{ uri: "https://github.com/diebraga.png" }} />

      <Sizes>
        <RadioButton
          title='small'
          selected
        />
      </Sizes>
    </Container>
  )
}

export { Order };