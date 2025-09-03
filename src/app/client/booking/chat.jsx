import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  scale,
  verticalScale,
} from "../../components/adaptiveness/adaptiveness";
import buttonStyles from "../../util/styles";
import { router } from "expo-router";
function ChatScreen() {
  const [message, setMessage] = useState("");

  const messages = [
    {
      id: 1,
      text: "Hello, good morning :)",
      time: "11:20 PM",
      isUser: true,
      isRead: true,
    },
    {
      id: 2,
      text: "Good morning, anything we can help at Plush Beauty Lounge Salon?",
      time: "11:21 PM",
      isUser: false,
    },
    {
      id: 3,
      text: "This look awesome 😍",
      time: "",
      isUser: true,
      isRead: true,
    },
    {
      id: 4,
      text: "",
      time: "",
      isUser: true,
      hasImage: true,
      isRead: true,
    },
    {
      id: 5,
      text: "I would like to book an appointment at 2:30 PM today.",
      time: "11:20 PM",
      isUser: true,
      isRead: true,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        {/* Header */}
        <View className="flex-row gap-[3%] items-center px-[4%] py-[3%] bg-white border-b border-gray-100">
          <View
            style={buttonStyles}
            className="  border border-[#484847] justify-center items-center "
          >
            <Pressable onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={20} color="#1B1B25" />
            </Pressable>
          </View>

          <View className="flex-row items-center flex-1">
            <View className="justify-center mt-[2%] mr-[3%]">
              <Image
                style={{
                  width: scale(44),
                  height: verticalScale(44),
                  borderRadius: scale(22),
                }}
                source={{
                  uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                }}
                className=" "
              />
            </View>
            <View className="flex-1">
              <Text className="font-poppinsMedium text-base text-[#1B1B25] ">
                Noah Liam
              </Text>
              <Text className="font-poppins text-sm text-[#1B1B25] ">
                Haircut & Style
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Messages */}
        <ScrollView className="flex-1 px-[4%] py-[2%]">
          {messages.map((msg) => (
            <View
              key={msg.id}
              className={`mb-[3%] ${msg.isUser ? "items-end" : "items-start"}`}
            >
              <View className="flex-row items-start max-w-[80%]">
                {!msg.isUser && (
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                    }}
                    className="w-[8%] h-[8%] rounded-full mr-[2%] mt-[1%]"
                  />
                )}

                <View className="flex-1">
                  {msg.hasImage ? (
                    <View
                      className={`rounded-2xl overflow-hidden ${msg.isUser ? "bg-gray-100" : "bg-teal-600"}`}
                    >
                      <Image
                        source={{
                          uri: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&h=200&fit=crop",
                        }}
                        className="w-[100%] h-[120px]"
                        resizeMode="cover"
                      />
                    </View>
                  ) : (
                    <View
                      className={`px-[4%] py-[3%] rounded-2xl ${
                        msg.isUser
                          ? "bg-gray-100 rounded-br-md"
                          : "bg-teal-600 rounded-bl-md"
                      }`}
                    >
                      <Text
                        className={`text-base ${msg.isUser ? "text-black" : "text-white"}`}
                      >
                        {msg.text}
                      </Text>
                    </View>
                  )}

                  {msg.time && (
                    <View className="flex-row items-center justify-end mt-[1%]">
                      <Text className="text-xs text-gray-400 mr-[1%]">
                        {msg.time}
                      </Text>
                      {msg.isUser && msg.isRead && (
                        <Ionicons
                          name="checkmark-done"
                          size={16}
                          color="#10b981"
                        />
                      )}
                    </View>
                  )}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Input Area */}
        <View className="flex-row items-center px-[4%] py-[3%] bg-white border-t border-gray-100">
          <TouchableOpacity className="mr-[3%]">
            <Ionicons name="attach" size={24} color="#666" />
          </TouchableOpacity>

          <View className="flex-1 flex-row items-center bg-gray-100 rounded-full px-[4%] py-[2.5%]">
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Type a message"
              placeholderTextColor="#999"
              className="flex-1 text-base text-black"
              multiline
            />
            <TouchableOpacity className="ml-[2%]">
              <Ionicons name="happy-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="ml-[3%] bg-teal-600 rounded-full p-[3%]">
            <Ionicons name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
export default ChatScreen;
