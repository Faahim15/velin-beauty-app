import { View, Text, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import NearbyLocationServicesData from "../../../components/fakeData/tabs/home/NearbyLocationData";
import BaseHeader from "../../../components/shared/BaseHeader";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
export default function nearbyServicesDetails() {
  const { serviceId } = useLocalSearchParams();
  const service = NearbyLocationServicesData.find(
    (s) => s.id.toString() === serviceId
  );
  const [liked, setLiked] = useState(false);
  return (
    <View className="flex-1 bg-white">
      <BaseHeader title={service ? service.serviceName : "Service Details"} />
      <View className="mx-[6%] px-[2.5%] py-[2.3%] rounded-2xl   mt-[3%] bg-[#F4F0E9] ">
        <View className="w-full h-[230px] rounded-2xl overflow-hidden">
          <Image
            source={{
              uri: service.image,
            }}
            className="w-full h-full"
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
        <View>
          <Text className="font-poppinsSemiBold text-2xl text-[#1B1B25] ml-[0%] pt-[1.18%] ">
            {service.serviceName}
          </Text>
          {/* price and discount */}
          <View className="flex-row justify-between ">
            <Text className="font-poppinsMedium text-sm pt-[1%] text-[#1B1B25] ">
              {service.price}
            </Text>
            <View className="flex-row  py-[1%] gap-[5%] items-center border border-white rounded-lg bg-white shadow-sm ">
              <Ionicons name="pricetag" size={16} color="#FFA500" />
              <Text className="font-poppinsBold text-sm text-[#FFA500] ">
                -20%
              </Text>
            </View>
          </View>
          {/* provider and rating */}
          <View className="flex-row gap-[1%] ">
            <Ionicons name="star" size={13} color="#FFA500" />
            <Text className="font-poppins pt-[0.2%] text-xs text-[#1B1B25]">
              {service.rating} (445)
            </Text>
          </View>
        </View>
      </View>

      <View className="mx-[6%] gap-[2%] mt-[3%] ">
        {/* description */}
        <View>
          <Text className="font-poppinsSemiBold text-base text-[#111111]">
            Description
          </Text>
          <Text className="font-poppins text-sm text-[#50555C]">
            Lorem ipsum dolor sit amet consectetur. Amet justo nisl enim ut sed
            cras. Est malesuada lacus imperdiet lobortis odio.
          </Text>
        </View>
        {/* Location */}
        <View className="flex-row gap-[1.18%] ">
          <Text className="font-poppinsSemiBold text-base text-[#111111]">
            Location:
          </Text>
          <Text className="font-poppins pt-[0.8%] text-sm text-[#50555C]">
            XYZ street
          </Text>
        </View>
      </View>
    </View>
  );
}
