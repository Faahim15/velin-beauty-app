import { View, Text } from "react-native";
import React from "react";

export default function Header({ title }) {
  return (
    <View className="px-[6%] mt-[3.5%] mb-[1.18%]">
      <Text className=" font-poppinsSemiBold text-base text-black ">
        {title}
      </Text>
    </View>
  );
}
