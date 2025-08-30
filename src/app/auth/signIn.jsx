import { View, Text, Image } from "react-native";
import WelcomeMessage from "../components/auth/WelcomeMessage";
import Input from "../components/auth/Input";
import PasswordInput from "../components/auth/PasswordInput";
import AuthButton from "../components/auth/AuthButton";
import { Link } from "expo-router";

export default function SignInScreen() {
  return (
    <View className="flex-1 bg-white">
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
        <Link href="auth/forgetPassword">
          <Text className="font-poppinsMedium text-right text-[#060605]">
            Forget Password?
          </Text>
        </Link>
      </View>
      <View className="mt-[15%]">
        <AuthButton>Sign In</AuthButton>
        <View className="mt-[1.18%]">
          <Text className="font-poppinsMedium text-center text-xs text-[#1B1B25]">
            Don't have an account?{"  "}
            <Link href="auth/createAccount">
              <Text className="font-poppinsBold text-xs">Sign Up</Text>
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
}
