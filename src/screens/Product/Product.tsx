import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { Photo } from '../../components/Photo/Photo';

import { Container, Title, Header, DeleteLabel } from './styles';

const Product: React.FC = () => {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <ButtonBack />
        <Title>Register</Title>

        <TouchableOpacity>
          <DeleteLabel>
            Delete
          </DeleteLabel>
        </TouchableOpacity>
      </Header>

      <Photo uri=''/>
    </Container>
  )
}

export { Product };