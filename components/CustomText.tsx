import { Text } from "react-native";

interface CustomTextProps {
  className?: string;
  hasDefaultFont?: boolean;
  children: React.ReactNode;
}

const CustomText = ({ className, hasDefaultFont, children }: CustomTextProps) => {
  return <Text className={`${hasDefaultFont ? "font-Jakarta" : ""} ${className}`}>{children}</Text>;
};

export default CustomText;
