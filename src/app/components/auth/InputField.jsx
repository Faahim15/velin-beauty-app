import { View, Text, TextInput } from "react-native";

export default function InputField({ textInputConfig }) {
  return (
    <View className="">
      <Text className="font-poppins text-base text-[#060605]">
        {textInputConfig.label
          ? textInputConfig.label
          : textInputConfig.placeholder}
      </Text>
      <TextInput
        className="border mt-[1.18%] font-poppins text-base border-[#484847] w-full rounded-md py-[4%] px-[4%] "
        {...textInputConfig}
      />
    </View>
  );
}
