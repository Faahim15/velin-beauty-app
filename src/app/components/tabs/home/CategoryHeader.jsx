import { View, Text, TouchableOpacity } from "react-native";

export default function CategoryHeader({ title }) {
  return (
    <View className="flex-row px-[6%] justify-between items-center mb-[2%]">
      <Text className="text-xl font-poppinsSemiBold text-[#1B1B25]">
        {title}
      </Text>
      <TouchableOpacity>
        <Text className="font-poppinsSemiBold text-base text-[#666666]">
          See All
        </Text>
      </TouchableOpacity>
    </View>
  );
}
