import { View, Text, Modal, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CopySuccessModal = ({ visible, onClose, referralCode }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 items-center justify-center px-[8%]">
        <View className="bg-white rounded-[20px] p-[8%] items-center w-[85%] max-w-[300px]">
          {/* Success Icon */}
          <View className="w-[60px] h-[60px] bg-green-100 rounded-full items-center justify-center mb-[5%]">
            <Ionicons name="checkmark-circle" size={36} color="#22c55e" />
          </View>

          {/* Title */}
          <Text className="text-gray-900 text-xl font-bold mb-[2%] text-center">
            Copied!
          </Text>

          {/* Description */}
          <Text className="text-gray-600 text-base text-center mb-[6%] leading-[22px]">
            Referral code copied to clipboard
          </Text>

          {/* Referral Code Display */}
          <View className="bg-gray-100 rounded-[12px] px-[6%] py-[3%] mb-[8%]">
            <Text className="text-gray-800 font-bold text-lg tracking-wider">
              {referralCode}
            </Text>
          </View>

          {/* Close Button */}
          <TouchableOpacity
            className="bg-black rounded-[12px] px-[8%] py-[3%] w-full"
            onPress={onClose}
          >
            <Text className="text-white font-semibold text-base text-center">
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CopySuccessModal;
