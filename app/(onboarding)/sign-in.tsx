import { useCallback, useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useSignIn } from "@clerk/clerk-expo";
import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";
import { icons } from "@/constants/icons";

const SignIn = () => {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });
  const { signIn, setActive, isLoaded } = useSignIn();

  const handleSignIn = useCallback(async () => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: signInForm.email,
        password: signInForm.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });

        setSignInForm({
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
  }, [isLoaded, signInForm]);

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
          value={signInForm.email}
          onChangeText={(text) => setSignInForm({ ...signInForm, email: text })}
        />
        <CustomInput
          placeholder="Password"
          secureTextEntry
          value={signInForm.password}
          onChangeText={(text) => setSignInForm({ ...signInForm, password: text })}
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
