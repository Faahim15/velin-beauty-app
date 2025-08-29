import { SafeAreaView, StatusBar } from "react-native";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signIn" />
        <Stack.Screen name="createAccount" />
      </Stack>
    </SafeAreaView>
  );
}
