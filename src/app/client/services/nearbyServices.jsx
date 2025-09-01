import { View, Text } from "react-native";
import BaseHeader from "../../components/shared/BaseHeader";
import NearbyServicesCard from "../../components/tabs/home/NearbyServicesCard";
export default function NearbyServices() {
  return (
    <View className="flex-1 bg-white">
      <BaseHeader title="All" />
      <NearbyServicesCard />
    </View>
  );
}
