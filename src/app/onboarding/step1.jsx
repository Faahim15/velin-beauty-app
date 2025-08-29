import React from "react";
import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import ProgressSlider from "../components/onboarding/ProgressSilder";
import Button from "../components/onboarding/Button";

const TalentPassionScreen = () => {
  return (
    <SafeAreaView className="flex-1 ">
      <ImageBackground
        source={require("../../../assets/onboarding/step1.png")}
        className="flex-1"
        resizeMode="cover"
      >
        <View className="flex-1 justify-center items-center ">
          <Text className="font-poppinsMedium text-2xl text-center text-white">
            Talent and passion, always by your side
          </Text>
        </View>
        <View className="mb-[20%]  ">
          <ProgressSlider />
          <Button>Next</Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TalentPassionScreen;
