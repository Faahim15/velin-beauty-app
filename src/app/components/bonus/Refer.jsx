import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import Referrals from "./refer/Referrals";
import ReferButton from "./refer/ReferButton";
import Invited from "./refer/Invited";
const ReferralScreen = () => {
  const [referrel, setReferrel] = useState("refer");
  function referrelHandler(key) {
    setReferrel(key);
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-white ">
        {/* Header Tabs */}
        <View className="flex-row justify-evenly mx-[2.61%] mb-[2.36%]  mt-[2.36%]">
          <ReferButton
            active={referrel === "refer"}
            onPress={() => referrelHandler("refer")}
          >
            Your Referrals
          </ReferButton>
          <ReferButton
            active={referrel === "invited"}
            onPress={() => referrelHandler("invited")}
          >
            Invited Friends (24)
          </ReferButton>

          {/* <TouchableOpacity className="bg-white border-2 border-black py-[2%] justify-center items-center rounded-md px-[4.61%]">
            <Text className="font-poppinsMedium text-sm text-black">
              
            </Text>
          </TouchableOpacity> */}
        </View>

        {referrel === "refer" ? <Referrals /> : <Invited />}
      </View>
    </SafeAreaView>
  );
};

export default ReferralScreen;
