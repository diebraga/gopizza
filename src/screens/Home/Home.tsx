import React from 'react';
import HappyEmoji from "../../assets/happy.png"
import {
  Container,
  Greeting,
  GreetingEmoji,
  Header,
  GreetingText,
  MenuHeader,
  Title,
  MenuItemNumber
} from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Search } from '../../components/Search/Search';
import ProductCard from '../../components/ProductCard/ProductCard';

export const Home: React.FC = () => {
  const { COLORS } = useTheme()
  return (
    <Container>
      <Header>
        <Greeting>
          <GreetingEmoji source={HappyEmoji} />
          <GreetingText>Hello Admin</GreetingText>
        </Greeting>

        <TouchableOpacity>
          <MaterialIcons name="logout" color={COLORS.TITLE} size={24} />
        </TouchableOpacity>
      </Header>

      <Search onClear={() => { }} onSearch={() => { }} />

      <MenuHeader>
        <Title>Menu</Title>
        <MenuItemNumber>12 pizzas</MenuItemNumber>
      </MenuHeader>

      <ProductCard data={{ description: "Delicios pizza", id: "1", name: "pizza", photo_url: "https://github.com/diebraga.png" }} />
    </Container>
  )
}

