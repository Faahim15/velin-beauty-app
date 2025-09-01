import { View, Text } from "react-native";
import React from "react";
import BaseHeader from "../../components/shared/BaseHeader";
import BestServicesAll from "../../components/tabs/home/BestServicesAll";

export default function BestServices() {
  return (
    <View className="flex-1 bg-white">
      <BaseHeader title="All" />
      <BestServicesAll />
    </View>
  );
}
