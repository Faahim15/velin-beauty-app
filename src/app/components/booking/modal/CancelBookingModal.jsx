import { View, Text, Modal, TouchableOpacity, Pressable } from "react-native";

const CancelBookingModal = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      {/* Backdrop */}
      <Pressable
        className="flex-1 bg-black/50 justify-center items-center px-[8%]"
        onPress={onClose}
      >
        {/* Modal Content */}
        <Pressable
          className="bg-white rounded-2xl w-full mx-[8%] py-[6%] px-[6%]"
          onPress={() => {}} // Prevent modal from closing when tapping inside
        >
          {/* Header */}
          <View className="items-center mb-[4%]">
            <Text className="text-red-500 text-lg font-semibold">
              Cancel Booking
            </Text>
          </View>

          {/* Content */}
          <View className="mb-[6%]">
            <Text className="text-gray-800 text-base font-medium text-center mb-[3%]">
              Are you sure want to cancel your booking?
            </Text>
            <Text className="text-gray-500 text-sm text-center leading-5">
              Lorem ipsum dolor sit amet consectetur. Amet justo nisl enim ut
              sed cras. Est molestie lacus imperdiet lobortis odio. Diam quam.
            </Text>
          </View>

          {/* Buttons */}
          <View className="flex-row gap-[3%]">
            {/* Cancel Button */}
            <TouchableOpacity
              className="flex-1 py-[3.5%] border border-gray-300 rounded-lg"
              onPress={onClose}
              activeOpacity={0.7}
            >
              <Text className="text-gray-600 text-center font-medium">
                Cancel
              </Text>
            </TouchableOpacity>

            {/* Confirm Button */}
            <TouchableOpacity
              className="flex-1 py-[3.5%] bg-black rounded-lg"
              onPress={onConfirm}
              activeOpacity={0.8}
            >
              <Text className="text-white text-center font-medium">
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default CancelBookingModal;
