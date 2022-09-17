import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from "@expo/vector-icons";

import {
  Button,
  ClearButton,
  Container,
  InputArea,
  SearchInput
} from './styles';
import { useTheme } from 'styled-components/native';

type Props = TextInputProps & {
  onSearch: () => void;
  onClear: () => void;
}

export const Search: React.FC<Props> = ({ onClear, onSearch, ...rest }) => {
  const { COLORS } = useTheme()
  return (
    <Container>
      <InputArea>
        <SearchInput placeholder='search' {...rest} />

        <ClearButton onPress={onClear}>
          <Feather name='x' size={16} />
        </ClearButton>
      </InputArea>

      <Button onPress={onSearch}>
        <Feather name='search' size={16} color={COLORS.TITLE} />
      </Button>
    </Container>
  )
}
