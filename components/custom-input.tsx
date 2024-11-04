import { TextInput, TextInputProps } from "react-native";
import React, { useState } from "react";

type CustomInputProps = TextInputProps & {
  className?: string;
};

const CustomInput = ({ className, ...props }: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      className={`bg-blue-100 font-JakartaMedium h-[60px] text-lg px-5 mx-5 border-2 border-blue-100 rounded-lg
        ${isFocused ? "border-blue-600" : "border-blue-100"}
        ${className}`}
      onPress={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholderTextColor="#949494"
      {...props}
    />
  );
};

export default CustomInput;
