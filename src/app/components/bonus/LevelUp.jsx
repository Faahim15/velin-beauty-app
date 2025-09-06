import { View, Text, FlatList } from "react-native";
import UserProfile from "./UserProfile";
import { Ionicons } from "@expo/vector-icons";
import bonusItems from "../fakeData/tabs/bonus/BonusItem";
import { SvgXml } from "react-native-svg";
import { scale, verticalScale } from "../adaptiveness/adaptiveness";
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
                ? "bg-[#0D8D01]"
                : isPending
                  ? "bg-[#0D8D01]"
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
                isCompleted ? "bg-[#0D8D01]" : "bg-gray-300"
              }`}
            />
          )}
        </View>

        {/* Content card */}
        <View className="flex-1">
          <View
            className={`rounded-2xl p-[4%] ${
              isCompleted ? "bg-[#0D8D01]" : "bg-gray-100"
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
                className={`text-lg font-poppinsBold ${
                  isCompleted ? "text-white" : "text-gray-500"
                }`}
              >
                {item.title}
              </Text>

              <SvgXml
                xml={item.badge}
                height={verticalScale(24)}
                width={scale(24)}
              />
            </View>

            <Text
              className={`text-xs font-poppins ${
                isCompleted ? "text-white/80" : "text-gray-400"
              }`}
            >
              {item.description}
            </Text>
            <Text
              className={`text-xs font-poppins mt-[1%] ${
                isCompleted ? "text-white/80" : "text-gray-400"
              }`}
            >
              {item.reward}
            </Text>
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
          paddingBottom: verticalScale(40), // Enough space for bottom nav or floating buttons
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
