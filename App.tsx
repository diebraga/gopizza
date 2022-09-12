import React from 'react';
import { DMSans_400Regular, useFonts } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { Text, View } from 'react-native';

export default function App() {
  const [isFontLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })

  return (
    <ThemeProvider theme={theme}>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>
          Hello World
        </Text>
      </View>
    </ThemeProvider>
  );
}

