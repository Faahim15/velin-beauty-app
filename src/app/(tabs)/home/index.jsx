import { View, ScrollView } from "react-native";
import Header from "../../components/tabs/home/Header";
import ServiceCategories from "../../components/tabs/home/ServiceCategories";
import NearbyLocationServices from "../../components/tabs/home/NearbyLocationServices";
import BestServices from "../../components/tabs/home/BestServices";
import { verticalScale } from "../../components/adaptiveness/adaptiveness";
import { StatusBar } from "react-native";
export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: verticalScale(15) }}>
        <View className="flex-1 bg-white">
          <View className="">
            <ServiceCategories />
            <NearbyLocationServices />
            <BestServices />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
