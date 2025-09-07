import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "../../../components/adaptiveness/adaptiveness";
import BaseHeader from "../../../components/shared/BaseHeader";
import StatusLegend from "../../../components/shared/StatusLegend";
import ScheduleTable from "../../../components/shared/ScheduleTable";

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  // Calendar marked dates
  const markedDates = {
    [selectedDate]: {
      selected: true,
      selectedColor: "#3B82F6",
      selectedTextColor: "#FFFFFF",
    },
    // Example of other marked dates (you can add your own logic here)
    "2025-01-15": { marked: true, dotColor: "#EF4444" }, // Booked
    "2025-01-20": { marked: true, dotColor: "#F59E0B" }, // Vacation
    "2025-01-25": { marked: true, dotColor: "#10B981" }, // Available
  };

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };

  // Calendar theme configuration
  const calendarTheme = {
    backgroundColor: "#F4F0E9",
    calendarBackground: "#F4F0E9",
    textSectionTitleColor: "#6B7280",
    selectedDayBackgroundColor: "#0157AE",
    selectedDayTextColor: "#FFFFFF",
    todayTextColor: "#3B82F6",
    dayTextColor: "#1F2937",
    textDisabledColor: "#9CA3AF",
    dotColor: "#3B82F6",
    selectedDotColor: "#FFFFFF",
    arrowColor: "#000",
    monthTextColor: "#000",
    indicatorColor: "#3B82F6",
    textDayFontFamily: "System",
    textMonthFontFamily: "System",
    textDayHeaderFontFamily: "System",
    textDayFontWeight: "400",
    textMonthFontWeight: "600",
    textDayHeaderFontWeight: "500",
    textDayFontSize: 16,
    textMonthFontSize: 18,
    textDayHeaderFontSize: 13,
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* Header */}
        <BaseHeader title="Make your schedule" />
        {/* status legend */}

        <StatusLegend />

        {/* Calendar */}
        <View className="mx-[6%] mt-[2%] rounded-md  bg-[#F4F0E9]">
          <Calendar
            current={selectedDate}
            minDate={"2025-01-01"}
            maxDate={"2025-12-31"}
            onDayPress={handleDateSelect}
            monthFormat={"MMMM yyyy"}
            hideArrows={false}
            hideExtraDays={false}
            disableMonthChange={false}
            firstDay={0} // Sunday = 0, Monday = 1
            hideDayNames={false}
            showWeekNumbers={false}
            onPressArrowLeft={(subtractMonth) => subtractMonth()}
            onPressArrowRight={(addMonth) => addMonth()}
            disableArrowLeft={false}
            disableArrowRight={false}
            disableAllTouchEventsForDisabledDays={true}
            renderArrow={(direction) => (
              <Ionicons
                name={direction === "left" ? "chevron-back" : "chevron-forward"}
                size={24}
                color="#1F2937"
              />
            )}
            enableSwipeMonths={true}
            markedDates={markedDates}
            theme={calendarTheme}
            style={{
              marginHorizontal: 8,
              borderRadius: 8,
            }}
          />
        </View>
        <ScheduleTable />
        {/* Day Navigation */}
        {/* <ScrollView
          contentContainerStyle={{ paddingRight: scale(100) }}
          showsHorizontalScrollIndicator={true}
          horizontal={true}
        >
          <View className="flex-row mx-[6%]  gap-[10%] py-[3%] bg-white ">
            <Text className="text-sm text-gray-600">Today</Text>
            <Text className="text-sm text-gray-600">Sat</Text>
            <Text className="text-sm text-gray-600">Sun</Text>
            <Text className="text-sm text-gray-600">Mon</Text>
            <Text className="text-sm text-gray-600">Tue</Text>
            <Text className="text-sm text-gray-600">Wed</Text>
            <Text className="text-sm text-gray-600">Thurs</Text>
            <Text className="text-sm text-gray-600">Thurs</Text>
          </View>
        </ScrollView> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarScreen;
