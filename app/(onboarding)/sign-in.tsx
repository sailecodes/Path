import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { icons } from "@/constants/icons";
import { supabase } from "@/lib/supabase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    else router.navigate("/(root)");
  }

  return (
    <SafeAreaView className="flex-1 bg-neutral-100 pt-5">
      <Text className="text-blue-600 font-JakartaBold text-5xl text-center tracking-[-3px] mb-10">
        Path
      </Text>
      <Text className="text-neutral-800 font-JakartaSemiBold text-3xl mx-5 mb-10">Login here</Text>
      <KeyboardAvoidingView
        className="gap-5 mb-10"
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
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
      <CustomButton
        className="mb-5 mx-5"
        isPrimary
        btnText="Sign in"
        onPress={handleSignIn}
      />
      <TouchableOpacity
        className="self-center py-5 mb-10"
        onPress={() => router.navigate("/(onboarding)/sign-up")}>
        <Text className="text-neutral-500 font-JakartaBold text-center">Create a new account</Text>
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
    </SafeAreaView>
  );
};

export default SignIn;
