import ReactNativeModal from "react-native-modal";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";
import { icons } from "@/constants/icons";
import { supabase } from "@/lib/supabase";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    else setIsModalVisible(true);
  };

  const handleResendOtp = async () => {
    const { error } = await supabase.auth.resend({ email, type: "signup" });

    if (error) Alert.alert(error.message);
  };

  const handleVerifyOtp = async () => {
    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: "email",
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      setIsModalVisible(false);
      router.navigate("/(onboarding)/sign-in");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-neutral-100 pt-5">
      <Text className="text-blue-600 font-JakartaBold text-5xl text-center tracking-[-3px] mb-10">
        Path
      </Text>
      <Text className="text-neutral-800 font-JakartaSemiBold text-3xl mx-5 mb-10">
        Create your account
      </Text>
      <KeyboardAvoidingView
        className="gap-5 mb-10"
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <CustomInput
          placeholder="First name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <CustomInput
          placeholder="Last name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <CustomInput
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <CustomInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </KeyboardAvoidingView>
      <View className="flex-row justify-evenly gap-5 mb-5 mx-5">
        {/* <CustomButton
          className="mb-5 mx-5"
          isPrimary
          btnText="Sign up"
          onPress={handleSignUp}
        /> */}
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
            <TouchableOpacity onPress={handleResendOtp}>
              <Text className="text-green-500 font-JakartaSemiBold text-lg"> Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
};

export default SignUp;
