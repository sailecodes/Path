import { TextInput, TextInputProps } from "react-native";
import React, { useState } from "react";

const CustomInput = ({ ...props }: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      className={`bg-blue-100 font-JakartaMedium h-[60px] text-lg p-5 mx-5 border-2 border-blue-100 rounded-lg ${
        isFocused ? "border-blue-600" : "border-blue-100"
      }`}
      onPress={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
      placeholderTextColor="#949494"
    />
  );
};

export default CustomInput;
