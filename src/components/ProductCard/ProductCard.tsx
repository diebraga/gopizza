import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import { Container, Content, Description, Details, Image, IndentificationView, Line, Name } from './styles';

export type ProductType = {
  id: string;
  photo_url: string;
  name: string;
  description: string;
}

type Props = RectButtonProps & {
  data: ProductType;
}

const ProductCard: React.FC<Props> = ({ data, ...rest }) => {
  const { COLORS } = useTheme()
  return (
    <Container>
      <Content {...rest}>
        <Image source={{ uri: data.photo_url }} />

        <Details>
          <IndentificationView>
            <Name>{data.name}</Name>
            <Feather name='chevron-right' size={18} color={COLORS.SHAPE} />
          </IndentificationView>

          <Description>{data.description}</Description>
        </Details>
      </Content>

      <Line />
    </Container>
  )
}

export default ProductCard;