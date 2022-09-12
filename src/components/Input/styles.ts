import { TextInput } from "react-native";
import styled from "styled-components/native";

export type InputProps = "primary" | "secondary"

type Props = {
  type: InputProps
}

export const Container = styled(TextInput).attrs<Props>(p => ({
  placeholderTextColor: p.type === "primary" ? p.theme.COLORS.SECONDARY_900 : p.theme.COLORS.PRIMARY_50,
})) <Props>`
  width: 100%;
  height: 56px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;

  font-family: ${p => p.theme.FONTS.TEXT};
  border: 1px solid ${p => p.theme.COLORS.SHAPE};
  color: ${p => p.type === "primary" ? p.theme.COLORS.SECONDARY_900 : p.theme.COLORS.TITLE};
`