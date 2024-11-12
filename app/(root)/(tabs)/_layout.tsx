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
