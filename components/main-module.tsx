import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  GestureResponderEvent,
} from "react-native";

interface MainModuleProps {
  iconSrc: ImageSourcePropType;
  header: string;
  description: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const MainModule = ({ iconSrc, header, description, onPress }: MainModuleProps) => {
  return (
    <TouchableOpacity
      className="justify-center bg-white h-[130px] px-5 border-neutral-200 border rounded-lg"
      onPress={onPress}>
      <View className="flex-row gap-[10px] items-center mb-3">
        <Image
          source={iconSrc}
          className="w-8 h-8"
          resizeMode="contain"
          tintColor="#3b82f6"
        />
        <Text className="text-neutral-800 font-JakartaSemiBold text-xl">{header}</Text>
      </View>
      <Text className="text-neutral-500 font-JakartaMedium">{description}</Text>
    </TouchableOpacity>
  );
};

export default MainModule;
