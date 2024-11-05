import {
  FlatList,
  FlatListComponent,
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/custom-input";

const Home = () => {
  return (
    <SafeAreaView className="bg-neutral-100 flex-1 gap-5">
      <CustomInput
        className="flex"
        placeholder="Placeholder"
      />
      <ScrollView
        className="px-5"
        horizontal
        contentContainerStyle={{ flexDirection: "row", gap: 10 }}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity className="bg-neutral-100 px-5 py-2 border-neutral-200 border rounded-lg">
          <Text className="text-neutral-800 font-JakartaBold text-lg">Recent visits</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-neutral-100 px-5 py-2 border-neutral-200 border rounded-lg">
          <Text className="text-neutral-800 font-JakartaBold text-lg">Current orders</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-neutral-100 px-5 py-2 border-neutral-200 border rounded-lg">
          <Text className="text-neutral-800 font-JakartaBold text-lg">Vaccinations</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView className="px-5">
        <View className="gap-5 mb-5">
          <View className="p-5 border-neutral-200 border rounded-lg">
            <Text className="text-neutral-800 font-JakartaSemiBold text-2xl mb-2">
              View medical history
            </Text>
            <Text className="text-neutral-800 font-JakartaMedium text-lg">
              See summaries from past visits, an overview of all diagnosed conditions, test results,
              vaccination records, and more
            </Text>
          </View>
          <View className="p-5 border-neutral-200 border rounded-lg">
            <Text className="text-neutral-800 font-JakartaSemiBold text-2xl mb-2">
              Make an appointment
            </Text>
            <Text className="text-neutral-800 font-JakartaMedium text-lg">
              Book an appointment with your doctor to ensure your health and medical record is
              up-to-date
            </Text>
          </View>
          <View className="p-5 border-neutral-200 border rounded-lg">
            <Text className="text-neutral-800 font-JakartaSemiBold text-2xl mb-2">
              Order from a pharmacy
            </Text>
            <Text className="text-neutral-800 font-JakartaMedium text-lg">
              Purchase medications and health essentials from a preferred pharmacy for pickup or
              delivery
            </Text>
          </View>
        </View>
        <View className="">
          <Text className="text-neutral-800 font-JakartaBold text-3xl">Health recommendations</Text>
          <View className="flex-row flex-wrap">
            <TouchableOpacity className="justify-center items-center w-1/2 h-[100] border-neutral-200 border rounded-lg">
              <Text className="font-JakartaSemiBold text-lg">Activities</Text>
            </TouchableOpacity>
            <TouchableOpacity className="justify-center items-center w-1/2 h-[100] border-neutral-200 border rounded-lg">
              <Text className="font-JakartaSemiBold text-lg">Vaccines</Text>
            </TouchableOpacity>
            <TouchableOpacity className="justify-center items-center w-1/2 h-[100] border-neutral-200 border rounded-lg">
              <Text className="font-JakartaSemiBold text-lg">Nutrition</Text>
            </TouchableOpacity>
            <TouchableOpacity className="justify-center items-center w-1/2 h-[100] border-neutral-200 border rounded-lg">
              <Text className="font-JakartaSemiBold text-lg">Something</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
