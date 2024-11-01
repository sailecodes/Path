import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SwiperDot from "@/components/SwiperDot";
import CustomButton from "@/components/CustomButton";
import OnboardingPage from "@/components/OnboardingPage";
import { onboardingData } from "@/constants";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [swiperInd, setSwiperInd] = useState(0);

  return (
    <SafeAreaView className="flex flex-1 items-center">
      <Swiper
        ref={swiperRef}
        dot={<SwiperDot />}
        activeDot={<SwiperDot isActive />}
        loop={false}
        onIndexChanged={() => setSwiperInd(swiperInd + 1)}>
        {onboardingData.map((obj, ind) => (
          <OnboardingPage
            primaryText={obj.primaryText}
            secondaryText={obj.secondaryText}
          />
        ))}
      </Swiper>
      <CustomButton
        btnText="Next"
        isPrimary
      />
    </SafeAreaView>
  );
};

export default Onboarding;
