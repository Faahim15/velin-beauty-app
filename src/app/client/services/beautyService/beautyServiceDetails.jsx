import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import categorizedServices from "../../../components/fakeData/tabs/home/CategorizedServices";
import BaseHeader from "../../../components/shared/BaseHeader";
const BeautyServiceDetails = () => {
  const { serviceId } = useLocalSearchParams();
  const service = categorizedServices.find(
    (s) => s.id.toString() === serviceId
  );
  const services = [
    {
      id: 1,
      title: "Haircuts",
      price: "120.00 CHF",
      distance: "1.5 km",
      provider: "Emma",
      rating: 4.5,
      reviews: 445,
      image:
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Haircuts",
      price: "120.00 CHF",
      distance: "1.5 km",
      provider: "Emma",
      rating: 4.5,
      reviews: 445,
      image:
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Haircuts",
      price: "120.00 CHF",
      distance: "1.5 km",
      provider: "Emma",
      rating: 4.5,
      reviews: 445,
      image:
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Haircuts",
      price: "120.00 CHF",
      distance: "1.5 km",
      provider: "Emma",
      rating: 4.5,
      reviews: 445,
      image:
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Haircuts",
      price: "120.00 CHF",
      distance: "1.5 km",
      provider: "Emma",
      rating: 4.5,
      reviews: 445,
      image:
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop",
    },
  ];

  const ServiceCard = ({ service }) => (
    <View className="bg-white rounded-lg mx-[4%] mb-[3%] shadow-sm">
      <View className="flex-row p-[4%]">
        {/* Service Image */}
        <Image
          source={{ uri: service.image }}
          className="w-[20%] h-[60px] rounded-lg mr-[4%]"
          resizeMode="cover"
        />

        {/* Service Details */}
        <View className="flex-1 justify-between">
          {/* Title and Heart Icon */}
          <View className="flex-row justify-between items-start">
            <Text className="text-lg font-semibold text-gray-800 mb-[2%]">
              {service.title}
            </Text>
            <TouchableOpacity>
              <Ionicons name="heart-outline" size={24} color="#666" />
            </TouchableOpacity>
          </View>

          {/* Price and Distance */}
          <View className="flex-row justify-between items-center mb-[2%]">
            <Text className="text-base font-medium text-gray-700">
              {service.price}
            </Text>
            <View className="flex-row items-center">
              <Ionicons name="location-outline" size={16} color="#666" />
              <Text className="text-sm text-gray-600 ml-[1%]">
                {service.distance}
              </Text>
            </View>
          </View>

          {/* Provider and Rating */}
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <View className="w-[24px] h-[24px] bg-red-500 rounded-full mr-[2%] justify-center items-center">
                <Text className="text-white text-xs font-medium">
                  {service.provider.charAt(0)}
                </Text>
              </View>
              <Text className="text-sm text-gray-700 font-medium">
                {service.provider}
              </Text>
            </View>

            <View className="flex-row items-center">
              <Ionicons name="star" size={16} color="#FFA500" />
              <Text className="text-sm text-gray-700 ml-[1%]">
                {service.rating}({service.reviews})
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-50">
      <BaseHeader title={service?.title} />
      {/* Search Bar */}
      <View className="bg-white px-[4%] py-[4%] shadow-sm">
        <View className="flex-row items-center bg-gray-100 rounded-lg px-[4%] py-[3%]">
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            placeholder="Search Service & Professional"
            className="flex-1 ml-[3%] text-base text-gray-700"
            placeholderTextColor="#999"
          />
          <TouchableOpacity>
            <Ionicons name="options-outline" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Service List */}
      <FlatList
        data={services}
        renderItem={({ item }) => <ServiceCard service={item} />}
        keyExtractor={(item) => item.id.toString()}
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 20 }}
      />
    </View>
  );
};

export default BeautyServiceDetails;
