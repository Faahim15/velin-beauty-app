import { View, Text, Image } from "react-native";
import WelcomeMessage from "../components/auth/WelcomeMessage";
import Input from "../components/auth/Input";
import PasswordInput from "../components/auth/PasswordInput";
import AuthButton from "../components/auth/AuthButton";

export default function SignInScreen() {
  return (
    <View>
      <WelcomeMessage />
      <View className="px-[6%] mt-[8.53%]">
        <Input
          textInputConfig={{
            placeholder: "Enter your email",
            keyboardType: "email-address",
            autoCapitalize: "none",
            placeholderTextColor: "#898989",
          }}
        />
      </View>
      <View className="px-[6%] mt-[5.21%]">
        <PasswordInput />
        <Text className="font-poppinsMedium text-right text-[#060605]">
          Forget Password?
        </Text>
      </View>
      <View className="mt-[15%]">
        <AuthButton>Sign In</AuthButton>
        <View className="mt-[1.18%]">
          <Text className="font-poppinsMedium text-center text-xs text-[#1B1B25]">
            Don't have an account?{"  "}
            <Text className="font-poppinsBold text-xs">Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
