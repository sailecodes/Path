import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/custom-input";
import { icons } from "@/constants/icons";

const Home = () => {
  return (
    <SafeAreaView
      className="flex-1"
      style={{ paddingBottom: 10 }}
      edges={["top"]}>
      {/* Search bar */}
      <CustomInput
        className="flex mb-5 mx-5"
        placeholder="Search"
      />

      {/* Sub modules */}
      <ScrollView
        className="flex-shrink-0 pl-5 mb-5"
        horizontal
        contentContainerStyle={{ flexDirection: "row", gap: 10, paddingRight: 34 }}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity className="px-5 py-3 bg-white border-neutral-200 border rounded-lg">
          <Text className="text-neutral-800 font-JakartaBold">Get vaccinations</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-5 py-3 bg-white border-neutral-200 border rounded-lg">
          <Text className="text-neutral-800 font-JakartaBold">Current orders</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-5 py-3 bg-white border-neutral-200 border rounded-lg">
          <Text className="text-neutral-800 font-JakartaBold">Vaccinations</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Main modules */}
      <ScrollView
        className="px-5"
        showsVerticalScrollIndicator={false}>
        <View className="gap-5 mb-5">
          <View className="bg-white p-5 border-neutral-200 border rounded-lg">
            <View className="flex-row gap-3 items-center mb-3">
              <Image
                source={icons.folder}
                className="w-8 h-8"
                resizeMode="contain"
              />
              <Text className="text-neutral-800 font-JakartaSemiBold text-xl">
                View medical history
              </Text>
            </View>
            <Text className="text-neutral-500 font-JakartaMedium">
              See summaries from past visits, an overview of all diagnosed conditions, test results,
              vaccination records, and more
            </Text>
          </View>
          <View className="bg-white p-5 border-neutral-200 border rounded-lg">
            <View className="flex-row gap-3 items-center mb-3">
              <Image
                source={icons.calendar}
                className="w-8 h-8"
                resizeMode="contain"
              />
              <Text className="text-neutral-800 font-JakartaSemiBold text-xl">
                Make an appointment
              </Text>
            </View>
            <Text className="text-neutral-500 font-JakartaMedium">
              Book an appointment with your doctor to ensure your health and medical record is
              up-to-date
            </Text>
          </View>
          <View className="bg-white p-5 border-neutral-200 border rounded-lg">
            <View className="flex-row gap-3 items-center mb-3">
              <Image
                source={icons.wallet}
                className="w-8 h-8"
                resizeMode="contain"
              />
              <Text className="text-neutral-800 font-JakartaSemiBold text-xl">
                Order from a pharmacy
              </Text>
            </View>
            <Text className="text-neutral-500 font-JakartaMedium">
              Purchase medications and health essentials from a preferred pharmacy for pickup or
              delivery
            </Text>
          </View>
        </View>

        {/* Health Recommendations */}
        <View>
          <Text className="text-neutral-800 font-JakartaBold text-2xl mb-5">
            Health recommendations
          </Text>

          <View className="flex-row gap-3 mb-3">
            <TouchableOpacity className="bg-white flex-1 justify-center items-center h-[80] border-neutral-200 border rounded-lg">
              <Text className="font-JakartaSemiBold text-lg">Exercises</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white flex-1 justify-center items-center h-[80] border-neutral-200 border rounded-lg">
              <Text className="font-JakartaSemiBold text-lg">Vaccines</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row gap-3">
            <TouchableOpacity className="bg-white flex-1 justify-center items-center h-[80] border-neutral-200 border rounded-lg">
              <Text className="font-JakartaSemiBold text-lg">Nutrition</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white flex-1 justify-center items-center h-[80] border-neutral-200 border rounded-lg">
              <Text className="font-JakartaSemiBold text-lg">Mental Health</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
