import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import chatData from "../../fakeData/tabs/booking/ChatData";
import { useRouter } from "expo-router";
const BusinessChatInterface = () => {
  const router = useRouter();
  const ChatItem = ({ item }) => (
    <Pressable
      onPress={() => {
        router.push("client/booking/chat/");
      }}
      className="flex-row items-center px-[4%] py-[3%] border-b border-gray-100"
    >
      {/* Avatar */}
      <View className="w-[12%] mr-[3%]">
        <View className="w-[48px] h-[48px] rounded-full bg-white overflow-hidden">
          <Image
            source={{ uri: item.avatar }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Content */}
      <View className="flex-1 mr-[3%]">
        <Text className="text-base font-poppinsBold text-[#111] mb-[2px]]">
          {item.businessName}
        </Text>
        <Text
          className="text-sm font-poppins text-[#50555C] "
          numberOfLines={1}
        >
          {item.message}
        </Text>
      </View>

      {/* Right side - Time and Badge */}
      <View className="items-end">
        <Text className="text-xs font-poppins text-[#ADB3BC] mb-[5%]">
          {item.time}
        </Text>
        {item.unreadCount > 0 && (
          <View className="bg-orange-500 rounded-full w-[20px] h-[20px] items-center justify-center">
            <Text className="text-white text-xs font-poppinsBold">
              {item.unreadCount}
            </Text>
          </View>
        )}
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Chat List */}
        <FlatList
          data={chatData}
          renderItem={ChatItem}
          keyExtractor={(item) => item.id.toString()}
          className="flex-1"
          showsVerticalScrollIndicator={false}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default BusinessChatInterface;
