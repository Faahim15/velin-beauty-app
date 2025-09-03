import { View, Text } from "react-native";
import BusinessChatInterface from "./chat/ChatInterface";

export default function Messages() {
  return (
    <View className="flex-1 bg-white ">
      <BusinessChatInterface />
    </View>
  );
}
