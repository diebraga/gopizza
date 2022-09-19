import styled from 'styled-components/native';

export type RadioButtonProps = {
  selected: boolean
}

export const Container = styled.TouchableOpacity<RadioButtonProps>`
  width: 104px;
  height: 82px;
  border-radius: 8px;
  padding: 14px 16px;
  border: 1px solid ${({ theme, selected }) => selected ? theme.COLORS.SUCCESS_900 : theme.COLORS.SHAPE};
`;


export const Title = styled.Text`
  font-family: ${p => p.theme.FONTS.TITLE};
  color: ${p => p.theme.COLORS.SECONDARY_900};
`

export const Radio = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid ${p => p.theme.COLORS.SUCCESS_900};
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`

export const Selected = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${p => p.theme.COLORS.SUCCESS_900};
`