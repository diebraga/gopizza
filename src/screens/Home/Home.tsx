import React, { useEffect, useState } from 'react';
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
import { Alert, FlatList, TouchableOpacity } from 'react-native';
import { Search } from '../../components/Search/Search';
import ProductCard, { ProductType } from '../../components/ProductCard/ProductCard';
import firestore from "@react-native-firebase/firestore"
import { useNavigation } from '@react-navigation/native';

export const Home: React.FC = () => {
  const [pizzas, setPizzas] = useState<ProductType[]>([]);
  const [search, setSearch] = useState('')

  const { COLORS } = useTheme()
  const navigation = useNavigation()

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
        setPizzas(data)
      })
      .catch(() => Alert.alert("Error", "Error searching item"))
  }

  useEffect(() => {
    fetchPizzas('')
  }, [])

  const handleSearch = () => {
    fetchPizzas(search)
  }

  const handleOpen = (id: string) => {
    navigation.navigate('product', { id })
  }

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

      <Search
        value={search}
        onChangeText={setSearch}
        onClear={() => {
          fetchPizzas('')
          setSearch("")
        }}
        onSearch={handleSearch}
      />

      <MenuHeader>
        <Title>Menu</Title>
        <MenuItemNumber>12 pizzas</MenuItemNumber>
      </MenuHeader>

      <FlatList
        data={pizzas}
        keyExtractor={k => k.id}
        renderItem={({ item }) => {
          return <ProductCard
            data={item}
            onPress={() => handleOpen(item.id)}
          />
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 125,
          marginHorizontal: 24,
        }}
      />
    </Container>
  )
}

