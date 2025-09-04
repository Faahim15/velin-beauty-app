import { View, Text, Image } from "react-native";
import { scale, verticalScale } from "../adaptiveness/adaptiveness";
import { Ionicons } from "@expo/vector-icons";
export default function UserProfile() {
  return (
    <View className="bg-white w-full pl-[6.75%] pb-[2%] px-[6%] border-b-[0.7px] border-[#000] mt-[2%]  items-center">
      <View
        style={{
          width: scale(96),
          height: verticalScale(96),
          borderRadius: scale(48),
          borderWidth: scale(2),
          borderColor: "#fff",
        }}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
          }}
          className="w-full h-full  rounded-full mb-[3%]"
          resizeMode="cover"
        />
      </View>
      <Text className="font-poppinsSemiBold text-lg text-[#060605] mb-[1%]">
        Mandy
      </Text>
      <View className="flex-row gap-[2%]">
        <Text className="font-poppins text-xs text-black">New Customer</Text>
        <Ionicons name="leaf-outline" size={16} color="#E0C168" />
      </View>
    </View>
  );
}
