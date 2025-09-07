import { View, Text, Pressable } from "react-native";
import { Image } from "react-native";
import { scale, verticalScale } from "../../adaptiveness/adaptiveness";
import { router } from "expo-router";
function ServiceDetails({ service }) {
  return (
    <View className="mx-[6%] gap-[3%] mt-[3%] ">
      {/* description */}
      <View>
        <Text className="font-poppinsSemiBold text-base text-[#111111]">
          Description
        </Text>
        <Text className="font-poppins text-sm text-[#50555C]">
          Lorem ipsum dolor sit amet consectetur. Amet justo nisl enim ut sed
          cras. Est malesuada lacus imperdiet lobortis odio.
        </Text>
      </View>
      {/* Location */}
      <View className="flex-row border-b border-black pb-[1%] gap-[2%] ">
        <Text className="font-poppinsSemiBold text-base text-[#111111]">
          Location:
        </Text>
        <Text className="font-poppins pt-[0.8%] text-sm text-black">
          XYZ street
        </Text>
      </View>
      {/* Schedule */}
      <View className="flex-row border-b border-black pb-[1%] gap-[2%] ">
        <Text className="font-poppinsSemiBold text-base text-[#111111]">
          Schedule:
        </Text>
        <Pressable onPress={() => router.push("../shared/calender")}>
          <Text className="font-poppins underline pt-[0.8%] text-sm text-black">
            View
          </Text>
        </Pressable>
      </View>

      {/* Contact */}
      <View>
        <Text className="font-poppinsSemiBold text-base text-[#000]">
          Professional
        </Text>
        <View className="flex-row items-center gap-[4%] mt-[2%]">
          <View
            style={{
              width: scale(44),
              height: verticalScale(44),
              borderRadius: 22,
              overflow: "hidden",
            }}
            className=""
          >
            <Image
              source={{ uri: service.avatarImage }}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
          <View className=" ">
            <Text className="font-poppinsMedium text-xl text-[#060605] ">
              {service.providerName}
            </Text>
            <Text className="font-poppinsMedium text-xs text-[#060605] ">
              {service.serviceName}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export default ServiceDetails;
