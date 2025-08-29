import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import ProgressSlider from "../components/onboarding/ProgressSilder";
import Button from "../components/onboarding/Button";
import { Link, useRouter } from "expo-router";

const step2 = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 ">
      <ImageBackground
        source={require("../../../assets/onboarding/step2.png")}
        className="flex-1"
        resizeMode="cover"
      >
        <View className="flex-1 justify-center items-center ">
          <Text className="font-poppinsMedium text-2xl text-center text-white">
            Prenota il tuo trattamento dove vuoi, quando vuoi
          </Text>
        </View>
        <View className="mb-[20%]  ">
          <ProgressSlider activeIndex={1} />
          <Button onPress={() => router.push("/onboarding/step3")}>Next</Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default step2;
