import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import CustomText from "./CustomText";

type CustomButtonProps = TouchableOpacityProps & {
  btnText: string;
  isPrimary?: boolean;
};

const CustomButton = ({ btnText, isPrimary, ...props }: CustomButtonProps) => {
  return (
    <View className={`w-full px-5`}>
      <TouchableOpacity
        className={`flex justify-center items-center h-[50px] border rounded-full shadow-md shadow-neutral-500/50
        ${isPrimary ? "bg-blue-500 border-blue-500" : "bg-white border-neutral-200"}`}
        {...props}>
        <CustomText
          className={`font-JakartaBold text-xl ${isPrimary ? "text-white" : "text-black"}`}>
          {btnText}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
