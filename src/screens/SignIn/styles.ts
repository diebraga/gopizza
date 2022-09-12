import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Content = styled.ScrollView.attrs(({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBotton: getBottomSpace() + 48
  }
}))`
  width: 100%;
  padding: 0 32px;
`

export const Container = styled(LinearGradient).attrs(p => ({
  colors: p.theme.COLORS.GRADIENT,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 },
}))`
  justify-content: center;
  flex: 1;
`

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 24px;
  align-self: flex-start;

  font-family: ${p => p.theme.FONTS.TITLE};
  color: ${p => p.theme.COLORS.TITLE};
`

export const Brand = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 340px;
  margin-top: 64px;
  margin-bottom: 42px;
`

export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 20px;
`

export const ForgotPasswordLabel = styled.Text`
  font-size: 14px;

  font-family: ${p => p.theme.FONTS.TITLE};
  color: ${p => p.theme.COLORS.TITLE};
`