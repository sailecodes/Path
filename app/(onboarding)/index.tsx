import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import SwiperDot from "@/components/SwiperDot";
import CustomButton from "@/components/CustomButton";
import OnboardingPage from "@/components/OnboardingPage";
import { onboardingData } from "@/constants";
import CustomText from "@/components/CustomText";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [swiperInd, setSwiperInd] = useState(0);

  const onSwiperBtnPress = () => {
    if (swiperInd === onboardingData.length - 1) {
      router.navigate("/(onboarding)/sign-up");
    } else {
      setSwiperInd(swiperInd + 1);
      swiperRef.current?.scrollBy(1);
    }
  };

  return (
    <SafeAreaView className="flex flex-1 items-center">
      <TouchableOpacity
        className="self-end mr-5"
        onPress={() => router.navigate("/(onboarding)/sign-up")}>
        <CustomText className="font-JakartaMedium text-lg">Skip</CustomText>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        dot={<SwiperDot />}
        activeDot={<SwiperDot isActive />}
        loop={false}
        onIndexChanged={(ind) => setSwiperInd(ind)}>
        {onboardingData.map((obj, ind) => (
          <OnboardingPage
            key={ind}
            primaryText={obj.primaryText}
            secondaryText={obj.secondaryText}
          />
        ))}
      </Swiper>
      <CustomButton
        isPrimary
        onPress={onSwiperBtnPress}>
        {swiperInd === onboardingData.length - 1 ? (
          <CustomText>Get started</CustomText>
        ) : (
          <CustomText>Next</CustomText>
        )}
      </CustomButton>
    </SafeAreaView>
  );
};

export default Onboarding;
