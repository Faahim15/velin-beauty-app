import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function HomeLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
