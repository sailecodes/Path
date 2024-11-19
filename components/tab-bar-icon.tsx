import { Image, ImageSourcePropType, Text, View } from "react-native";

interface TabBarIcon {
  text: string;
  source: ImageSourcePropType;
  focused: boolean;
}

const TabBarIcon = ({ text, source, focused }: TabBarIcon) => {
  return (
    <View className="items-center gap-1 w-[75px]">
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

export default TabBarIcon;
