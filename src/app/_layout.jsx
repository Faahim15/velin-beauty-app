import { Stack } from "expo-router";
import "../../global.css";
import { StatusBar } from "expo-status-bar";
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

  if (!fontsLoaded) return null; // Wait until fonts are loaded

  return (
    <>
      {/* Status Bar */}
      {/* <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      /> */}

      {/* Stack Navigator */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="onboarding" />
      </Stack>
    </>
  );
}
