import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../../adaptiveness/adaptiveness";

export default function Header() {
  return (
    <SafeAreaView className="pt-[8%] rounded-lg bg-black">
      <StatusBar barStyle="light-content" backgroundColor="#fff" />

      {/* Header Section */}
      <View className="px-[6%] pt-[8%] pb-[0%]">
        {/* Top Bar with Profile and Icons */}
        <View className="flex-row items-center justify-between mb-[3%]">
          {/* Profile Section */}
          <View className="flex-row items-center flex-1">
            <View className="w-[18%] aspect-square rounded-full overflow-hidden mr-[4%]">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500",
                }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
            <View className="flex-1">
              <Text className="text-white text-xl font-poppinsMedium ">
                Hi! Henna Clark
              </Text>
              <View className="flex-row items-center mt-1">
                <Ionicons name="location-outline" size={14} color="#fff" />

                <Text className=" font-poppins text-xs text-white ">
                  California, CA
                </Text>
              </View>
            </View>
          </View>

          {/* Right Icons */}
          <View className="flex-row items-center">
            <TouchableOpacity className="p-[3%] mr-[2%]">
              <Ionicons name="heart-outline" size={26} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{ width: scale(24), height: verticalScale(24) }}
                className="rounded-full items-center justify-center border border-white "
              >
                <Ionicons name="notifications-outline" size={20} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Heading */}
        <View className="mb-[3%]">
          <Text className=" font-poppins text-base text-white ">
            Find and book a moment for{"\n"}yourself
          </Text>
        </View>
      </View>

      {/* Search Section */}
      <View className="px-[6%] pb-[8%]">
        <View className="bg-white rounded-md flex-row items-center px-[4%] py-[2.5%]">
          <Ionicons name="search-outline" size={20} color="#000" />
          <TextInput
            placeholder="Search Service & Professional"
            placeholderTextColor="#898989"
            className="flex-1 text-black text-base ml-[3%]"
          />
          <TouchableOpacity className="p-[2%]">
            <Ionicons name="options-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
