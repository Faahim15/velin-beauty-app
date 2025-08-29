import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import ProgressSlider from "../components/onboarding/ProgressSilder";
import Button from "../components/onboarding/Button";
import { useRouter } from "expo-router";

const step3 = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 ">
      <ImageBackground
        source={require("../../../assets/onboarding/step3.png")}
        className="flex-1"
        resizeMode="cover"
      >
        <View className="flex-1 justify-center items-center ">
          <Text className="font-poppinsMedium text-2xl text-center text-white">
            Chat with our professionals and find the perfect service for you
          </Text>
        </View>
        <View className="mb-[20%]  ">
          <ProgressSlider activeIndex={2} />
          <Button onPress={() => router.push("/onboarding/step4")}>Next</Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default step3;
