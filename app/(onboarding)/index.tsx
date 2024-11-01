import Swiper from "react-native-swiper";
import { useRef } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwiperDot from "@/components/SwiperDot";

interface CustomButtonProps {
  btnText: string;
}

const CustomButton = ({ btnText }: CustomButtonProps) => {
  return <TouchableOpacity className="bg-blue-500 h-[50px] w-10">{btnText}</TouchableOpacity>;
};

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);

  // FIXME: Temporary
  const data = [1, 2, 3];

  return (
    <SafeAreaView className="flex flex-1 items-center">
      <Swiper
        ref={swiperRef}
        dot={<SwiperDot />}
        activeDot={<SwiperDot isActive />}
        loop={false}>
        {data.map((_, ind) => (
          <Text key={ind}>{ind}</Text>
        ))}
      </Swiper>
      <CustomButton />
    </SafeAreaView>
  );
};

export default Onboarding;
