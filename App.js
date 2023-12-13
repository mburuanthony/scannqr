import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as ExpoSplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Scanner from "./screens/Scanner";

const Stack = createNativeStackNavigator();
ExpoSplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "ops-light": require("./assets/fonts/OpenSans-Light.ttf"),
    "ops-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "ops-semibold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await ExpoSplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="scan" component={Scanner} />
        </Stack.Navigator>

        <StatusBar style="dark" animated={true} backgroundColor="transparent" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
