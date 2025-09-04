import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import BaseHeader from "../components/shared/BaseHeader";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import categorizedServices from "../components/fakeData/tabs/home/CategorizedServices";
import { scale, verticalScale } from "../components/adaptiveness/adaptiveness";
export default function favorite() {
  // Flatten all services from all categories
  const allServices = categorizedServices.flatMap((category) => category.data);
  const ServiceCard = ({ service }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: "client/services/beautyServices/details",
            params: { serviceId: 1 },
          });
        }}
        className=" bg-[#F4F0E9] rounded-lg mx-[6%] mb-[3%] shadow-sm"
      >
        <View className="flex-row p-[4%]">
          {/* Service Image */}
          <Image
            source={{
              uri:
                service.image ||
                "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1000&q=80",
            }}
            className="w-[20%] h-auto rounded-lg mr-[4%]"
            resizeMode="cover"
          />

          {/* Service Details */}
          <View className="flex-1 justify-between">
            {/* Title and Heart Icon */}
            <View className="flex-row justify-between items-start">
              <Text className=" font-poppinsSemiBold text-base text-[#1B1B25] mb-[2%]">
                {service.serviceName}
              </Text>
              <View>
                <Ionicons name="heart" size={24} color="#FF0000" />
              </View>
            </View>

            {/* Price and Distance */}
            <View className="flex-row justify-between items-center mb-[2%]">
              <Text className="text-xs font-poppinsMedium text-[#1B1B25]">
                {service.price}
              </Text>
              <View className="flex-row items-center">
                <Ionicons name="location-outline" size={10} color="#000" />
                <Text className="text-xs font-poppinsMedium text-[#1B1B25] ml-[1%]">
                  {service.distance}
                </Text>
              </View>
            </View>

            {/* Provider and Rating */}
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center">
                <View className="w-[18px] h-[18px]  rounded-full mr-[5%] justify-center items-center">
                  <Image
                    source={{ uri: service.avatarImage }}
                    className="w-full h-full rounded-full"
                    resizeMode="cover"
                  />
                </View>
                <Text className="text-xs text-[#060605] font-poppinsMedium ">
                  {service.providerName}
                </Text>
              </View>

              <View className="flex-row items-center">
                <Ionicons name="star" size={12} color="#FFA500" />
                <Text className=" font-poppins text-xs text-[#1B1B25] ml-[1%]">
                  {service.rating}({442})
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* StatusBar setup */}
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View className="flex-1 bg-white">
        <BaseHeader title="Favorite" />
        <View className="flex-1">
          {/* Service List */}
          <FlatList
            data={allServices}
            renderItem={({ item }) => <ServiceCard service={item} />}
            keyExtractor={(_, index) => index.toString()}
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 16, paddingBottom: 20 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
