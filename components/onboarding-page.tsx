// FIXME:

import { Text, View } from "react-native";

interface OnboardingPageProps {
  isFirstPage?: boolean;
  primaryText: string;
  secondaryText?: string;
}

const OnboardingPage = ({ isFirstPage, primaryText, secondaryText }: OnboardingPageProps) => {
  return (
    <View className="flex-1 justify-center items-center px-5">
      <Text
        className={`${
          isFirstPage
            ? "font-JakartaBold text-blue-500 text-6xl tracking-[-3px]"
            : "font-JakartaSemiBold text-neutral-800 text-4xl text-neutral-text-center"
        }`}>
        {primaryText}
      </Text>
      <Text className="font-JakartaMedium text-neutral-500 text-2xl text-center">
        {secondaryText}
      </Text>
    </View>
  );
};

export default OnboardingPage;
