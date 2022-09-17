import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from 'react-native';
import { Home } from '../screens/Home/Home';
import { Product } from '../screens/Product/Product';

const { Navigator, Screen } = createNativeStackNavigator()

export const UserStackRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='product' component={Product} />
    </Navigator>
  )
}

