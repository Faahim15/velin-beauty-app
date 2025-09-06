import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import { scale, verticalScale } from "../adaptiveness/adaptiveness";
import LevelUp from "../bonus/LevelUp";
import BonusTab from "../bonus/BonusTab";
import Refer from "../bonus/Refer";
const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Level Up");

  const tabs = ["Level Up", "Bonus List", "Refer"];

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Level Up":
        return <LevelUp />;
      case "Bonus List":
        return <BonusTab />;
      default:
        return <Refer />;
    }
  };

  return (
    <View className="flex-1 h-full bg-[#fff]  overflow-hidden">
      {/* Tab Navigation */}
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <View
        style={{ height: verticalScale(52) }}
        className=" flex-row justify-evenly w-full border-b-[0.7px] border-black  items-center  bg-[#fff]"
      >
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            className={` ${activeTab === tab ? "bg-white " : ""}`}
            onPress={() => handleTabPress(tab)}
          >
            <Text
              className={`text-center text-base  ${
                activeTab === tab
                  ? "text-black underline  font-poppinsMedium "
                  : "font-poppins text-[#6B7280]"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Dynamic Content */}
      {renderContent()}
    </View>
  );
};

export default TabNavigation;
