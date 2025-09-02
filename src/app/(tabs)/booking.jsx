import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Request from "../components/booking/Request";
import Completed from "../components/booking/Completed";
import Rejected from "../components/booking/Rejected";
import Messages from "../components/booking/Messages";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "../components/adaptiveness/adaptiveness";
const Booking = () => {
  const [activeTab, setActiveTab] = useState("Request");

  const tabs = ["Request", "Messages", "Completed", "Rejected"];

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Request":
        return <Request />;
      case "Messages":
        return <Messages />;
      case "Completed":
        return <Completed />;
      default:
        return <Rejected />;
    }
  };

  return (
    <SafeAreaView className="flex-1 px-[6%]   bg-[#fff] rounded-lg shadow-lg overflow-hidden">
      {/* Tab Navigation */}
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <View
        style={{ height: verticalScale(52) }}
        className=" flex-row w-full border-b border-black justify-center items-center  bg-[#fff]"
      >
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            className={`py-0 px-[3%] ${activeTab === tab ? "bg-white " : ""}`}
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
    </SafeAreaView>
  );
};

export default Booking;
