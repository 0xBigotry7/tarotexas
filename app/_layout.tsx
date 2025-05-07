import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import * as React from 'react';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';

import { useColorScheme } from '@/hooks/useColorScheme';

const theme = {
  ...MD3LightTheme,
  roundness: 12,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#2D3E50', // 深蓝
    secondary: '#F5F7FA', // 浅灰
    background: '#FFFFFF', // 纯白
    surface: '#FFFFFF',
    onPrimary: '#FFFFFF',
    onSurface: '#2E2E2E',
    outline: '#888888',
    // 可扩展更多自定义色彩
  },
  fonts: {
    ...MD3LightTheme.fonts,
    // 可在此自定义字体
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </PaperProvider>
  );
}
