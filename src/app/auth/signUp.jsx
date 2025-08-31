import React, { useState } from "react";
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
  const [activeInfo, setActiveInfo] = useState(null);
  const handleIbutton = (key) => {
    setActiveInfo((prev) => (prev === key ? null : key));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "white" }}
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
                token: "FirstName",
              }}
              onPress={() => handleIbutton("FirstName")}
              activeInfo={activeInfo}
            />
            <InputField
              textInputConfig={{
                placeholder: "Last Name",
                autoCapitalize: "words",
                placeholderTextColor: "#898989",
                token: "LastName",
              }}
              onPress={() => handleIbutton("LastName")}
              activeInfo={activeInfo}
            />
            <InputField
              textInputConfig={{
                placeholder: "E-mail",
                autoCapitalize: "none",
                placeholderTextColor: "#898989",
                keyboardType: "email-address",
                token: "email",
              }}
              onPress={() => handleIbutton("email")}
              activeInfo={activeInfo}
            />
            <InputField
              textInputConfig={{
                label: "Phone",
                placeholder: "+44",
                autoCapitalize: "none",
                placeholderTextColor: "#898989",
                keyboardType: "numeric",
                token: "phone",
              }}
              onPress={() => handleIbutton("phone")}
              activeInfo={activeInfo}
            />
            <AddressForm />
          </View>
        </View>
      </ScrollView>
      <View className="mb-[20%]">
        <AuthButton onPress={() => router.push("/auth/register")}>
          Continue
        </AuthButton>
      </View>
    </KeyboardAvoidingView>
  );
}
