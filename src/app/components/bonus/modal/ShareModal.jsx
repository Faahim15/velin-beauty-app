import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "../../adaptiveness/adaptiveness";

const ShareModal = ({ visible, onClose }) => {
  // Sample recent people data
  const recentPeople = [
    {
      id: "1",
      name: "John",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: "2",
      name: "Sarah",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "3",
      name: "Mike",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: "4",
      name: "Emma",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: "5",
      name: "Lisa",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: "6",
      name: "Lisa",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: "7",
      name: "Lisa",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    },
  ];

  // Social media platforms
  const socialMedia = [
    {
      id: "1",
      name: "Facebook",
      icon: "logo-facebook",
      color: "#1877F2",
      bgColor: "#1877F2",
    },
    {
      id: "2",
      name: "WhatsApp",
      icon: "logo-whatsapp",
      color: "#25D366",
      bgColor: "#25D366",
    },
    {
      id: "3",
      name: "Snapchat",
      icon: "camera",
      color: "#FFFC00",
      bgColor: "#FFFC00",
    },
    {
      id: "4",
      name: "TikTok",
      icon: "musical-notes",
      color: "#000000",
      bgColor: "#000000",
    },
    {
      id: "5",
      name: "Instagram",
      icon: "logo-instagram",
      color: "#E4405F",
      bgColor:
        "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)",
    },
    {
      id: "6",
      name: "Instagram",
      icon: "logo-instagram",
      color: "#E4405F",
      bgColor:
        "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)",
    },
    {
      id: "7",
      name: "Instagram",
      icon: "logo-instagram",
      color: "#E4405F",
      bgColor:
        "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)",
    },
  ];

  const renderPersonItem = ({ item }) => (
    <TouchableOpacity className="items-center mx-[2%]">
      <View className="w-[60px] h-[60px] rounded-full overflow-hidden mb-[8px]">
        <Image
          source={{ uri: item.avatar }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
      <Text className="text-gray-700 text-xs text-center">{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSocialItem = ({ item }) => (
    <TouchableOpacity className="items-center mx-[2%]">
      <View
        className="w-[60px] h-[60px] rounded-full items-center justify-center mb-[8px]"
        style={{ backgroundColor: item.bgColor }}
      >
        <Ionicons
          name={item.icon}
          size={30}
          color={item.name === "Snapchat" ? "#000000" : "#FFFFFF"}
        />
      </View>
      <Text className="text-gray-700 text-xs text-center">{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-[20px] px-[6%] py-[5%]">
            {/* Header */}
            <View className="items-center mb-[6%]">
              <View className="w-[12%] h-[4px] bg-gray-300 rounded-full mb-[4%]" />
              <Text className="text-lg font-semibold text-gray-800">Share</Text>
            </View>

            {/* Recent People Section */}
            <View className="mb-[8%]">
              <Text className="text-sm font-medium text-gray-600 mb-[4%] border-b-[0.5px] border-black pb-[2%]">
                Recent People
              </Text>
              <FlatList
                data={recentPeople}
                renderItem={renderPersonItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: scale(100) }}
              />
            </View>

            {/* Social Media Section */}
            <View className="mb-[4%]">
              <Text className="text-sm font-medium text-gray-600 mb-[4%] border-b-[0.5px] border-black pb-[2%]">
                Social Media
              </Text>
              <FlatList
                data={socialMedia}
                renderItem={renderSocialItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: scale(100) }}
              />
            </View>

            {/* Close Button */}
            <TouchableOpacity
              onPress={onClose}
              className="bg-gray-100 rounded-xl py-[4%] items-center mt-[4%]"
            >
              <Text className="text-gray-700 font-medium">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ShareModal;
