import styled from 'styled-components/native';
import { TextInput } from "react-native";
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: -30px;
  padding: 0 24px;
`;

export const InputArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;

  background-color: ${p => p.theme.COLORS.TITLE};
  border: ${p => p.theme.COLORS.SHAPE};
`

export const SearchInput = styled(TextInput)`
  flex: 1;
  height: 52px;
  padding-left: 12px;
  font-family: ${p => p.theme.FONTS.TEXT};
`

export const ClearButton = styled.TouchableOpacity`
  margin-right: 7px;
`

export const Button = styled(RectButton)`
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.COLORS.SUCCESS_900};
  border-radius: 18px;
  margin-left: 7px;
`

