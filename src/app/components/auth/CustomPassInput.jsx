import { View, Text, TouchableOpacity } from "react-native";
import PasswordInput from "./PasswordInput";

export default function CustomPassInput({
  createNewPass,
  passText,
  onPress,
  activeInfo,
}) {
  return (
    <View className="px-[6%] mt-[1.8%]">
      <View className="flex-row">
        <Text className="font-poppins mb-[1.8%] text-base text-[#060605]">
          {passText}
        </Text>
        {!createNewPass && (
          <TouchableOpacity
            onPress={onPress}
            className="flex-row pt-[1.1%] gap-[5%]"
          >
            <View className="w-4 h-4  rounded-full border border-black bg-white ml-2 items-center justify-center">
              <Text className="text-black font-poppins text-xs">i</Text>
            </View>
            {activeInfo === passText && (
              <Text className="text-black font-poppins text-xs">Mandatory</Text>
            )}
          </TouchableOpacity>
        )}
      </View>
      <PasswordInput placeholder={passText} />
    </View>
  );
}
