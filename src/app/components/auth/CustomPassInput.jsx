import { View, Text } from "react-native";
import PasswordInput from "./PasswordInput";

export default function CustomPassInput({ passText }) {
  return (
    <View className="px-[6%] mt-[1.8%]">
      <Text className="font-poppins mb-[1.8%] text-base text-[#060605]">
        {passText}
      </Text>
      <PasswordInput placeholder={passText} />
    </View>
  );
}
