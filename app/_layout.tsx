import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
      {/* <Stack.Screen name="index" options={{ headerShown: true }}/> */}
      {/* <Stack.Screen name="login" /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}



// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';

// import HomeScreen from '@/app/(tabs)/index';
// import Search from '@/app/(tabs)/Search';
// import DetailsScreen from '@/app/[movieId]';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// // Stack Navigator for Home and Details
// const HomeStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="Details" component={DetailsScreen} />
//   </Stack.Navigator>
// );

// // Main App Layout
// const Layout = () => (
//   <NavigationContainer>
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeStack} />
//       <Tab.Screen name="Search" component={Search} />
//     </Tab.Navigator>
//   </NavigationContainer>
// );

// export default Layout;
