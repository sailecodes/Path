import CustomInput from "@/components/custom-input";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="bg-green-200 flex-1">
      <CustomInput
        className="flex mb-5"
        placeholder="Placeholder"
      />
      <View className="flex-row px-5 mb-5 gap-5">
        <TouchableOpacity className="bg-red-300 w-[70] h-[30] p-5 rounded-lg">
          <Text className="text-neutral-800 font-JakartaMedium">Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-red-300 w-[70] h-[30] p-5 rounded-lg">
          <Text>Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-red-300 w-[70] h-[30] p-5 rounded-lg">
          <Text>Hello</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View className="bg-red-300 gap-5">
          <View className="bg-yellow-300 mx-5 p-5 rounded-lg">
            <Text className="text-neutral-800 font-JakartaSemiBold text-2xl mb-2">
              View medical history
            </Text>
            <Text className="text-neutral-800 font-JakartaMedium text-lg">
              See summaries from past visits, an overview of all diagnosed conditions, test results,
              vaccination records, and more
            </Text>
          </View>
          <View className="bg-yellow-300 mx-5 p-5 rounded-lg">
            <Text className="text-neutral-800 font-JakartaSemiBold text-2xl mb-2">
              Make an appointment
            </Text>
            <Text className="text-neutral-800 font-JakartaMedium text-lg">
              Set up an appointment with your doctor to ensure your health and medical record is
              up-to-date
            </Text>
          </View>
          <View className="bg-yellow-300 mx-5 p-5 rounded-lg">
            <Text className="text-neutral-800 font-JakartaSemiBold text-2xl mb-2">
              Order from a pharmacy
            </Text>
            <Text className="text-neutral-800 font-JakartaMedium text-lg">
              Purchase medications and health essentials from a preferred pharmacy for pickup or
              delivery
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
