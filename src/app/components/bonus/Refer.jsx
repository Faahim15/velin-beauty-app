import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import CopySuccessModal from "./modal/CopySuccessModal";
import { SvgXml } from "react-native-svg";
import { smartPhones } from "../../../../assets/constant/images/images";
import { scale, verticalScale } from "../adaptiveness/adaptiveness";
const ReferralScreen = () => {
  const referralCode = "ANDREW56G5";
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCopyCode = async () => {
    try {
      await Clipboard.setStringAsync(referralCode);
      setCopied(true);
      setShowModal(true);
      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy referral code:", error);
    }
  };

  const handleShareReferralCode = () => {
    // Handle sharing functionality
    console.log("Share referral code");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 bg-white ">
        {/* Header Tabs */}
        <View className="flex-row justify-evenly mx-[4.61%] mb-[2.36%]  mt-[2.36%]">
          <TouchableOpacity className="bg-black border-2 border-black py-[2%] justify-center items-center rounded-md px-[4.61%]">
            <Text className="font-poppinsMedium text-sm text-white ">
              Your Referrals
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white border-2 border-black py-[2%] justify-center items-center rounded-md px-[4.61%]">
            <Text className="font-poppinsMedium text-sm text-black">
              Invited Friends (24)
            </Text>
          </TouchableOpacity>
        </View>

        {/* Main Illustration */}
        <View className="items-center mx-[8%] mb-[0%]">
          <View>
            <SvgXml
              xml={smartPhones}
              height={verticalScale(184)}
              width={scale(238)}
            />
          </View>
          <Text className="font-poppins text-sm text-black mt-[2.36%]">
            Invite to Your friends
          </Text>
        </View>

        {/* Referral Code Section */}
        <View className="mx-[6%] mb-[6%]">
          <Text className="text-gray-600 text-sm font-medium mb-[3%] text-center">
            Your Referral Code
          </Text>
          <View className="bg-gray-100 rounded-[12px] p-[4%] flex-row items-center justify-between">
            <Text className="text-black text-xl font-bold tracking-wider">
              {referralCode}
            </Text>
            <TouchableOpacity className="p-[2%]" onPress={handleCopyCode}>
              <Ionicons
                name={copied ? "checkmark-outline" : "copy-outline"}
                size={24}
                color={copied ? "#22c55e" : "#666"}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Benefits Section */}
        <View className="mx-[6%] mb-[8%]">
          {/* Invite Friends */}
          <View className="flex-row items-start mb-[6%]">
            <View className="w-[40px] h-[40px] bg-orange-100 rounded-full items-center justify-center mr-[4%] mt-[1%]">
              <Ionicons name="people-outline" size={20} color="#f97316" />
            </View>
            <View className="flex-1">
              <Text className="text-gray-800 text-base font-semibold mb-[1%]">
                Invite Friends
              </Text>
              <Text className="text-gray-600 text-sm leading-[20px]">
                Send your friend your personal invite link
              </Text>
            </View>
          </View>

          {/* You Get Free Point */}
          <View className="flex-row items-start">
            <View className="w-[40px] h-[40px] bg-green-100 rounded-full items-center justify-center mr-[4%] mt-[1%]">
              <Ionicons name="gift-outline" size={20} color="#22c55e" />
            </View>
            <View className="flex-1">
              <Text className="text-gray-800 text-base font-semibold mb-[1%]">
                You Get Free Point
              </Text>
              <Text className="text-gray-600 text-sm leading-[20px]">
                When they join Velin you get 5,000 free points
              </Text>
            </View>
          </View>
        </View>

        {/* Share Button */}
        <View className="mx-[6%] mb-[8%]">
          <TouchableOpacity
            className="bg-black rounded-[12px] py-[4%] flex-row items-center justify-center"
            onPress={handleShareReferralCode}
          >
            <Ionicons
              name="share-outline"
              size={20}
              color="white"
              className="mr-[2%]"
            />
            <Text className="text-white text-base font-semibold ml-[2%]">
              Share my referral code
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Copy Success Modal */}
      <CopySuccessModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        referralCode={referralCode}
      />
    </SafeAreaView>
  );
};

export default ReferralScreen;
