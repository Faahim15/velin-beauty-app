import { View, Text } from "react-native";
import React from "react";
import AuthHeader from "../components/auth/AuthHeader";
import CustomPassInput from "../components/auth/CustomPassInput";
import AuthButton from "../components/auth/AuthButton";

export default function newPassword() {
  return (
    <View className="flex-1 bg-white">
      <AuthHeader
        title="Create New Password"
        subtitle="Choose a secure new password to protect your Velin account."
      />
      <CustomPassInput passText="New Password" />
      <CustomPassInput passText="Confirm Password" />
      <View className="flex-1 justify-end mb-[20%] ">
        <AuthButton>Save</AuthButton>
      </View>
    </View>
  );
}
