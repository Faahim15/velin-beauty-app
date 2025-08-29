import { View, Text, Pressable } from "react-native";

export default function Button({ children }) {
  return (
    <View className="px-[6%] mt-[1.20%]">
      <Pressable>
        <View className="bg-white border py-[2.8%] border-white rounded-md">
          <Text className="font-poppinsBold text-xl text-center ">
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
