import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export type ButtonProps = "primary" | "secondary"

type ContainerProps = {
  type: ButtonProps
}

export const Container = styled(RectButton) <ContainerProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.type === "primary" ? p.theme.COLORS.SUCCESS_900 : p.theme.COLORS.PRIMARY_800};
`

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${p => p.theme.COLORS.TITLE};
  font-family: ${p => p.theme.FONTS.TEXT};
`

export const LoadingSpinner = styled.ActivityIndicator.attrs(p => ({
  color: p.theme.COLORS.TITLE,
}))``