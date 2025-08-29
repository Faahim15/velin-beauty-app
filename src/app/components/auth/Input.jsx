import { View, TextInput } from "react-native";

export default function Input({ textInputConfig }) {
  return (
    <View>
      <View className="">
        <TextInput
          className="border font-poppins border-[#484847] text-black rounded-md py-[5%] px-[4%] "
          {...textInputConfig}
        />
      </View>
    </View>
  );
}
