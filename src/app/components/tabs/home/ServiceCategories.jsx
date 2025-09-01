import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import categories from "../../fakeData/tabs/home/ServiceCategories";
import { scale, verticalScale } from "../../adaptiveness/adaptiveness";
import CategoryHeader from "./CategoryHeader";
const ServiceCategories = () => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity className="items-center  mr-[6%]" activeOpacity={0.7}>
      {/* Category Image Circle */}
      <View
        style={{ width: scale(60), height: verticalScale(60) }}
        className="rounded-full overflow-hidden"
      >
        <Image
          source={{ uri: item.image }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      {/* Category Name */}
      <Text className=" font-poppinsMedium mt-[4%] text-xs text-[#1B1B25] ">
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="w-full  py-[4%] ">
      {/* Header */}

      <CategoryHeader
        path="client/services/beautyService"
        title="Service Categories"
      />

      {/* Categories FlatList */}
      <View className="mx-[6%] shadow-md border border-[#F3EFE8] rounded-md  justify-center items-center px-[4%] py-[3%] bg-[#F3EFE8] ">
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: "0%" }}
        />
      </View>
    </View>
  );
};

export default ServiceCategories;
