import { TouchableOpacity, View } from "react-native";
import CustomText from "./CustomText";

interface CustomButtonProps {
  btnText: string;
  isPrimary?: boolean;
}

const CustomButton = ({ btnText, isPrimary }: CustomButtonProps) => {
  return (
    <View className={`w-full px-5`}>
      <TouchableOpacity
        className={`flex justify-center items-center h-[50px] border rounded-full shadow-md shadow-neutral-500/50
        ${isPrimary ? "bg-blue-500 border-blue-500" : "bg-white border-neutral-200"}`}>
        <CustomText
          className={`font-JakartaBold text-xl ${isPrimary ? "text-white" : "text-black"}`}>
          {btnText}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
