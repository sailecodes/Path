import { View, TextInput, TextInputProps } from "react-native";
import React from "react";
import CustomText from "./CustomText";

type CustomInputProps = TextInputProps & {
  label: string;
};

const CustomInput = ({ label, ...props }: CustomInputProps) => {
  return (
    <View className="w-full">
      <CustomText>{label}</CustomText>
      <TextInput
        className="bg-red-100"
        {...props}
      />
    </View>
  );
};

export default CustomInput;
