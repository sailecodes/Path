// FIXME:

import { View, Text } from "react-native";
import CustomText from "./CustomText";

interface OnboardingPageProps {
  primaryText: string;
  secondaryText?: string;
}

const OnboardingPage = ({ primaryText, secondaryText }) => {
  return (
    <View className="flex-1 justify-center items-center px-5">
      <CustomText
        className={`font-JakartaExtraBold ${
          secondaryText
            ? "text-blue-600 text-6xl tracking-[-3px]"
            : "text-neutral-800 text-4xl text-center"
        }`}>
        {primaryText}
      </CustomText>
      <CustomText className="font-JakartaMedium text-neutral-500 text-2xl text-center">
        {secondaryText}
      </CustomText>
    </View>
  );
};

export default OnboardingPage;
