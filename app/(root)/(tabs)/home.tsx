import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";

const Home = () => {
  const handleSignOut = async () => {};

  return (
    <SafeAreaView
      className="flex-1"
      style={{ paddingBottom: 10 }}
      edges={["top"]}>
      {/* Search bar and sign out button */}
      <View className="flex-row items-center h-[60px] gap-5 mb-5 mx-5">
        <View className="flex-1 flex-row gap-4 items-center bg-blue-100 h-full rounded-lg pl-5">
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
        <TouchableOpacity
          className="justify-center h-full"
          onPress={handleSignOut}>
          <Text className="text-blue-500 font-JakartaBold">Sign out</Text>
        </TouchableOpacity>
      </View>

      {/* Sub modules */}
      <View className="h-[45px] mb-5 px-5">
        <ScrollView
          horizontal
          contentContainerStyle={{ flexDirection: "row", gap: 10 }}
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity className="justify-center bg-white px-5 border-neutral-200 border rounded-lg">
            <Text className="text-neutral-800 font-JakartaBold">Call your doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity className="justify-center bg-white px-5 border-neutral-200 border rounded-lg">
            <Text className="text-neutral-800 font-JakartaBold">Get vaccinations</Text>
          </TouchableOpacity>
          <TouchableOpacity className="justify-center bg-white px-5 border-neutral-200 border rounded-lg">
            <Text className="text-neutral-800 font-JakartaBold">Learn healthy diets</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Main section */}
      <ScrollView
        className="px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 90 }}>
        {/* Main modules */}
        <View className="gap-[10px] mb-5">
          <TouchableOpacity className="justify-center bg-white h-[130px] px-5 border-neutral-200 border rounded-lg">
            <View className="flex-row gap-[10px] items-center mb-3">
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
          <TouchableOpacity className="justify-center bg-white h-[130px] px-5 border-neutral-200 border rounded-lg">
            <View className="flex-row gap-[10px] items-center mb-3">
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
          <TouchableOpacity className="justify-center bg-white h-[130px] px-5 border-neutral-200 border rounded-lg">
            <View className="flex-row gap-[10px] items-center mb-3">
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

        {/* Health recommendations */}
        <View>
          <Text className="text-neutral-800 font-JakartaBold text-2xl mb-5">
            Health recommendations
          </Text>

          <View className="flex-row gap-[10px] mb-[10px]">
            <TouchableOpacity className="bg-white flex-1 flex-row justify-between items-center h-[80] px-5 border-neutral-200 border rounded-lg overflow-hidden">
              <Text className="font-JakartaSemiBold text-lg">Exercises</Text>
              <Image
                source={icons.exercise}
                className="w-[75] h-[75]"
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white flex-1 flex-row justify-between items-center h-[80] px-5 border-neutral-200 border rounded-lg overflow-hidden">
              <Text className="font-JakartaSemiBold text-lg">Vaccines</Text>
              <Image
                source={icons.doctors}
                className="w-[75] h-[75]"
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>

          <View className="flex-row gap-[10px]">
            <TouchableOpacity className="bg-white flex-1 flex-row justify-between items-center h-[80] px-5 border-neutral-200 border rounded-lg overflow-hidden">
              <Text className="font-JakartaSemiBold text-lg">Nutrition</Text>
              <Image
                source={icons.shopping}
                className="w-[75] h-[75]"
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white flex-1 flex-row justify-between items-center h-[80] px-5 border-neutral-200 border rounded-lg overflow-hidden">
              <Text className="font-JakartaSemiBold text-lg w-[60]">Mental Health</Text>
              <Image
                source={icons.mentalHealth}
                className="w-[75] h-[75]"
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
