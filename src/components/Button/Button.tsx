import React from 'react';
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, ButtonProps, LoadingSpinner, Title } from './styles';

type Props = RectButtonProps & {
  type?: ButtonProps
  title: string
  isLoading?: boolean
}

export const Button: React.FC<Props> = ({ isLoading = false, type = "primary", title, ...rest }) => {
  return (
    <Container type={type} enabled={!isLoading} {...rest}>
      {!isLoading ? <Title>{title}</Title> : <LoadingSpinner />}
    </Container>
  )
}

