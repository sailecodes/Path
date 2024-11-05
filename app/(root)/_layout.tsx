import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="appointment"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="medical-history"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="pharmacy"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default Layout;
