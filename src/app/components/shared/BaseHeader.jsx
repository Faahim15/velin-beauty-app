import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import buttonStyles from "../../util/styles";

export default function BaseHeader({ title }) {
  const router = useRouter();
  return (
    <View className="px-[6%] flex-row ">
      <View
        style={buttonStyles}
        className="  border border-[#484847] justify-center items-center "
      >
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={20} color="#1B1B25" />
        </Pressable>
      </View>
      <View className="justify-center items-center flex-1 ">
        <Text className="text-xl  font-poppinsMedium text-[#1B1B25]">
          {title}
        </Text>
      </View>
    </View>
  );
}
