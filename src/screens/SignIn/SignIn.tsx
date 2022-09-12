import React from 'react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';

import { Container } from './styles';

export const SignIn: React.FC = () => {
  return (
    <Container>
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
      <Button
        title='Login'
        isLoading={false}
        type='secondary'
      />
    </Container>
  )
}
