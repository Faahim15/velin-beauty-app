import { View, Text } from "react-native";
import AuthHeader from "../components/auth/AuthHeader";
import Input from "../components/auth/Input";
import AuthButton from "../components/auth/AuthButton";
import { useRouter } from "expo-router";

export default function ForgetPassword() {
  const router = useRouter();
  return (
    <View className="flex-1 mb-[20%] bg-white">
      <AuthHeader
        title="Forgot Your Password"
        subtitle="Enter the email linked to your account to receive reset instructions."
      />
      <View className="px-[6%] mt-[5.1%]">
        <Text className="font-poppinsMedium text-base mb-[1%] text-[#1B1B25]">
          Email
        </Text>
        <Input
          textInputConfig={{
            placeholder: "Enter your email",
            keyboardType: "email-address",
            autoCapitalize: "none",
            placeholderTextColor: "#898989",
          }}
        />
      </View>
      <View className="flex-1 justify-end">
        <AuthButton onPress={() => router.push("auth/verification")}>
          Send
        </AuthButton>
      </View>
    </View>
  );
}
