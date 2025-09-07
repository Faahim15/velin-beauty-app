import {
  View,
  Text,
  Modal,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { scale, verticalScale } from "../../adaptiveness/adaptiveness";
import recentPeople, {
  socialMedia,
} from "../../fakeData/tabs/bonus/SocialMediaData";
import { SvgXml } from "react-native-svg";
const ShareModal = ({ visible, onClose }) => {
  const renderPersonItem = ({ item }) => (
    <Pressable className="items-center mx-[2%]">
      <View className="w-[60px] h-[60px] rounded-full overflow-hidden ">
        <Image
          source={{ uri: item.avatar }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
      <Text className="text-black mt-[4%] font-poppins text-xs text-center">
        {item.name}
      </Text>
    </Pressable>
  );

  const renderSocialItem = ({ item }) => (
    <Pressable className="items-center mx-[2%]">
      <View className="w-[60px] h-[60px] rounded-full items-center justify-center mb-[8px]">
        <SvgXml xml={item.svg} height={verticalScale(36)} width={scale(36)} />
      </View>
      <Text className="text-gray-700 text-xs text-center">{item.name}</Text>
    </Pressable>
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-[20px] px-[6%] py-[5%]">
            {/* Header */}
            <View className="items-center mb-[6%]">
              <View className="w-[12%] h-[4px] bg-gray-300 rounded-full mb-[4%]" />
              <Text className="text-lg font-semibold text-gray-800">Share</Text>
            </View>

            {/* Recent People Section */}
            <View className="mb-[8%]">
              <Text className="text-sm font-poppinsMedium text-black mb-[3%] border-b-[0.5px] border-black pb-[2%]">
                Recent People
              </Text>
              <FlatList
                data={recentPeople}
                renderItem={renderPersonItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: scale(100) }}
              />
            </View>

            {/* Social Media Section */}
            <View className="mb-[4%]">
              <Text className="text-sm font-poppinsMedium text-black  mb-[3%] border-b-[0.5px] border-black pb-[2%]">
                Social Media
              </Text>
              <FlatList
                data={socialMedia}
                renderItem={renderSocialItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: scale(100) }}
              />
            </View>

            {/* Close Button */}
            <Pressable
              onPress={onClose}
              className="bg-gray-200 rounded-xl py-[4%] items-center mt-[4%]"
            >
              <Text className="text-black  font-poppinsMedium">Cancel</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ShareModal;
