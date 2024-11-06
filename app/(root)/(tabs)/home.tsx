import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/custom-input";
import { icons } from "@/constants/icons";

const Home = () => {
  const handleSignOut = async () => {};

  return (
    <SafeAreaView
      className="flex-1"
      style={{ paddingBottom: 10 }}
      edges={["top"]}>
      {/* Search bar and sign out button */}
      {/* TODO: Define actual dimensions */}
      <View className="flex-row items-center gap-5 mb-5 mx-5">
        <CustomInput
          className="flex-1"
          placeholder="Search"
        />
        <TouchableOpacity
          className="h-[50] justify-center"
          onPress={handleSignOut}>
          <Text className="text-blue-500 font-JakartaBold">Sign out</Text>
        </TouchableOpacity>
      </View>

      {/* Sub modules */}
      <ScrollView
        className="flex-shrink-0 pl-5 mb-5"
        horizontal
        contentContainerStyle={{ flexDirection: "row", gap: 10, paddingRight: 36 }}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity className="px-5 py-3 bg-white border-neutral-200 border rounded-lg">
          <Text className="text-neutral-800 font-JakartaBold">Call your doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-5 py-3 bg-white border-neutral-200 border rounded-lg">
          <Text className="text-neutral-800 font-JakartaBold">Get vaccinations</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-5 py-3 bg-white border-neutral-200 border rounded-lg">
          <Text className="text-neutral-800 font-JakartaBold">Learn healthy diets</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Main modules */}
      <ScrollView
        className="px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 90 }}>
        <View className="gap-[10] mb-5">
          <TouchableOpacity className="bg-white p-5 border-neutral-200 border rounded-lg">
            <View className="flex-row gap-3 items-center mb-3">
              <Image
                source={icons.folder}
                className="w-8 h-8"
                resizeMode="contain"
                tintColor="#3b82f6"
              />
              <Text className="text-neutral-800 font-JakartaSemiBold text-xl">
                View medical history
              </Text>
            </View>
            <Text className="text-neutral-500 font-JakartaMedium">
              See summaries from past visits, an overview of all diagnosed conditions, test results,
              vaccination records, and more
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white p-5 border-neutral-200 border rounded-lg">
            <View className="flex-row gap-3 items-center mb-3">
              <Image
                source={icons.calendar}
                className="w-8 h-8"
                resizeMode="contain"
                tintColor="#3b82f6"
              />
              <Text className="text-neutral-800 font-JakartaSemiBold text-xl">
                Make an appointment
              </Text>
            </View>
            <Text className="text-neutral-500 font-JakartaMedium">
              Book an appointment with your doctor to ensure your health and medical record is
              up-to-date
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white p-5 border-neutral-200 border rounded-lg">
            <View className="flex-row gap-3 items-center mb-3">
              <Image
                source={icons.wallet}
                className="w-8 h-8"
                resizeMode="contain"
                tintColor="#3b82f6"
              />
              <Text className="text-neutral-800 font-JakartaSemiBold text-xl">
                Order from a pharmacy
              </Text>
            </View>
            <Text className="text-neutral-500 font-JakartaMedium">
              Purchase medications and health essentials from a preferred pharmacy for pickup or
              delivery
            </Text>
          </TouchableOpacity>
        </View>

        {/* Health Recommendations */}
        <View>
          <Text className="text-neutral-800 font-JakartaBold text-2xl mb-5">
            Health recommendations
          </Text>

          <View className="flex-row gap-[10] mb-3">
            <TouchableOpacity className="bg-white flex-1 justify-center items-center h-[80] border-neutral-200 border rounded-lg overflow-hidden">
              <Image
                source={icons.exercise}
                className="w-[75] h-[75] left-10"
                resizeMode="cover"
              />
              <Text className="absolute left-4 font-JakartaSemiBold text-lg">Exercises</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white flex-1 justify-center items-center h-[80] border-neutral-200 border rounded-lg overflow-hidden">
              <Image
                source={icons.doctors}
                className="w-[75] h-[75] left-10"
                resizeMode="cover"
              />
              <Text className="absolute left-4 font-JakartaSemiBold text-lg">Vaccines</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row gap-[10]">
            <TouchableOpacity className="bg-white flex-1 justify-center items-center h-[80] border-neutral-200 border rounded-lg">
              <Image
                source={icons.shopping}
                className="w-[75] h-[75] left-10"
                resizeMode="cover"
              />
              <Text className="absolute left-4 font-JakartaSemiBold text-lg">Nutrition</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white flex-1 justify-center items-center h-[80] border-neutral-200 border rounded-lg">
              <Image
                source={icons.mentalHealth}
                className="w-[75] h-[75] left-10"
                resizeMode="cover"
              />
              <Text className="absolute left-4 font-JakartaSemiBold text-lg w-[60]">
                Mental Health
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
