import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function InputField({ textInputConfig, activeInfo, onPress }) {
  return (
    <View className="">
      <View className="flex-row ">
        <Text className="font-poppins text-base text-[#060605]">
          {textInputConfig.label
            ? textInputConfig.label
            : textInputConfig.placeholder}
        </Text>
        <TouchableOpacity
          onPress={onPress}
          className="flex-row pt-[1.1%] gap-[5%]"
        >
          <View className="w-4 h-4  rounded-full border border-black bg-white ml-2 items-center justify-center">
            <Text className="text-black font-poppins text-xs">i</Text>
          </View>
          {activeInfo === textInputConfig.token && (
            <Text className="text-black font-poppins text-xs">Mandatory</Text>
          )}
        </TouchableOpacity>
      </View>
      <TextInput
        className="border mt-[1.18%] font-poppins text-base border-[#484847] w-full rounded-md py-[4%] px-[4%] "
        {...textInputConfig}
      />
    </View>
  );
}
