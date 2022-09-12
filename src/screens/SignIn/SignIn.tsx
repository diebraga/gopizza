import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';

import BandImg from '../../assets/brand.png'

import { Container, Content, Title, Brand, ForgotPasswordButton, ForgotPasswordLabel } from './styles';

export const SignIn: React.FC = () => {

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <Content>

          <Brand source={BandImg} />
          <Title>SignIn</Title>
          <Input
            type='secondary'
            placeholder='email'
            autoCorrect={false}
            autoCapitalize='none'
          />
          <Input
            type='secondary'
            placeholder='password'
            secureTextEntry
          />
          <ForgotPasswordButton>
            <ForgotPasswordLabel>I Forgot my password</ForgotPasswordLabel>
          </ForgotPasswordButton>
          <Button
            title='Login'
            isLoading={false}
            type='secondary'
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}
