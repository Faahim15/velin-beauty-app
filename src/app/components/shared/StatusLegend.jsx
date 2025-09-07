import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../adaptiveness/adaptiveness";
import LegendButton from "./LegendButton";

export default function StatusLegend() {
  const [selectedView, setSelectedView] = useState("weekly");
  const [showTitle, setShowTitle] = useState(false);
  function handleSelectedView(prop) {
    setSelectedView(prop);
  }
  const statusItems = [
    { color: "bg-red-500", label: "Booked" },
    { color: "bg-green-500", label: "Available" },
    { color: "bg-yellow-500", label: "Vacation" },
    { color: "bg-gray-400", label: "Not Available", hasIcon: true },
  ];

  return (
    <View className=" mx-[6%]  mt-[2.36%]">
      {/* Status Legend */}
      <View className="flex-row shadow-sm rounded-lg px-2 bg-[#F4F0E9] flex-wrap justify-between mb-[4%]">
        {statusItems.map((item, index) => (
          <View
            key={index}
            className="flex-row overflow-hidden py-[2%] justify-center items-center"
          >
            <View
              style={{ width: scale(16), height: verticalScale(16) }}
              className={`rounded  ${item.color} mr-[4%]`}
            />
            <Text className="text-[#525252]  font-poppins text-sm">
              {item.label}
            </Text>
            {item.hasIcon && (
              <TouchableOpacity
                className="flex-row  overflow-hidden gap-[2%]"
                onPress={() => setShowTitle((prev) => !prev)}
                // style={{ maxWidth: verticalScale(190) }}
              >
                <Ionicons
                  name="information-circle-outline"
                  size={16}
                  color="#000"
                  style={{ marginLeft: scale(4) }}
                />
                {showTitle && (
                  <View
                    style={{
                      maxWidth: scale(190),
                      paddingTop: verticalScale(1),
                    }}
                    className=""
                  >
                    <Text className="text-black text-[10px] leading-tight">
                      (optional, but recommended to make your profile more
                      recognizable.)
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>

      {/* Toggle Buttons */}
      <View className="flex-row justify-between mt-[0%]">
        <LegendButton
          onPress={() => handleSelectedView("weekly")}
          activeButton={selectedView == "weekly"}
          title="Weekly"
        />
        <LegendButton
          onPress={() => handleSelectedView("monthly")}
          activeButton={selectedView == "monthly"}
          title="Monthly"
        />
      </View>
    </View>
  );
}
