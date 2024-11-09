import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface TabBarIcon {
  text: string;
  source: ImageSourcePropType;
  focused: boolean;
}

const TabBarIcon = ({ text, source, focused }: TabBarIcon) => {
  return (
    <View className="items-center gap-1">
      <Image
        className="w-7 h-7"
        source={source}
        tintColor={focused ? "#3b82f6" : "#737373"}
      />
      <Text
        className={`text-sm
        ${focused && "text-blue-500 font-JakartaBold"}
        ${!focused && "text-neutral-500 font-JakartaMedium"}
      `}>
        {text}
      </Text>
    </View>
  );
};

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3b82f6",
        tabBarInactiveTintColor: "#737373",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          paddingTop: 30,
          marginHorizontal: 5,
          marginBottom: 10,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
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
          title: "Records",
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
          title: "Profile",
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
