import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { Button } from "../../components/Button/Button";
import theme from "../../theme";


export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${p => p.theme.COLORS.BACKGROUND};
`

export const Header = styled(LinearGradient).attrs(p => ({
  colors: p.theme.COLORS.GRADIENT,
}))`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  padding: ${getStatusBarHeight() + 33}px 20px 24px;
`

export const Title = styled.Text`
  font-size: 24px;

  font-family: ${p => p.theme.FONTS.TITLE};
  color: ${p => p.theme.COLORS.TITLE};
`

export const DeleteLabel = styled.Text`
  font-size: 14px;

  font-family: ${p => p.theme.FONTS.TEXT};
  color: ${p => p.theme.COLORS.TITLE};
`

export const UploadView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`

export const PickImageButton = styled(Button)`
  max-width: 90px;
  margin-left: 32px;
`

export const Form = styled.View`
  width: 100%;
  padding: 24px;
`

export const Label = styled.Text`
  margin-bottom: 12px;
  font-size: 14px;

  font-family: ${p => p.theme.FONTS.TEXT};
  color: ${theme.COLORS.SECONDARY_900};
`

export const InputGroup = styled.View`
  width: 100%;
  margin-bottom: 16px;
`

export const InputGroupHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const MaxCharcters = styled.Text`
  font-size: 10px;
  margin-bottom: 12px;
  font-family: ${p => p.theme.FONTS.TEXT};
  color: ${p => p.theme.COLORS.SECONDARY_900};
  `
