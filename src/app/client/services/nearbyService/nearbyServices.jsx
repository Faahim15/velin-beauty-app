import { View, Text } from "react-native";

import NearbyServicesCard from "../../../components/tabs/home/NearbyServicesCard";
import BaseHeader from "../../../components/shared/BaseHeader";
export default function NearbyServices() {
  return (
    <View className="flex-1 bg-white">
      <BaseHeader title="All" />
      <NearbyServicesCard />
    </View>
  );
}
