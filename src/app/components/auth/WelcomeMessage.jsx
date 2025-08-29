import { View, Text, Image } from "react-native";
import React from "react";

export default function WelcomeMessage() {
  return (
    <View className="mt-[20%] justify-center items-center">
      <Text className="font-poppinsMedium text-3xl">Welcome back!</Text>
      <View className="mt-[1%]">
        <Image source={require("../../../../assets/auth/Vector.png")} />
      </View>
    </View>
  );
}
