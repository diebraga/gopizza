import React from 'react';
import HappyEmoji from "../../assets/happy.png"
import { Container, Greeting, GreetingEmoji, Header, GreetingText } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

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

    </Container>
  )
}

