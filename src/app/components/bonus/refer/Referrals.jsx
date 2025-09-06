import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { smartPhones } from "../../../../../assets/constant/images/images";
import { shareIcon } from "../../../../../assets/constant/icons/icon";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import CopySuccessModal from "../modal/CopySuccessModal";
import { scale, verticalScale } from "../../adaptiveness/adaptiveness";
import { useState } from "react";
export default function Referrals() {
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
    <View>
      {/* Main Illustration */}
      <View className="items-center mx-[8%] ">
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
      <View className=" bg-[#EFF8F7] shadow-md border border-[#EFF8F7] py-[3%] justify-center items-center rounded-md mx-[2.5%] mt-[2.36%]">
        <View>
          <Text className="font-poppinsMedium text-xs text-black ">
            Your Referral Code
          </Text>
        </View>
        <View className=" flex-row items-center justify-between">
          <Text className="font-poppinsMedium text-black text-xl ">
            {referralCode}
          </Text>
          <TouchableOpacity className="p-[2%]" onPress={handleCopyCode}>
            <Ionicons
              name={copied ? "checkmark-outline" : "copy-outline"}
              size={24}
              color={copied ? "#22c55e" : "#000"}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Benefits Section */}
      <View className="mx-[2.5%] mt-[2.36%]">
        {/* Invite Friends */}
        <View className="flex-row items-start mb-[1.18%]">
          <View className="w-[40px] h-[40px] bg-orange-100 rounded-full items-center justify-center mr-[4%] mt-[1%]">
            <Ionicons name="people-outline" size={20} color="#f97316" />
          </View>
          <View className="flex-1 mt-[1%]">
            <Text className="font-poppinsMedium text-sm text-black mb-[1%]">
              Invite Friends
            </Text>
            <Text className="font-poppins text-xs text-black">
              Send your friend your personal invite link
            </Text>
          </View>
        </View>

        {/* You Get Free Point */}
        <View className="flex-row items-start">
          <View className="w-[40px] h-[40px] bg-green-100 rounded-full items-center justify-center mr-[4%] mt-[1%]">
            <Ionicons name="gift-outline" size={20} color="#22c55e" />
          </View>
          <View className="flex-1 mt-[1%]">
            <Text className="font-poppinsMedium text-sm text-black mb-[1%]">
              You Get Free Point
            </Text>
            <Text className="font-poppins text-xs text-black">
              When they join Velin you get 5,000 free points
            </Text>
          </View>
        </View>
      </View>

      {/* Share Button */}
      <View className="mx-[6.75%] mt-[15%]">
        <Pressable
          className="bg-black rounded-md border border-black py-[4%] flex-row items-center justify-center"
          onPress={handleShareReferralCode}
        >
          <SvgXml
            xml={shareIcon}
            height={verticalScale(24)}
            width={scale(24)}
          />
          <Text className="font-poppinsBold text-base text-white ml-[2%]">
            Share my referral code
          </Text>
        </Pressable>
      </View>

      <CopySuccessModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        referralCode={referralCode}
      />
    </View>
  );
}
