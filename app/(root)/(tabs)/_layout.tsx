import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="history"
        options={{ title: "History", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false }}
      />
    </Tabs>
  );
};

export default Layout;
