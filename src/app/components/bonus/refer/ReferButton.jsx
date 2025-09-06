import { View, Text, TouchableOpacity } from "react-native";

export default function ReferButton({ children, onPress, active }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: active ? "#000" : "#fff" }}
      className={` border-2 border-black py-[2%] justify-center items-center rounded-md px-[4.61%]`}
    >
      <Text
        style={{ color: active ? "#fff" : "#000" }}
        className={`font-poppinsMedium text-sm `}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
