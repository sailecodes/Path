import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { icons } from "@/constants/icons";
import { router } from "expo-router";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-neutral-100 pt-5">
      <View className="flex-row justify-center mb-10 mx-5">
        <TouchableOpacity
          className="absolute left-0 top-[-5px]"
          onPress={() => router.navigate("/(onboarding)")}>
          <Text className="text-neutral-800 font-JakartaMedium text-lg">Back</Text>
        </TouchableOpacity>
        <Text className="text-blue-600 font-JakartaBold text-5xl tracking-[-3px]">Path</Text>
      </View>
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
      <CustomButton
        className="mb-5 mx-5"
        isPrimary
        btnText="Sign up"
      />
      <TouchableOpacity className="self-center py-5 mb-10">
        <Text className="text-neutral-500 font-JakartaBold text-center">
          Already have an account
        </Text>
      </TouchableOpacity>
      <View>
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
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
