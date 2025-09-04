import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BaseHeader from "../components/shared/BaseHeader";

import TabNavigation from "../components/shared/TabNavigation";
const BonusScreen = () => {
  return (
    <SafeAreaView className="flex-1 h-full  bg-white">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <BaseHeader title="Bonus" />

      {/* Tab Navigation */}
      <TabNavigation />
    </SafeAreaView>
  );
};

export default BonusScreen;
