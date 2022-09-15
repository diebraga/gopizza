import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Input, Label, Size } from './styles';

type Props = TextInputProps & {
  size: string
}

export const InputPrice: React.FC<Props> = ({ size, ...rest }) => {
  return (
    <Container>
      <Size>
        <Label>
          {size}
        </Label>
      </Size>

      <Label>$</Label>

      <Input keyboardType='numeric' {...rest} />
    </Container>
  )
}

