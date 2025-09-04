import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function StarRating({ handleStarPress, rating }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const isFilled = i < rating;
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleStarPress(i)}
          className="flex-row justify-end mx-[1%]"
        >
          <Ionicons
            name={isFilled ? "star" : "star-outline"}
            size={18}
            color={isFilled ? "#FFD700" : "#D1D5DB"}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View className="ml-[61%]">
      <View className="flex-row">{renderStars()}</View>
    </View>
  );
}
export default StarRating;
