import { View, Text } from "react-native";
import AuthHeader from "../components/auth/AuthHeader";
import InputField from "../components/auth/InputField";

export default function signUp() {
  return (
    <View>
      <AuthHeader />
      <View className="gap-[3%] px-[6.75%] mt-[2.36%] ">
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
      </View>
    </View>
  );
}
