import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeLayout() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </SafeAreaView>
  );
}
