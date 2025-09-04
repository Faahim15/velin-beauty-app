import { View, Text, FlatList, TouchableOpacity } from "react-native";
import UserProfile from "./UserProfile";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import bonusItems from "../fakeData/tabs/bonus/BonusItem";
import { verticalScale } from "../adaptiveness/adaptiveness";
export default function LevelUp() {
  const renderBonusItem = ({ item, index }) => {
    const isCompleted = item.status === "completed";
    const isPending = item.status === "pending";
    const isLocked = item.status === "locked";
    const isLast = index === bonusItems.length - 1;

    return (
      <View className="flex-row items-center mx-[6%] mb-[4%]">
        {/* Timeline line */}
        <View className="items-center mr-[4%]">
          {/* Status circle */}
          <View
            className={`w-[50px] h-[50px] rounded-full items-center justify-center ${
              isCompleted
                ? "bg-green-500"
                : isPending
                  ? "bg-blue-500"
                  : "bg-gray-300"
            }`}
          >
            <Ionicons
              name={
                isCompleted ? "checkmark" : isPending ? "time" : "lock-closed"
              }
              size={24}
              color="white"
            />
          </View>

          {/* Connecting line */}
          {!isLast && (
            <View
              className={`w-[3px] h-[80px] mt-[2%] ${
                isCompleted ? "bg-orange-400" : "bg-gray-300"
              }`}
            />
          )}
        </View>

        {/* Content card */}
        <View className="flex-1">
          <View
            className={`rounded-2xl p-[4%] ${
              isCompleted ? "bg-white" : "bg-gray-100"
            }`}
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: isCompleted ? 0.1 : 0.05,
              shadowRadius: 8,
              elevation: isCompleted ? 3 : 1,
            }}
          >
            <View className="flex-row items-center justify-between mb-[2%]">
              <Text
                className={`text-lg font-semibold ${
                  isCompleted ? "text-gray-800" : "text-gray-500"
                }`}
              >
                {item.title}
              </Text>
              <Text
                className={`font-bold ${
                  isCompleted ? "text-green-500" : "text-gray-400"
                }`}
              >
                {item.points}
              </Text>
            </View>

            <Text
              className={`text-sm ${
                isCompleted ? "text-gray-600" : "text-gray-400"
              }`}
            >
              {item.description}
            </Text>

            {isPending && (
              <TouchableOpacity className="bg-green-500 rounded-lg py-[3%] mt-[3%] items-center">
                <Text className="text-white font-semibold">Claim Bonus</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };
  return (
    <View className="flex-1 bg-white">
      <UserProfile />
      <FlatList
        data={bonusItems}
        renderItem={renderBonusItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: verticalScale(100), // Enough space for bottom nav or floating buttons
        }}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
}
