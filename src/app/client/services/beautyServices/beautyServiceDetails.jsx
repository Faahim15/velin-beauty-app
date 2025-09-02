import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import categorizedServices from "../../../components/fakeData/tabs/home/CategorizedServices";
import BaseHeader from "../../../components/shared/BaseHeader";
import { router } from "expo-router";
const BeautyServiceDetails = () => {
  const { serviceId } = useLocalSearchParams();
  const service = categorizedServices.find(
    (s) => s.id.toString() === serviceId
  );

  const ServiceCard = ({ service, id }) => (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: "client/services/beautyServices/details",
          params: { serviceId: id },
        });
      }}
      className="bg-[#F4F0E9] rounded-lg mx-[6%] mb-[3%] shadow-sm"
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
            <TouchableOpacity>
              <Ionicons name="heart-outline" size={24} color="#000" />
            </TouchableOpacity>
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

  return (
    <View className="flex-1 bg-white">
      <BaseHeader title={service?.title} />
      {/* Search Bar */}
      <View className="bg-white px-[6%] py-[4%] ">
        <View className="flex-row items-center bg-[#fff] border border-black rounded-md px-[4%] py-[2%]">
          <Ionicons name="search" size={20} color="#000" />
          <TextInput
            placeholder="Search Service & Professional"
            className="flex-1 bg-white  mt-[1%] ml-[3%] text-sm font-poppins text-black"
            placeholderTextColor="#898989"
          />
          <TouchableOpacity>
            <Ionicons name="options-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View className=" flex-1">
        {/* Service List */}
        <FlatList
          data={service.data}
          renderItem={({ item }) => (
            <ServiceCard service={item} id={service.id} />
          )}
          keyExtractor={(_, index) => index.toString()}
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 16, paddingBottom: 20 }}
        />
      </View>
    </View>
  );
};

export default BeautyServiceDetails;
