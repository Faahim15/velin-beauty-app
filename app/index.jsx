import { Link, router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function index() {
  return (
    <View>
      <TouchableOpacity
        className="bg-red-500"
        onPress={() => router.push("/step1")}
      >
        <Text className="text-red">gesture</Text>
      </TouchableOpacity>
    </View>
  );
}
