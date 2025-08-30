import { SafeAreaView, StatusBar } from "react-native";
import { Stack } from "expo-router";

// 👇 This sets the initial screen during Fast Refresh
export const unstable_settings = {
  initialRouteName: "/createAccount", // or "/signIn" or any screen you're testing
};

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar translucent backgroundColor="" barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signIn" />
        <Stack.Screen name="createAccount" />
      </Stack>
    </SafeAreaView>
  );
}
