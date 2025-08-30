import { View, Text, Image } from "react-native";
import AccountButton from "../components/auth/AccountButton";
import { useRouter } from "expo-router";

export default function createAccount() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white  justify-center items-center">
      <View className=" ">
        <Image source={require("../../../assets/auth/Vector.png")} />
      </View>
      <View className="mt-[6%]">
        <Text className="font-poppinsMedium text-2xl text-center text-[#313131]">
          Create a New Account
        </Text>
      </View>
      <View className="w-full flex-col mt-[2.36%] gap-[2.36%]">
        <AccountButton
          style={{
            buttonText: "#040404",
            backgroundColor: "#fff",
          }}
          onPress={() => router.push("/auth/signUp")}
        >
          GUEST
        </AccountButton>
        <View>
          <Text className="font-poppinsMedium text-xl text-[#313131] text-center">
            Or
          </Text>
        </View>
        <AccountButton
          style={{
            buttonText: "#fff",
            backgroundColor: "#000",
          }}
        >
          PROFESSIONAL
        </AccountButton>
      </View>
    </View>
  );
}
