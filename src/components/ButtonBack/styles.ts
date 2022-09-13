import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${p => p.theme.COLORS.PRIMARY_100}
`