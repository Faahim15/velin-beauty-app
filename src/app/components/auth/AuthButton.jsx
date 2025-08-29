import { View, Text, Pressable } from "react-native";

export default function AuthButton({ children, onPress }) {
  return (
    <View className="px-[6%]">
      <Pressable onPress={onPress}>
        <View className="bg-[#060605] border py-[2.8%] border-white rounded-md">
          <Text className="font-poppinsBold text-white text-base text-center ">
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
