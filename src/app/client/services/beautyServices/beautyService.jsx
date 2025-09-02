import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import categorizedServices from "../../../components/fakeData/tabs/home/CategorizedServices";
import { StatusBar } from "react-native";
import { router } from "expo-router";
import BaseHeader from "../../../components/shared/BaseHeader";
const BeautyServicesScreen = () => {
  const ServiceCard = ({ service }) => {
    const handleBeautyServices = () => {
      router.push({
        pathname: "client/services/beautyServices/beautyServiceDetails",
        params: { serviceId: service.id },
      });
    };
    return (
      <TouchableOpacity
        onPress={() => handleBeautyServices()}
        className="bg-[#F4F0E9] rounded-xl mx-[6%] mb-[2%] overflow-hidden shadow-sm"
      >
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
            <Text className="text-base font-poppinsSemiBold text-[#1B1B25] mb-[2%]">
              {service.title}
            </Text>
            <Text className=" font-poppinsMedium text-[#1B1B25] text-xs">
              {service.serviceCount}
            </Text>
          </View>

          {/* Arrow Icon */}
          <View className="w-[8%] items-center">
            <Ionicons name="chevron-forward" size={22} color="#1B1B25" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#000" />
      <View>
        <BaseHeader title="All Category" />
      </View>
      <FlatList
        data={categorizedServices}
        renderItem={({ item }) => <ServiceCard service={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: "4%", paddingBottom: "6%" }}
      />
    </View>
  );
};

export default BeautyServicesScreen;
