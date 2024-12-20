import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import SwiperDot from "@/components/swiper-dot";
import CustomButton from "@/components/custom-button";
import OnboardingPage from "@/components/onboarding-page";
import { onboardingData } from "@/constants";

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
    <SafeAreaView className="flex flex-1 bg-neutral-100">
      <TouchableOpacity
        className="self-end pl-5 pb-5 mt-5 mr-5"
        onPress={() => router.navigate("/(onboarding)/sign-up")}>
        <Text className="top-[-5px] text-neutral-800 font-JakartaMedium text-lg">Skip</Text>
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
            isFirstPage={ind === 0 ? true : false}
            primaryText={obj.primaryText}
            secondaryText={obj.secondaryText}
          />
        ))}
      </Swiper>
      <CustomButton
        className="mx-5 mb-6"
        btnText={`${swiperInd === onboardingData.length - 1 ? "Get started" : "Next"}`}
        isPrimary
        onPress={onSwiperBtnPress}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
