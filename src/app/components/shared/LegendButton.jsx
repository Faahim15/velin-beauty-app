import { View, Text, TouchableOpacity } from "react-native";

export default function LegendButton({ onPress, activeButton, title }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-[6%] py-[2%] rounded-full  items-center ${
        activeButton === true ? "bg-[#29BA66]" : "bg-green-100"
      }`}
    >
      <Text
        className={`font-poppins text-sm ${activeButton === true ? "text-white" : "text-green-600"}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
