import { StatusBar } from "react-native";
import { Stack } from "expo-router";
import "../../global.css";
import { View } from "react-native";
import { SafeAreaView } from "react-native";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Optional: Status Bar */}
      <StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="onboarding" />
      </Stack>
    </SafeAreaView>
  );
}
