import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import AuthHeader from "../components/auth/AuthHeader";
import InputField from "../components/auth/InputField";
import AddressForm from "../components/auth/AddressField";
import AuthButton from "../components/auth/AuthButton";
import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // Adjust if you have a header
    >
      <AuthHeader />
      <ScrollView
        // contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1">
          <View className="gap-[3%] px-[6.75%] mt-[2.36%]">
            <InputField
              textInputConfig={{
                placeholder: "First Name",
                autoCapitalize: "words",
                placeholderTextColor: "#898989",
              }}
            />
            <InputField
              textInputConfig={{
                placeholder: "Last Name",
                autoCapitalize: "words",
                placeholderTextColor: "#898989",
              }}
            />
            <InputField
              textInputConfig={{
                placeholder: "E-mail",
                autoCapitalize: "none",
                placeholderTextColor: "#898989",
                keyboardType: "email-address",
              }}
            />
            <InputField
              textInputConfig={{
                label: "Phone",
                placeholder: "+44",
                autoCapitalize: "none",
                placeholderTextColor: "#898989",
                keyboardType: "numeric",
              }}
            />
            <AddressForm />
          </View>
        </View>
      </ScrollView>
      <View className="mb-[30%]">
        <AuthButton onPress={() => router.push("/auth/register")}>
          Continue
        </AuthButton>
      </View>
    </KeyboardAvoidingView>
  );
}
