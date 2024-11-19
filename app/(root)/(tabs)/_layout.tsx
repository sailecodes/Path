import { Tabs } from "expo-router";
import TabBarIcon from "@/components/tab-bar-icon";
import { icons } from "@/constants/icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 90,
          paddingTop: 20,
          marginHorizontal: 5,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              text="Home"
              source={icons.home}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="records"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              text="Records"
              source={icons.folder}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              text="Profile"
              source={icons.profile}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
