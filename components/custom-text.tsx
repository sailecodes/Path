import { Text, TextProps } from "react-native";

type CustomTextProps = TextProps & {
  className?: string;
  hasCustomColor?: boolean;
  isSubText?: boolean;
  isSubHeading?: boolean;
  isMainHeading?: boolean;
  children: React.ReactNode;
};

const CustomText = ({
  className,
  hasCustomColor,
  isSubText,
  isSubHeading,
  isMainHeading,
  children,
}: CustomTextProps) => {
  return (
    <Text
      className={`text-neutral-800
        ${isSubText && "text-sm"}
        ${!hasCustomColor && "text-neutral-800"}
        ${isSubHeading && "text-xl"}
        ${isMainHeading && "text-2xl"}
        ${className}
    `}>
      {children}
    </Text>
  );
};

export default CustomText;
