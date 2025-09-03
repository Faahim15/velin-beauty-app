import { View, Text } from "react-native";
import BaseHeader from "../../components/shared/BaseHeader";
import PaymentGatewaySelector from "../../components/booking/payment/PaymentGatway";
import AuthButton from "../../components/auth/AuthButton";
import { useState } from "react";
import RefundCompletedModal from "../../components/booking/modal/RefundCompletedModal";
export default function cancelBooking() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View className="flex-1 bg-white">
      <BaseHeader title="Cancel Booking" />
      <PaymentGatewaySelector />

      {/* Button */}

      <View className="mb-[20%]">
        <View>
          <Text className="text-center pb-[1%] font-poppinsMedium text-base text-[#797979] ">
            Paid : $150.00{" "}
            <Text className="font-poppinsMedium text-base text-black">
              {" "}
              Refund : $120.00{" "}
            </Text>
          </Text>
          <AuthButton onPress={() => setModalVisible(true)}>Refund</AuthButton>
        </View>
        <RefundCompletedModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </View>
    </View>
  );
}
