import { TouchableOpacity } from "react-native";
import CustomText from "./custom-text";

type ModuleProps = {
  text: string;
  subText?: string;
  isSubModule?: boolean;
  isMainModule?: boolean;
};

const Module = ({ text, subText, isSubModule, isMainModule }: ModuleProps) => {
  return (
    <TouchableOpacity
      className={`bg-neutral-100 border-neutral-200 border rounded-lg
      ${isSubModule && !isMainModule && "px-5 py-3"}
      ${!isSubModule && isMainModule && "p-5"}
    `}>
      <CustomText isSubHeading={isMainModule}>{text}</CustomText>
      <CustomText>{subText}</CustomText>
    </TouchableOpacity>
  );
};

export default Module;
