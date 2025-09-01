import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../../adaptiveness/adaptiveness";
import NearbyLocationServicesData from "../../fakeData/tabs/home/NearbyLocationData";
import { useState } from "react";
const HairSalonCard = ({ item }) => {
  const [liked, setLiked] = useState(false);
  return (
    <View
      style={{ width: scale(330) }}
      className="bg-[#F4F0E9]  px-[2%] py-[2%]  rounded-2xl shadow-md mr-[0.6%] overflow-hidden "
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
        <TouchableOpacity
          className="absolute top-[4%] right-[5%] bg-white/80 rounded-full p-[2%]"
          onPress={() => setLiked((prev) => !prev)}
        >
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={18}
            color={liked ? "#FF0000" : "#666"}
          />
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

const NearbyServicesCard = () => {
  const renderSalonCard = ({ item }) => {
    return <HairSalonCard item={item} />;
  };

  return (
    <View className="flex-1 mt-[4%]">
      <View className="mx-[6%]  flex-1 justify-center items-center ">
        <FlatList
          data={NearbyLocationServicesData}
          renderItem={renderSalonCard}
          keyExtractor={(item) => item.id}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: verticalScale(100),
          }}
          ItemSeparatorComponent={() => <View className="h-[1%]" />}
          snapToInterval={296} // Card width (280) + margin (16)
          decelerationRate="fast"
          snapToAlignment="start"
        />
      </View>
    </View>
  );
};

export default NearbyServicesCard;
