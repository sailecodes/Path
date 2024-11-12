import { Image, TextInput, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";
import pfp from "@/assets/images/pfp.jpg";

const Profile = () => {
  return (
    <SafeAreaView>
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

      <View>
        <Text>Elias Roman</Text>
      </View>
      <View className="px-5 gap-[10px]">
        <TouchableOpacity className="bg-white flex-row items-center gap-[10px] h-[65px] rounded-lg px-5">
          <Image
            className="w-8 h-8"
            source={icons.profile}
            tintColor="#3b82f6"
          />
          <Text className="text-neutral-800 font-JakartaMedium text-xl">Account Information</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white flex-row items-center gap-[10px] h-[65px] rounded-lg px-5">
          <Image
            className="w-8 h-8"
            source={icons.profile}
            tintColor="#3b82f6"
          />
          <Text className="text-neutral-800 font-JakartaMedium text-xl">Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white flex-row items-center gap-[10px] h-[65px] rounded-lg px-5">
          <Image
            className="w-8 h-8"
            source={icons.profile}
            tintColor="#3b82f6"
          />
          <Text className="text-neutral-800 font-JakartaMedium text-xl">Pharmacy orders</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white flex-row items-center gap-[10px] h-[65px] rounded-lg px-5">
          <Image
            className="w-8 h-8"
            source={icons.profile}
            tintColor="#3b82f6"
          />
          <Text className="text-neutral-800 font-JakartaMedium text-xl">Payment method</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white flex-row items-center gap-[10px] h-[65px] rounded-lg px-5">
          <Image
            className="w-8 h-8"
            source={icons.lock}
            tintColor="#3b82f6"
          />
          <Text className="text-neutral-800 font-JakartaMedium text-xl">Password and security</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white flex-row items-center gap-[10px] h-[65px] rounded-lg px-5">
          <Image
            className="w-8 h-8"
            source={icons.speechBubble}
            tintColor="#3b82f6"
          />
          <Text className="text-neutral-800 font-JakartaMedium text-xl">
            Language and accessibility
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white flex-row items-center gap-[10px] h-[65px] rounded-lg px-5">
          <Image
            className="w-8 h-8"
            source={icons.profile}
            tintColor="#3b82f6"
          />
          <Text className="text-neutral-800 font-JakartaMedium text-xl">Terms and conditions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
