import React from 'react';
import { DMSans_400Regular, useFonts } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

export default function App() {
  const [isFontLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })

  if (!isFontLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
}

