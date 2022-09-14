import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { Photo } from '../../components/Photo/Photo';

import { Container, Title, Header, DeleteLabel, PickImageButton, UploadView } from './styles';

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
      <UploadView>
        <Photo uri='' />
        <PickImageButton title='Load' type='secondary' />
      </UploadView>
    </Container>
  )
}

export { Product };