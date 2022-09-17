import React, { useEffect } from 'react';
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
import { Alert, TouchableOpacity } from 'react-native';
import { Search } from '../../components/Search/Search';
import ProductCard, { ProductType } from '../../components/ProductCard/ProductCard';
import firestore from "@react-native-firebase/firestore"

export const Home: React.FC = () => {
  const { COLORS } = useTheme()

  const fetchPizzas = (value: string) => {
    const formattedValue = value.toLocaleLowerCase().trim();

    firestore()
    .collection("pizzas")
    .orderBy("name_insensitive")
    .startAt(formattedValue)
    .endAt(`${formattedValue}\uf8ff`)
    .get()
    .then(res => {
      const data = res.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }) as ProductType[]
      // console.log(data)
    })
    .catch(() => Alert.alert("Error", "Error searching item"))
  }

  useEffect(() => {
    fetchPizzas('')
  }, [])
  
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

