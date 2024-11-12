import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

interface SubModuleProps {
  text: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const SubModule = ({ text, onPress }: SubModuleProps) => {
  return (
    <TouchableOpacity
      className="justify-center bg-white px-5 border-neutral-200 border rounded-lg"
      onPress={onPress}>
      <Text className="text-neutral-800 font-JakartaBold">{text}</Text>
    </TouchableOpacity>
  );
};

export default SubModule;
