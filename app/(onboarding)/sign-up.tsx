import ReactNativeModal from "react-native-modal";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";
import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";
import { icons } from "@/constants/icons";

const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();

  const handleSignUp = async () => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        firstName: signUpForm.firstName,
        lastName: signUpForm.lastName,
        emailAddress: signUpForm.email,
        password: signUpForm.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setIsModalVisible(true);
    } catch (err: any) {
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };

  const handleVerifyOtp = async () => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({ code: token });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });

        setIsModalVisible(false);
        setSignUpForm({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });

        router.navigate("/(root)/(tabs)/home");
      } else {
        Alert.alert("Failed", "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };

  const handleResendOtp = async () => {};

  return (
    <SafeAreaView className="flex-1 bg-neutral-100 pt-5">
      <Text className="text-blue-600 font-JakartaBold text-5xl text-center tracking-[-3px] mb-10">
        Path
      </Text>
      <Text className="text-neutral-800 font-JakartaSemiBold text-3xl mx-5 mb-10">
        Create your account
      </Text>
      <View className="gap-5 mb-10">
        <CustomInput
          placeholder="First name"
          value={signUpForm.firstName}
          onChangeText={(text) => setSignUpForm({ ...signUpForm, firstName: text })}
        />
        <CustomInput
          placeholder="Last name"
          value={signUpForm.lastName}
          onChangeText={(text) => setSignUpForm({ ...signUpForm, lastName: text })}
        />
        <CustomInput
          placeholder="Email"
          keyboardType="email-address"
          value={signUpForm.email}
          onChangeText={(text) => setSignUpForm({ ...signUpForm, email: text })}
        />
        <CustomInput
          placeholder="Password"
          secureTextEntry
          value={signUpForm.password}
          onChangeText={(text) => setSignUpForm({ ...signUpForm, password: text })}
        />
      </View>
      <View className="flex-row justify-evenly gap-5 mb-5 mx-5">
        <CustomButton
          className="flex-1"
          isPrimary
          btnText="Sign up"
          onPress={handleSignUp}
        />
        <CustomButton
          className="flex-1"
          isTest
          btnText="Test app"
          onPress={() => router.navigate("/(root)/(tabs)/home")}
        />
      </View>
      <TouchableOpacity
        className="self-center py-5 mb-10"
        onPress={() => router.navigate("/(onboarding)/sign-in")}>
        <Text className="text-neutral-500 font-JakartaBold text-center">
          Already have an account
        </Text>
      </TouchableOpacity>
      <Text className="text-blue-500 font-JakartaBold text-center mb-5">Or continue with</Text>
      <View className="flex-row justify-center gap-4">
        <CustomButton
          isIcon
          imgSrc={icons.facebook}
        />
        <CustomButton
          isIcon
          imgSrc={icons.google}
        />
      </View>
      <ReactNativeModal
        isVisible={isModalVisible}
        avoidKeyboard
        swipeDirection={"down"}
        onSwipeComplete={() => setIsModalVisible(false)}
        onBackdropPress={() => setIsModalVisible(false)}>
        <View className="bg-neutral-100 rounded-lg py-8">
          <Text className="text-neutral-800 font-JakartaBold text-3xl ml-5 mb-3">Verification</Text>
          <Text className="text-neutral-500 font-JakartaMedium text-lg ml-5 mb-12">
            Enter the 6-digit code sent to your email.
          </Text>
          <CustomInput
            className="text-center mb-5"
            placeholder="Code"
            keyboardType="numeric"
            value={token}
            onChangeText={(text) => setToken(text)}
          />
          <CustomButton
            className="mb-5 mx-5"
            isVerification
            btnText="Verify"
            onPress={handleVerifyOtp}
          />
          <View className="flex-row justify-center items-center">
            <Text className="text-neutral-500 font-JakartaMedium text-lg">
              Didn't receive a code?
            </Text>
            <TouchableOpacity onPress={() => console.log("Resending OTP")}>
              <Text className="text-green-500 font-JakartaSemiBold text-lg"> Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
};

export default SignUp;
