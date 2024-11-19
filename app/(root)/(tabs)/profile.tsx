import { Image, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";

import { ImageSourcePropType } from "react-native";

const ProfileModule = ({ source, text }: { source: ImageSourcePropType; text: string }) => {
  return (
    <View className="gap-[10px]">
      <TouchableOpacity className="bg-white flex-row items-center gap-[10px] h-[65px] border-neutral-200 border rounded-lg px-5">
        <Image
          className="w-8 h-8"
          source={source}
          tintColor="#3b82f6"
        />
        <Text className="text-neutral-800 font-JakartaSemiBold text-xl">{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Profile = () => {
  return (
    <SafeAreaView
      className="flex-1"
      edges={["top"]}>
      {/* Search bar */}
      <View className="flex-row gap-4 items-center bg-blue-100 h-[60px] rounded-lg pl-5 mb-5 mx-5">
        <Image
          className="w-7 h-7"
          source={icons.search}
          resizeMode="contain"
          tintColor="#949494"
        />
        <TextInput
          className="flex-1 bg-blue-100 h-full font-JakartaMedium text-lg rounded-tr-lg rounded-br-lg"
          placeholder="Search"
          placeholderTextColor="#949494"
        />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 110 }}>
        <View className="px-5 mb-5">
          <Text className="text-neutral-800 font-JakartaBold text-2xl mb-5">Account</Text>
          <View className="gap-[10px]">
            <ProfileModule
              source={icons.profile}
              text="Personal details"
            />
            <ProfileModule
              source={icons.profile}
              text="Password and security"
            />
            <ProfileModule
              source={icons.profile}
              text="Payment method"
            />
          </View>
        </View>

        <View className="px-5 mb-5">
          <Text className="text-neutral-800 font-JakartaBold text-2xl mb-5">Section</Text>
          <View className="gap-[10px]">
            <ProfileModule
              source={icons.profile}
              text="Appointments"
            />
            <ProfileModule
              source={icons.profile}
              text="Pharmacy orders"
            />
          </View>
        </View>

        <View className="px-5">
          <Text className="text-neutral-800 font-JakartaBold text-2xl mb-5">
            More info and support
          </Text>
          <View className="gap-[10px]">
            <ProfileModule
              source={icons.profile}
              text="Language and accessibility"
            />
            <ProfileModule
              source={icons.profile}
              text="Terms and conditions"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
