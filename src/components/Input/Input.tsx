import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputProps } from './styles';

type Props = TextInputProps & {
  type?: InputProps;
}

export const Input: React.FC<Props> = ({ type = "primary", ...rest }) => {
  return <Container {...rest} type={type} />
}

