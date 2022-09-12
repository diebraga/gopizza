import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';

import BandImg from '../../assets/brand.png'

import { Container, Content, Title, Brand, ForgotPasswordButton, ForgotPasswordLabel } from './styles';
import { useAuth } from '../../hooks/useAuth';

export const SignIn: React.FC = () => {
  const { signIn, signInIsLoading } = useAuth()
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  
  const handleOnPress = () => {
    signIn(email, password)
  }

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
            onChangeText={setEmail}
          />
          <Input
            type='secondary'
            placeholder='password'
            secureTextEntry
            onChangeText={setPassword}
          />
          <ForgotPasswordButton>
            <ForgotPasswordLabel>I Forgot my password</ForgotPasswordLabel>
          </ForgotPasswordButton>
          <Button
            title='Login'
            isLoading={signInIsLoading}
            type='secondary'
            onPress={handleOnPress}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}
