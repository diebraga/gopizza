import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1
`;

export const Header = styled(LinearGradient).attrs((p) => ({
  colors: p.theme.COLORS.GRADIENT
}))`
  padding: ${getStatusBarHeight() + 34}px 24px 0;
`;

export const Photo = styled.Image`
  width: 240px;
  height: 240px;
  border-radius: 120px;
  align-self: center;
  position: relative;
  top: -120px;
`;

export const Sizes = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: -120px;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 32px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`;

export const Label = styled.Text`
  font-size: 14px;
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`;

export const FormRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const InputGroup = styled.View`
  width: 48%;
`

export const Price = styled.Text`
  font-size: 14px;
  margin: 24px 0;
  align-self: flex-end;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`;

