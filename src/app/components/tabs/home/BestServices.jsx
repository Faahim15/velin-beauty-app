import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CategoryHeader from "./CategoryHeader";
import { scale, verticalScale } from "../../adaptiveness/adaptiveness";
import BestServicesData from "../../fakeData/tabs/home/BestServicesData";
const HairSalonCard = ({ item }) => {
  return (
    <View
      style={{ width: scale(330) }}
      className="bg-[#F4F0E9] px-[2%] py-[2%]  rounded-2xl shadow-lg mr-[0.6%] overflow-hidden "
    >
      {/* Image Container */}
      <View className="relative">
        <Image
          source={{ uri: item.image }}
          className=" h-[160px] rounded-lg"
          style={{ width: scale(312) }}
          resizeMode="cover"
        />

        {/* Heart Icon Overlay */}
        <TouchableOpacity className="absolute top-[4%] right-[5%] bg-white/80 rounded-full p-[2%]">
          <Ionicons name="heart-outline" size={18} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Content Container */}
      <View className="px-[1%] py-[4%]">
        {/* Provider Info */}
        <View className="flex-row items-center mb-[2%]">
          <Image
            source={{ uri: item.avatarImage }}
            style={{ height: verticalScale(21), width: scale(21) }}
            className="rounded-full mr-[2%]"
            resizeMode="cover"
          />
          <Text className="font-poppinsMedium text-[#060605] text-xs">
            {item.providerName}
          </Text>

          {/* Distance */}
          <View className="flex-row items-center ml-auto">
            <Ionicons name="location-outline" size={12} color="#000" />
            <Text className="font-poppinsMedium text-[#060605] text-xs ml-[1%]">
              {item.distance}
            </Text>
          </View>
        </View>

        {/* Service Title */}
        <Text
          className="text-[#1B1B25] text-base font-poppinsSemiBold mb-[2%]"
          numberOfLines={2}
        >
          {item.serviceName}
        </Text>

        {/* Price and Rating */}
        <View className="flex-row items-center justify-between">
          <Text className="text-[#666666] font-poppinsSemiBold text-xs">
            From <Text className="font-poppinsBold">{item.price}</Text>
          </Text>

          {/* Rating */}
          <View className="flex-row gap-[2%] items-center">
            <Ionicons name="star" size={11} color="#FFA500" />
            <Text className="text-[#1B1B25] text-xs  font-poppins">
              {item.rating}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const BestServices = () => {
  const renderSalonCard = ({ item }) => {
    return <HairSalonCard item={item} />;
  };

  return (
    <View className="flex-1 mt-[3%]">
      {/* <Text className="text-gray-900 text-xl font-bold mx-[4%] mb-[4%]">
        Hair Services Near You
      </Text> */}
      <CategoryHeader
        path="client/services/bestServices
      "
        title="Best for You"
      />
      <View className="mx-[6%]     ">
        <FlatList
          data={BestServicesData}
          renderItem={renderSalonCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingRight: scale(90),
          }}
          snapToInterval={296} // Card width (280) + margin (16)
          decelerationRate="fast"
          snapToAlignment="start"
        />
      </View>
    </View>
  );
};

export default BestServices;
