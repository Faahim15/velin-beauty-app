import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import categorizedServices from "../fakeData/tabs/home/CategorizedServices";
import { scale, verticalScale } from "../adaptiveness/adaptiveness";
import { useState } from "react";
import ServiceModal from "./modal/ServiceModal";
import { router } from "expo-router";
function Completed() {
  // Flatten all services from all categories
  const allServices = categorizedServices.flatMap((category) => category.data);

  const ServiceCard = ({ service }) => {
    const [showServiceModal, setShowServiceModal] = useState(false);

    return (
      <View className=" bg-[#F4F0E9] rounded-lg mx-[6%] mb-[3%] shadow-sm">
        <View className="flex-row p-[4%]">
          {/* Service Image */}
          <Image
            style={{
              width: scale(60),
              height: verticalScale(60),
              borderRadius: scale(30),
            }}
            source={{
              uri:
                service.image ||
                "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1000&q=80",
            }}
            className="mr-[4%]"
            resizeMode="cover"
          />

          {/* Service Details */}
          <View className="flex-1 justify-between">
            {/* Title and Heart Icon */}
            <View className="flex-row justify-between items-start">
              <Text className="font-poppinsSemiBold text-base text-[#1B1B25] mb-[2%]">
                {service.serviceName}
              </Text>

              <View className="bg-white mt-[1%]">
                <Text className="text-xs font-poppinsMedium p-[1%] text-[#484847]">
                  {service.price}
                </Text>
              </View>
            </View>

            {/* Price and Distance */}
            <View className="flex-row justify-between items-center mb-[2%]">
              <View className="flex-row items-center">
                <Ionicons name="location-outline" size={10} color="#000" />
                <Text className="text-xs font-poppinsMedium text-[#1B1B25] ml-[1%]">
                  {service.distance}
                </Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="star" size={12} color="#FFA500" />
                <Text className="font-poppins text-xs text-[#1B1B25] ml-[1%]">
                  {service.rating}({442})
                </Text>
              </View>
            </View>

            {/* buttons*/}
            <View className="flex-row  justify-between items-center">
              <View className="flex-row gap-[5.1%]  items-center">
                <View>
                  <View className="bg-[#fff] rounded px-[4%] py-[2%] ">
                    <Text className="font-poppinsMedium text-center text-[10px] text-[#0D8D01] ">
                      Completed
                    </Text>
                  </View>
                </View>
              </View>

              <View>
                <TouchableOpacity onPress={() => setShowServiceModal(true)}>
                  <View>
                    <Text className="font-poppinsMedium text-xs text-black">
                      View
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <ServiceModal
              visible={showServiceModal}
              onClose={() => setShowServiceModal(false)}
              service={service}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white mt-[2%]">
      <FlatList
        data={allServices}
        renderItem={({ item }) => <ServiceCard service={item} />}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Completed;
