import React, { useCallback, useEffect, useState } from 'react';
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { SignIn } from './src/screens/SignIn/SignIn';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/hooks/useAuth';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ DMSerifDisplay_400Regular, DMSans_400Regular });
      }
      catch {
        // handle error
      }
      finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayout} style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar style='light' translucent backgroundColor='transparent' />
        <AuthProvider>
          <SignIn />
        </AuthProvider>
      </ThemeProvider>
    </View>
  );
}

