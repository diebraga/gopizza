import React from 'react';
import { View } from 'react-native';
import { DMSans_400Regular, useFonts } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import AppLoading from "expo-app-loading";

export default function App() {
  const [isFontLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })

  if (!isFontLoaded) {
    return <AppLoading />
  }
  
  return (
    <View>

    </View>
  );
}

