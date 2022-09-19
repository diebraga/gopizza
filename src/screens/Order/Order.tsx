import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from '../../components/Button/Button';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { Input } from '../../components/Input/Input';
import { RadioButton } from '../../components/RadioButton/RadioButton';
import { pizzasSizes } from '../../utils/pizzasSizes';

import { Container, Form, FormRow, Header, InputGroup, Label, Photo, Price, Sizes, Title } from './styles';

const Order: React.FC = () => {
  const { colors } = useTheme()
  const [selectedSize, setSelectedSize] = useState("")
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: colors.background }}>
        <Header>
          <ButtonBack
            onPress={() => { }}
            style={{ marginBottom: 108 }}
          />
        </Header>

        <Photo source={{ uri: "https://github.com/diebraga.png" }} />

        <Form>
          <Title>Pizza name</Title>
          <Label>Select a size</Label>
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

          <FormRow>
            <InputGroup>
              <Label>Table number</Label>
              <Input keyboardType='numeric' />
            </InputGroup>
            <InputGroup>
              <Label>Quantity</Label>
              <Input keyboardType='numeric' />
            </InputGroup>
          </FormRow>
          <Price>Price: $ 00.00</Price>

          <Button
            title='Confirm'
          />
        </Form>
      </ScrollView>
    </Container>
  )
}

export { Order };