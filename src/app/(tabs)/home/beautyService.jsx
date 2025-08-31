import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { categories } from "../../components/fakeData/tabs/home/ServiceCategories";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const BeautyServicesScreen = () => {
  const ServiceCard = ({ service }) => (
    <TouchableOpacity className="bg-gray-100 rounded-xl mx-[4%] mb-[3%] overflow-hidden shadow-sm">
      <View className="flex-row items-center px-[4%] py-[4%]">
        {/* Service Image */}
        <View className="w-[15%] h-[60px] rounded-xl overflow-hidden mr-[4%]">
          <Image
            source={{ uri: service.image }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* Service Info */}
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-800 mb-[2%]">
            {service.name}
          </Text>
          <Text className="text-gray-500 text-sm">{service.serviceCount}</Text>
        </View>

        {/* Arrow Icon */}
        <View className="w-[8%] items-center">
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <StatusBar barStyle="dark-content" backgroundColor="#000" />
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingTop: "4%", paddingBottom: "6%" }}
          showsVerticalScrollIndicator={false}
        >
          {categories.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BeautyServicesScreen;
