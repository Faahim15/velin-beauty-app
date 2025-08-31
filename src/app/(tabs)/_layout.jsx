import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, StatusBar } from "react-native";
import { scale, verticalScale } from "../components/adaptiveness/adaptiveness";

export default function TabsLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* StatusBar setup */}
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#000",
            borderTopWidth: 0,
            borderTopLeftRadius: scale(10),
            borderTopRightRadius: scale(10),
            height: verticalScale(90),
          },
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
            marginTop: verticalScale(10),
          },
          tabBarLabelStyle: {
            fontSize: scale(12),
            textAlign: "center",
            marginTop: verticalScale(2),
            fontFamily: "Poppins_400Regular",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="booking"
          options={{
            title: "Booking",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            title: "Favorite",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="bonus"
          options={{
            title: "Bonus",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="gift-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
