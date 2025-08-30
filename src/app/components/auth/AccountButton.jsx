import { View, Text, Pressable } from "react-native";

export default function AccountButton({ children, onPress, style }) {
  return (
    <View className="px-[8.7%]">
      <Pressable onPress={onPress}>
        <View
          style={{ backgroundColor: style.backgroundColor }}
          className="bg-[#060605] border py-[3%] border-[#090909] rounded-md"
        >
          <Text
            style={{ color: style.buttonText }}
            className="font-poppinsSemiBold text-white text-2xl text-center tracking-widest"
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
