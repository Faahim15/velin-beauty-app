import { Ionicons } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";

export default function ServiceButton({ children, onPress }) {
  return (
    <View className="px-[6%]">
      <Pressable onPress={onPress}>
        <View className="bg-[#060605] border py-[2.8%] border-white rounded-md">
          <Ionicons
            name="chatbubble-outline"
            size={22}
            color="white"
            className="absolute left-[32%] top-[45%] "
          />
          <Text className="font-poppinsMedium text-white text-base text-center ">
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
