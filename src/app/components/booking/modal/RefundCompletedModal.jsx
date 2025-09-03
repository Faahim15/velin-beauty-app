import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import LottieView from "lottie-react-native";
import { scale, verticalScale } from "../../adaptiveness/adaptiveness";
import { router } from "expo-router";

const RefundCompletedModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 justify-center items-center px-[8%]">
        <View className="bg-white  rounded-2xl w-[90%] max-w-sm items-center py-[8%] px-[6%]">
          {/* Success Icon Container */}

          {/* Decorative dots around the icon */}
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            className="mb-[15%] mt-[10%] "
          >
            <LottieView
              source={require("../../../../../assets/constant/refundSuccess.json")}
              autoPlay
              loop={false}
              style={{
                width: scale(200),
                height: verticalScale(200),
              }}
            />
          </View>

          {/* Title */}
          <Text className="text-2xl font-poppinsBold text-black mb-[3%] text-center">
            Refund Completed
          </Text>

          {/* Subtitle */}
          <Text className="text-xs text-[#50555C] text-center mb-[8%] leading-5 px-[4%]">
            Lorem ipsum dolor sit amet consectetur. Aenean justo risus tellus ut
            sed orci.
          </Text>

          {/* Thank You Button */}
          <TouchableOpacity
            className="w-[85%] bg-black rounded-lg py-[4%] items-center"
            onPress={() => router.push("/booking")}
          >
            <Text className="text-white font-poppinsBold text-base">
              Thank You
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default RefundCompletedModal;
