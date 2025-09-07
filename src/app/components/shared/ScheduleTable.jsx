import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { scale, verticalScale } from "../adaptiveness/adaptiveness";

const ScheduleTable = () => {
  // Table header data
  const tableHead = ["Time", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  // Column widths
  const widthArr = [100, 120, 120, 120, 120, 120, 120, 120];

  // Schedule data - each row represents a time slot
  const tableData = [
    ["2:00-100", "Booked", "Booked", "", "", "", "", ""],
    ["2:00-100", "Available", "Available", "Booked", "", "", "", ""],
    ["2:00-100", "Vacation", "Vacation", "Available", "Booked", "", "", ""],
    ["2:00-100", "", "", "Vacation", "Available", "", "", ""],
    ["2:00-100", "", "", "", "Vacation", "", "", ""],
    ["2:00-100", "", "", "", "", "Booked", "", ""],
    ["2:00-100", "Available", "", "", "", "", "Available", ""],
    ["2:00-100", "", "Booked", "", "", "", "", "Vacation"],
    ["2:00-100", "", "", "Available", "", "", "", ""],
    ["2:00-100", "", "", "•••", "", "", "", ""],
    ["2:00-100", "", "", "", "", "Vacation", "", ""],
    ["2:00-100", "Booked", "", "", "", "", "Available", ""],
    ["2:00-100", "", "Vacation", "", "", "", "", "Booked"],
    ["2:00-100", "", "", "Available", "", "", "", ""],
    ["2:00-100", "", "", "", "Booked", "", "", ""],
    ["2:00-100", "Vacation", "", "", "", "Available", "", ""],
    ["2:00-100", "", "Available", "", "", "", "Vacation", ""],
    ["2:00-100", "", "", "Booked", "", "", "", "Available"],
    ["2:00-100", "", "", "", "Vacation", "", "", ""],
    ["2:00-100", "", "", "", "", "Booked", "", ""],
  ];

  // Function to get cell background color based on status
  const getCellBackgroundColor = (cellData, colIndex) => {
    if (colIndex === 0) return "#f3f4f6"; // Time column - gray

    switch (cellData) {
      case "Booked":
        return "#FB484814"; // Red background
      case "Available":
        return "#EEFAF3"; // Green background
      case "Vacation":
        return "#FFF9EC"; // Yellow background
      case "•••":
        return "#eff6ff"; // Blue background
      default:
        return "#f9fafb"; // Default gray
    }
  };

  // Function to get text color based on status
  const getCellTextColor = (cellData) => {
    switch (cellData) {
      case "Booked":
        return "#D20000"; // Red text
      case "Available":
        return "#29BA66"; // Green text
      case "Vacation":
        return "#FDAF07"; // Yellow text
      case "•••":
        return "#2563eb"; // Blue text
      default:
        return "#374151"; // Default gray
    }
  };

  // Custom cell renderer
  const renderCell = (cellData, colIndex, rowIndex) => {
    const backgroundColor = getCellBackgroundColor(cellData, colIndex);
    const textColor = getCellTextColor(cellData);
    const isTimeColumn = colIndex === 0;

    return (
      <Pressable
        key={`${rowIndex}-${colIndex}`}
        className="h-[40px] justify-center items-center  border-r border-b border-[#DDDDDE]"
        style={{
          width: widthArr[colIndex],
        }}
        onPress={() =>
          !isTimeColumn &&
          console.log(
            `Pressed: ${tableHead[colIndex]}, Row: ${rowIndex}, Data: ${cellData}`
          )
        }
        disabled={isTimeColumn}
      >
        <View
          style={{
            backgroundColor: isTimeColumn ? "#fff" : backgroundColor,
            height: verticalScale(30),
            width: "90%",
          }}
          className="bg-[#F2F2F2] rounded items-center justify-center "
        >
          <Text
            className="text-xs font-poppins text-center"
            style={{ color: isTimeColumn ? "#1B1B25" : textColor }}
          >
            {cellData}
          </Text>
        </View>
      </Pressable>
    );
  };

  // Custom header cell renderer
  const renderHeaderCell = (cellData, colIndex) => {
    return (
      <View
        key={colIndex}
        className="h-[50px] justify-center items-center border-r border-gray-300 bg-white"
        style={{ width: widthArr[colIndex] }}
      >
        <Text className="font-poppins text-sm text-[#525252] text-center">
          {cellData}
        </Text>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white mx-[6%] my-[6%]">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        bounces={false}
      >
        <View>
          {/* Header */}
          <View className="flex-row border-b-2 border-[#DDDDDE]">
            {tableHead.map((headerData, index) =>
              renderHeaderCell(headerData, index)
            )}
          </View>

          {/* Table Content */}
          <ScrollView
            vertical={true}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            {tableData.map((rowData, rowIndex) => (
              <View key={rowIndex} className="flex-row">
                {rowData.map((cellData, colIndex) =>
                  renderCell(cellData, colIndex, rowIndex)
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default ScheduleTable;
