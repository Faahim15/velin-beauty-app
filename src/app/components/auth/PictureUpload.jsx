import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
export default function ProfilePictureUpload({ onPress, activeInfo }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="px-[6%] mt-[2.36%] ">
      <View className="flex-row">
        <Text className="font-poppins text-base text-[#060605]">
          Profile Picture
        </Text>
        <TouchableOpacity
          onPress={onPress}
          className="flex-row pt-[1.1%] gap-[5%]"
        >
          <View className="w-4 h-4  rounded-full border border-black bg-white ml-2 items-center justify-center">
            <Text className="text-black font-poppins text-xs">i</Text>
          </View>
          {activeInfo === "profilePic" && (
            <Text className="text-black font-poppins text-xs">Mandatory</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Profile Preview */}
      {/* {image ? (
        <Image
          source={{ uri: image }}
          className="w-[50%] h-[25%] rounded-full mb-6"
          resizeMode="cover"
        />
      ) : (
        <View className="w-[50%] h-[25%] rounded-full border border-gray-400 items-center justify-center mb-6">
          <Text className="text-gray-400">No Image</Text>
        </View>
      )} */}

      {/* Choose File Button */}
      <TouchableOpacity
        onPress={pickImage}
        className="border mt-[1.8%] justify-center border-black rounded-md px-[8%] py-[4.9%] flex-row items-center"
      >
        <Ionicons name="image-outline" size={20} color="black" />
        <Text className=" font-poppins text-base text-[#1B1B25] ml-[2%]  ">
          Choose Your File
        </Text>
      </TouchableOpacity>
    </View>
  );
}
