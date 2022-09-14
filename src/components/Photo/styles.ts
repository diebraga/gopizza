import styled from "styled-components/native";


export const Image = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 9999px;
`

export const Placeholder = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 9999px;
  justify-content: center;
  align-items: center;

  border: 1px dashed ${p => p.theme.COLORS.SECONDARY_900};
`

export const PlaceholderTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  font-family: ${p => p.theme.FONTS.TEXT};
  color: ${p => p.theme.COLORS.SECONDARY_900}
`