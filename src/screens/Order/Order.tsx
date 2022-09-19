import React, { useState } from 'react';
import { Platform } from 'react-native';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { RadioButton } from '../../components/RadioButton/RadioButton';
import { pizzasSizes } from '../../utils/pizzasSizes';

import { Container, Header, Photo, Sizes } from './styles';

const Order: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState("")
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
        {pizzasSizes.map(({ name, id }) => {
          return (
            <RadioButton
              title={name}
              selected={selectedSize === id}
              key={id}
              onPress={() => setSelectedSize(id)}
            />
          )
        })}
      </Sizes>
    </Container>
  )
}

export { Order };