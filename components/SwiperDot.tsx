import { View } from "react-native";

interface SwiperDotProps {
  isActive?: boolean;
}

const SwiperDot = ({ isActive }: SwiperDotProps) => {
  return (
    <View
      className={`${isActive ? "bg-neutral-500" : "bg-neutral-300"} w-[40] h-[5] mx-1 rounded-full`}
    />
  );
};

export default SwiperDot;
