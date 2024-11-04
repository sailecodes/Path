import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface CustomButtonProps {
  className?: string;
  isPrimary?: boolean;
  isVerification?: boolean;
  isTest?: boolean;
  isIcon?: boolean;
  btnText?: string;
  imgSrc?: ImageSourcePropType;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const CustomButton = ({
  className,
  isPrimary,
  isVerification,
  isTest,
  isIcon,
  btnText,
  imgSrc,
  onPress,
}: CustomButtonProps) => {
  return (
    <View className={`h-[55] ${isIcon && "w-[80]"} ${className}`}>
      <TouchableOpacity
        onPress={onPress}
        className={`flex-1 flex-row justify-center items-center border rounded-lg
        ${isPrimary && "bg-blue-500 border-blue-500 shadow-md shadow-blue-500/30"}
        ${isVerification && "bg-green-500 border-green-500 shadow-md shadow-green-500/30"}
        ${isTest && "bg-purple-500 border-purple-500 shadow-md shadow-purple-500/30"}
        ${!isPrimary && !isVerification && "bg-neutral-100 border-neutral-200"}
        `}>
        {imgSrc && (
          <Image
            className="w-[30] h-[30]"
            source={imgSrc}
          />
        )}
        {btnText && (
          <Text
            className={`font-JakartaBold text-xl
              ${(isPrimary || isVerification || isTest) && "text-neutral-100"}
              ${!isPrimary && !isVerification && !isTest && "text-neutral-800"}
              `}>
            {btnText}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
