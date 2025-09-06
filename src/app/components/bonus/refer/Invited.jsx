import React from "react";
import { View, Text, Image, FlatList, SafeAreaView } from "react-native";

const InvitedFriendsList = () => {
  const userData = [
    {
      id: "1",
      name: "Alex Rodriguez",
      joinDate: "Joined 15 March 2024",
      points: "8,420 PTS",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "2",
      name: "Sarah Chen",
      joinDate: "Joined 22 January 2025",
      points: "12,650 PTS",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "3",
      name: "Maya Patel",
      joinDate: "Joined 08 November 2024",
      points: "4,890 PTS",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "4",
      name: "Emma Thompson",
      joinDate: "Joined 30 June 2024",
      points: "15,230 PTS",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "5",
      name: "David Kim",
      joinDate: "Joined 14 September 2024",
      points: "7,560 PTS",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "6",
      name: "Zoe Martinez",
      joinDate: "Joined 05 December 2024",
      points: "9,180 PTS",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "7",
      name: "Luna Williams",
      joinDate: "Joined 17 February 2025",
      points: "3,740 PTS",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "8",
      name: "Marcus Johnson",
      joinDate: "Joined 11 October 2024",
      points: "11,920 PTS",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "9",
      name: "Aria Singh",
      joinDate: "Joined 26 August 2024",
      points: "6,450 PTS",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: "10",
      name: "Jake Morrison",
      joinDate: "Joined 03 April 2024",
      points: "13,890 PTS",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const renderUserItem = ({ item }) => (
    <View className="bg-[#F4F0E9] mx-[6.75%] mb-[2%] rounded-lg px-[4%] py-[3%] flex-row items-center">
      <Image
        source={{ uri: item.avatar }}
        className="w-[50px] h-[50px] rounded-full mr-[4%]"
        resizeMode="cover"
      />

      <View className="flex-1">
        <Text className="text-[#1B1B25] text-base font-poppinsSemiBold mb-[1%]">
          {item.name}
        </Text>
        <Text className="font-poppinsMedium text-[#1B1B25]  text-xs ">
          {item.joinDate}
        </Text>
      </View>

      <View className="items-end">
        <Text className="text-[#1B1B25] text-xs font-poppins">
          {item.points}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={userData}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default InvitedFriendsList;
