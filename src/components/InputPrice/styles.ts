import { TextInput } from "react-native";
import styled from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  height: 56px;
  border: 1px solid ${p => p.theme.COLORS.SHAPE};
  border-radius: 12px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`

export const Size = styled.View`
  height: 56px;
  align-items: center;
  justify-content: center;
  width: 56px;
  border-right-width: 1px;
  border-right-color: ${p => p.theme.COLORS.SHAPE};
  margin-right: 18px;
`

export const Label = styled.Text`
  font-size: 14px;

  font-family: ${p => p.theme.FONTS.TEXT};
  color: ${p => p.theme.COLORS.SECONDARY_900};
`

export const Input = styled(TextInput)`
  flex: 1;
  margin-left: 7px;
`