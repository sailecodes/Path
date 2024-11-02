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
        btnText={swiperInd === onboardingData.length - 1 ? "Get started" : "Next"}
        isPrimary
        onPress={() => {
          if (swiperInd === onboardingData.length - 1) {
            router.navigate("/(onboarding)/sign-up");
          } else {
            setSwiperInd(swiperInd + 1);
            swiperRef.current?.scrollBy(1);
          }
        }}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
