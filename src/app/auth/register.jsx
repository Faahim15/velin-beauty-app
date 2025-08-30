import { View, Text, TouchableOpacity, Pressable } from "react-native";
import AuthHeader from "../components/auth/AuthHeader";
import ProfilePictureUpload from "../components/auth/PictureUpload";
import PasswordInput from "../components/auth/PasswordInput";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
export default function register() {
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  return (
    <View className="flex-1 bg-white">
      <AuthHeader />
      <ProfilePictureUpload />
      <View className="px-[6%] mt-[1.8%]">
        <Text className="font-poppins mb-[1.8%] text-base text-[#060605]">
          New Password
        </Text>
        <PasswordInput placeholder="New password" />
      </View>
      <View className="px-[6%] mt-[1.8%]">
        <Text className="font-poppins mb-[1.8%] text-base text-[#060605]">
          Confirm Password
        </Text>
        <PasswordInput placeholder="Confirm password" />
      </View>

      <View className=" mt-[10%] ">
        {/* Terms and Conditions */}
        <View className="flex-row pl-[5.9%] mb-[1%]  items-center">
          <TouchableOpacity
            onPress={() => setAgreeToTerms(!agreeToTerms)}
            className="mr-[3%]"
          >
            <Ionicons
              name={agreeToTerms ? "checkbox" : "square-outline"}
              size={20}
              color={agreeToTerms ? "#000" : "#9CA3AF"}
            />
          </TouchableOpacity>
          <Text className="text-sm font-poppins text-black">
            Agree with
            <Text className="text-[#000]"> Terms and Privacy Policy</Text>
          </Text>
        </View>

        {/* Sign In button */}

        <View className="px-[6%]">
          <Pressable
            disabled={!agreeToTerms}
            style={{ opacity: agreeToTerms ? 1 : 0.6 }}
          >
            <View className="bg-[#060605] border py-[2.8%] border-white rounded-md">
              <Text className="font-poppinsBold text-white text-base text-center ">
                Sign In
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
