import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function AuthHeader({
  title = "Create Your Account",
  subtitle = "and start trying our services!",
}) {
  const router = useRouter();
  return (
    <View>
      <View className="mt-[15%] px-[6%]">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#1B1B25" />
        </TouchableOpacity>
      </View>
      <View className="px-[15%] mt-[2.5%]">
        <Text className="font-poppinsMedium text-center text-2xl">{title}</Text>
        <Text className="font-poppins mt-[1.2%] text-center text-sm">
          {subtitle}
        </Text>
      </View>
    </View>
  );
}
