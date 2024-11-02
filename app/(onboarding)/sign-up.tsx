import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import CustomText from "@/components/CustomText";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { icons } from "@/constants/icons";

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 px-5">
      <CustomText className="font-JakartaBold text-blue-600 text-center text-5xl tracking-[-3px]">
        Path
      </CustomText>
      <CustomText>Create your account</CustomText>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <CustomInput
          label="First name"
          placeholder="John"
        />
        <CustomInput
          label="Last name"
          placeholder="Doe"
        />
        <CustomInput
          label="Email"
          placeholder="johndoe@gmail.com"
        />

        <CustomInput
          label="Password"
          placeholder="123"
          secureTextEntry
        />
      </KeyboardAvoidingView>
      <CustomButton isPrimary>
        <CustomText>Sign up</CustomText>
      </CustomButton>
      <CustomText>Or</CustomText>
      <CustomButton source={icons.facebook}>
        <CustomText>Sign up with Google</CustomText>
      </CustomButton>
      <CustomButton>
        <CustomText>Sign up with Facebook</CustomText>
      </CustomButton>
      <TouchableOpacity className="flex-row">
        <CustomText>Already have an account?</CustomText>
        <CustomText className="text-blue-500"> Log in</CustomText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;
