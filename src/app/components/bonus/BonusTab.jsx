import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import customerTiers, { welcomeBonus } from "../fakeData/tabs/bonus/BonusList";
import { scale, verticalScale } from "../adaptiveness/adaptiveness";
import Header from "./Header";
import { welcomeIcon } from "../../../../assets/constant/icons/icon";
import { SvgXml } from "react-native-svg";
const LevelBonus = () => {
  const renderTierCard = (tier) => (
    <View
      key={tier.id}
      className="bg-[#F4F0E9] mx-[6%] mb-[2%] rounded shadow-sm border border-gray-100"
    >
      <View className="flex-row items-center p-[2%]">
        {/* Icon */}
        <View
          style={{ width: scale(48), height: verticalScale(48) }}
          className="bg-white rounded-full justify-center items-center mr-[4%]"
        >
          {/* <Ionicons
            name={tier.icon}
            size={24}
            color={tier.isUnlocked ? "#F59E0B" : "#9CA3AF"}
          /> */}
          <SvgXml
            xml={tier.icon}
            height={verticalScale(24)}
            width={scale(24)}
          />
        </View>

        {/* Content */}
        <View className="flex-1">
          <View className="flex-row items-center justify-between mb-[2%]">
            <Text className="font-poppinsSemiBold text-sm text-black ">
              {tier.title}
            </Text>
            {!tier.isUnlocked && (
              <Ionicons name="lock-closed" size={18} color="#000" />
            )}
            {/* Claim Button */}
            {tier.isUnlocked && !tier.isClaimed && (
              <TouchableOpacity className="bg-black border-2 border-black rounded px-[4%] py-[2%] self-start">
                <Text className="text-white text-xs font-poppinsMedium">
                  Claim Now
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <Text className="font-poppins text-xs text-black mb-[1%]">
            {tier.requirements}
          </Text>
          {tier.reward && (
            <Text className="font-poppins text-xs text-black ">
              {tier.reward}
            </Text>
          )}

          {/* Progress Bar */}
          {tier.progress && (
            <View className="w-full h-[6px] bg-gray-200 rounded-full mt-[3%] mb-[3%]">
              <View
                className="h-full bg-[#00BF06] rounded-full"
                style={{ width: `${tier.progress}%` }}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 " showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header title="Level Bonus" />

        {/* Level Bonus Cards */}

        {customerTiers.map(renderTierCard)}

        {/* Welcome Bonus */}

        <Header title="Welcome Bonus" />
        {welcomeBonus.map(renderTierCard)}

        {/* Birthday Bonus */}
        <Header title="Birthday Bonus" />
        {welcomeBonus.map(renderTierCard)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LevelBonus;
