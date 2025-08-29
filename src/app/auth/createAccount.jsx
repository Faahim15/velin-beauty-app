import { View, Text, Image } from "react-native";
import React from "react";

export default function createAccount() {
  return (
    <View className="flex-1">
      <View className="mt-[20%] justify-center items-center">
        <Image source={require("../../../assets/auth/Vector.png")} />
      </View>
    </View>
  );
}
