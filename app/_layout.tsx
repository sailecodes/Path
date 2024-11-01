import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import "react-native-reanimated";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(onboarding)"
        options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
