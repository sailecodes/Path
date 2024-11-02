import { Image, ImageProps, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import CustomText from "./CustomText";

type CustomButtonProps = ImageProps &
  TouchableOpacityProps & {
    isPrimary?: boolean;
    children: React.ReactNode;
  };

const CustomButton = ({ isPrimary, children, source, ...props }: CustomButtonProps) => {
  return (
    // <View className={`w-full px-5`}>
    <View className={`w-full`}>
      <TouchableOpacity
        className={`flex flex-row justify-center items-center h-[50px] border rounded-full
        ${
          isPrimary
            ? "bg-blue-500 border-blue-500 shadow-md shadow-blue-500/30"
            : "bg-white border-neutral-200"
        }`}
        {...props}>
        {source && (
          <Image
            className="w-[30px]"
            source={source}
            resizeMode="contain"
          />
        )}
        <CustomText
          className={`font-JakartaBold text-xl ${isPrimary ? "text-white" : "text-black"}`}>
          {children}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
