import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HairCutServiceModal = ({ visible, onClose, service }) => {
  // Update modal visibility when props change
  React.useEffect(() => {
    setIsServiceModalVisible(visible);
  }, [visible]);

  const [isServiceModalVisible, setIsServiceModalVisible] = useState(false);

  const handleCancel = () => {
    setIsServiceModalVisible(false);
    onClose?.();
    // Handle actual cancellation logic here
    console.log("Service cancelled");
  };

  const handleClose = () => {
    setIsServiceModalVisible(false);
    onClose?.();
  };

  const handleView = () => {
    // Handle view action here
    console.log("View service details");
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isServiceModalVisible}
      onRequestClose={handleClose}
    >
      {/* Backdrop */}
      <Pressable
        className="flex-1 bg-black/50 justify-end"
        onPress={handleClose}
      >
        {/* Modal Content */}
        <Pressable
          className="bg-white rounded-t-[20px] px-[6%] py-[4%]"
          onPress={() => {}} // Prevent modal from closing when tapping inside
        >
          {/* Header */}
          <View className="flex-row justify-between items-center mb-[4%]">
            <Text className=" font-poppinsSemiBold text-[#1F2937] text-lg">
              Service Details
            </Text>
            <TouchableOpacity onPress={handleClose} className="p-2">
              <Ionicons name="close" size={24} color="#1F2937" />
            </TouchableOpacity>
          </View>

          {/* Service Image */}
          <View className="mb-[4%]">
            <Image
              source={{
                uri:
                  service.image ||
                  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=200&fit=crop",
              }}
              className="w-full h-[200px] rounded-[12px]"
              resizeMode="cover"
            />
          </View>

          {/* Service Title */}
          <Text className=" font-poppinsSemiBold text-2xl text-black text-center mb-[6%]">
            {service.serviceName || "Haircut & Style"}
          </Text>

          {/* Service Provider */}
          <View className="flex-row items-center mb-[4%]">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
              }}
              className="w-[35px] h-[35px] rounded-full mr-[3%]"
            />
            <View className="flex-1 flex-row justify-between">
              <View className="">
                <Text className="font-poppinsMedium text-sm text-black">
                  {service.providerName}
                </Text>

                <Text className="font-poppins text-xs text-black ">
                  (Haircut & Style)
                </Text>
              </View>
              <View className="flex-row bg-[#F8F8F8] border border-[#F8F8F8] items-center justify-center px-[2%] rounded-md ">
                <Text className="font-poppins text-xs text-black">
                  Beginner{" "}
                </Text>
                <Ionicons name="leaf-outline" size={12} color="#E3C464FA" />
              </View>
            </View>
          </View>

          {/* Service Details */}
          <View className="mb-[6%]">
            <View className="flex-row justify-between py-[2%]">
              <Text className=" font-poppinsMedium text-sm text-black ">
                Price
              </Text>
              <Text className="font-poppins text-sm text-black">
                {service.price}
              </Text>
            </View>

            <View className="flex-row justify-between py-[2%]">
              <Text className="font-poppinsMedium text-sm text-black ">
                Location
              </Text>
              <Text className="font-poppins text-sm text-black">
                XYZ Street
              </Text>
            </View>

            <View className="flex-row justify-between py-[2%]">
              <Text className="font-poppinsMedium text-sm text-black ">
                Rating
              </Text>
              <View className="flex-row items-center">
                <Ionicons name="star" size={16} color="#FDAF07" />
                <Text className="font-poppins text-sm text-black ml-1">
                  {service.rating}
                </Text>
                <Text className="text-gray-500 ml-1">(445)</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default HairCutServiceModal;
