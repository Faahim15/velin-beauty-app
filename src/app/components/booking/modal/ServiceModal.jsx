import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StarRating from "../view/Rating";
import Button from "../view/Button";
import { router } from "expo-router";
import FormatDate from "../../../util/formatDate";
const ServiceModal = ({ visible, onClose, service, showRating = true }) => {
  // Update modal visibility when props change
  useEffect(() => {
    setIsServiceModalVisible(visible);
  }, [visible]);
  // console.log("showRating", showRating);
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
  //rating handlers
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleStarPress = (starIndex) => {
    setRating(starIndex + 1);
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
        className="flex-1 w-full bg-black/50 justify-center px-[6%] items-center "
        onPress={handleClose}
      >
        {/* Modal Content */}
        <Pressable
          className="bg-white w-full rounded-t-[20px] px-[6%] py-[4%]"
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
            {/* price */}
            <View className="flex-row justify-between py-[2%]">
              <Text className=" font-poppinsMedium text-sm text-black ">
                Price
              </Text>
              <Text className="font-poppins text-sm text-black">
                {service.price}
              </Text>
            </View>
            {/* location */}
            <View className="flex-row justify-between py-[2%]">
              <Text className="font-poppinsMedium text-sm text-black ">
                Location
              </Text>
              <Text className="font-poppins text-sm text-black">
                XYZ Street
              </Text>
            </View>
            {/* time */}
            <View className="flex-row justify-between py-[2%]">
              <Text className="font-poppinsMedium text-sm text-black ">
                Time
              </Text>
              <Text className="font-poppins text-sm text-black">
                3:00 PM - 11:00 PM
              </Text>
            </View>
            {/* date */}
            <View className="flex-row justify-between py-[2%]">
              <Text className="font-poppinsMedium text-sm text-black ">
                Date
              </Text>
              <Text className="font-poppins text-sm text-black">
                {FormatDate(new Date())}
              </Text>
            </View>

            {/* Reviews and Rating */}

            {showRating && (
              <View>
                <View className="flex-row justify-between py-[2%]">
                  <Text className="font-poppinsMedium text-sm text-black ">
                    Rating
                  </Text>
                  <StarRating
                    rating={rating}
                    handleStarPress={handleStarPress}
                  />
                </View>
                {rating > 0 && (
                  <View>
                    <TextInput
                      style={{ textAlignVertical: "top" }}
                      placeholder="Add a review"
                      placeholderTextColor="#898989"
                      className="min-h-[100px] text-black font-poppins border-[0.2px] px-[2%] py-[2%] border-black rounded"
                      multiline
                      editable={rating > 0 ? true : false}
                      value={review}
                      onChangeText={setReview}
                    />
                  </View>
                )}
                <View className="mx-[18%]">
                  <Button
                    buttonStyle={{
                      backgroundColor: "#fff",
                      textColor: "#0D8D01",
                      borderColor: "#0D8D01",
                      reviewText: review,
                    }}
                    onPress={() => router.back()}
                  >
                    Submit
                  </Button>
                </View>
              </View>
            )}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ServiceModal;
