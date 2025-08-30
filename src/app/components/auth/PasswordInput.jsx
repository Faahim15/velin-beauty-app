import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { verticalScale, scale } from "../adaptiveness/adaptiveness";
import { useState } from "react";

export default function PasswordInput({ placeholder = "Enter your password" }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="">
      <View className="flex-row  border border-[#484847] rounded-md px-[4%] py-[3%]">
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#9CA3AF"
          style={{ paddingTop: verticalScale(9) }}
        />
        <TextInput
          className="flex-1 font-poppins ml-[3%] pt-[4%] text-sm   text-black "
          placeholder={placeholder}
          placeholderTextColor="#898989"
          secureTextEntry={!showPassword}
          //   style={{ color: "#000", paddingTop: verticalScale(16) }}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          className="ml-[2%]"
        >
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            color="#9CA3AF"
            style={{ paddingTop: verticalScale(10) }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
