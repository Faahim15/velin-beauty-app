import { View, ScrollView } from "react-native";
import Header from "../components/tabs/home/Header";
import ServiceCategories from "../components/tabs/home/ServiceCategories";
import NearbyLocationServices from "../components/tabs/home/NearbyLocationServices";

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <Header />
      <ScrollView>
        <View className="flex-1 bg-white">
          <View className="">
            <ServiceCategories />
            <NearbyLocationServices />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
