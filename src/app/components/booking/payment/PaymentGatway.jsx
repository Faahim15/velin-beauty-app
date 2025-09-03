import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../../adaptiveness/adaptiveness";

const PaymentGatewaySelector = () => {
  const [selectedGateway, setSelectedGateway] = useState("stripe");

  const paymentOptions = [
    {
      id: "stripe",
      name: "stripe",
      displayName: "stripe",
    },
  ];

  return (
    <View className="flex-1 bg-white px-[6%] py-[4%]">
      <Text className="text-[#313131] text-base font-poppins mb-[2%]">
        Select payment gateway
      </Text>

      {paymentOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          className="flex-row items-center justify-between bg-white border-[0.5px] border-black rounded-lg px-[4%] py-[3.5%] mb-[3%]"
          onPress={() => setSelectedGateway(option.id)}
        >
          <View className="flex-row items-center flex-1">
            <View
              style={{
                width: scale(18),
                height: verticalScale(18),
                borderRadius: scale(9),
              }}
              className=" bg-black border border-black mr-[4%] items-center justify-center"
            ></View>

            <Text className="font-poppinsSemiBold text-sm text-[#313131] ">
              {option.name}
            </Text>
          </View>

          <Text className="text-blue-600 text-base font-poppinsBold ">
            {option.displayName}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PaymentGatewaySelector;
