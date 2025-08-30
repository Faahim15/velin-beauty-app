import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

const SwitzerlandCityPicker = ({
  onCitySelect,
  placeholder = "Select your city in Switzerland",
}) => {
  const [showCityModal, setShowCityModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [loading, setLoading] = useState(false);

  // Comprehensive Swiss cities data with postal codes
  const swissCitiesData = [
    // Major Cities
    {
      name: "Zurich",
      postalCode: "8000",
      canton: "Zurich",
      cantonCode: "ZH",
      population: 415367,
    },
    {
      name: "Geneva",
      postalCode: "1200",
      canton: "Geneva",
      cantonCode: "GE",
      population: 201818,
    },
    {
      name: "Basel",
      postalCode: "4000",
      canton: "Basel-Stadt",
      cantonCode: "BS",
      population: 177654,
    },
    {
      name: "Bern",
      postalCode: "3000",
      canton: "Bern",
      cantonCode: "BE",
      population: 133883,
    },
    {
      name: "Lausanne",
      postalCode: "1000",
      canton: "Vaud",
      cantonCode: "VD",
      population: 139111,
    },
    {
      name: "Winterthur",
      postalCode: "8400",
      canton: "Zurich",
      cantonCode: "ZH",
      population: 114220,
    },
    {
      name: "Lucerne",
      postalCode: "6000",
      canton: "Lucerne",
      cantonCode: "LU",
      population: 82257,
    },
    {
      name: "St. Gallen",
      postalCode: "9000",
      canton: "St. Gallen",
      cantonCode: "SG",
      population: 76213,
    },
    {
      name: "Lugano",
      postalCode: "6900",
      canton: "Ticino",
      cantonCode: "TI",
      population: 62315,
    },
    {
      name: "Biel/Bienne",
      postalCode: "2500",
      canton: "Bern",
      cantonCode: "BE",
      population: 55206,
    },

    // Medium Cities
    {
      name: "Thun",
      postalCode: "3600",
      canton: "Bern",
      cantonCode: "BE",
      population: 43476,
    },
    {
      name: "Köniz",
      postalCode: "3098",
      canton: "Bern",
      cantonCode: "BE",
      population: 42717,
    },
    {
      name: "La Chaux-de-Fonds",
      postalCode: "2300",
      canton: "Neuchâtel",
      cantonCode: "NE",
      population: 38155,
    },
    {
      name: "Schaffhausen",
      postalCode: "8200",
      canton: "Schaffhausen",
      cantonCode: "SH",
      population: 36952,
    },
    {
      name: "Fribourg",
      postalCode: "1700",
      canton: "Fribourg",
      cantonCode: "FR",
      population: 38365,
    },
    {
      name: "Chur",
      postalCode: "7000",
      canton: "Graubünden",
      cantonCode: "GR",
      population: 36336,
    },
    {
      name: "Neuchâtel",
      postalCode: "2000",
      canton: "Neuchâtel",
      cantonCode: "NE",
      population: 33712,
    },
    {
      name: "Uster",
      postalCode: "8610",
      canton: "Zurich",
      cantonCode: "ZH",
      population: 35337,
    },
    {
      name: "Sion",
      postalCode: "1950",
      canton: "Valais",
      cantonCode: "VS",
      population: 34978,
    },
    {
      name: "Emmen",
      postalCode: "6020",
      canton: "Lucerne",
      cantonCode: "LU",
      population: 30806,
    },

    // Additional Cities
    {
      name: "Kriens",
      postalCode: "6010",
      canton: "Lucerne",
      cantonCode: "LU",
      population: 27735,
    },
    {
      name: "Yverdon-les-Bains",
      postalCode: "1400",
      canton: "Vaud",
      cantonCode: "VD",
      population: 30143,
    },
    {
      name: "Zug",
      postalCode: "6300",
      canton: "Zug",
      cantonCode: "ZG",
      population: 30934,
    },
    {
      name: "Frauenfeld",
      postalCode: "8500",
      canton: "Thurgau",
      cantonCode: "TG",
      population: 25010,
    },
    {
      name: "Rapperswil-Jona",
      postalCode: "8640",
      canton: "St. Gallen",
      cantonCode: "SG",
      population: 27474,
    },
    {
      name: "Dübendorf",
      postalCode: "8600",
      canton: "Zurich",
      cantonCode: "ZH",
      population: 28583,
    },
    {
      name: "Monthey",
      postalCode: "1870",
      canton: "Valais",
      cantonCode: "VS",
      population: 17825,
    },
    {
      name: "Dietikon",
      postalCode: "8953",
      canton: "Zurich",
      cantonCode: "ZH",
      population: 27056,
    },
    {
      name: "Riehen",
      postalCode: "4125",
      canton: "Basel-Stadt",
      cantonCode: "BS",
      population: 21016,
    },
    {
      name: "Wädenswil",
      postalCode: "8820",
      canton: "Zurich",
      cantonCode: "ZH",
      population: 22334,
    },
    {
      name: "Renens",
      postalCode: "1020",
      canton: "Vaud",
      cantonCode: "VD",
      population: 21168,
    },
    {
      name: "Kreuzlingen",
      postalCode: "8280",
      canton: "Thurgau",
      cantonCode: "TG",
      population: 22081,
    },
    {
      name: "Allschwil",
      postalCode: "4123",
      canton: "Basel-Landschaft",
      cantonCode: "BL",
      population: 20530,
    },
    {
      name: "Bellinzona",
      postalCode: "6500",
      canton: "Ticino",
      cantonCode: "TI",
      population: 43360,
    },
    {
      name: "Baar",
      postalCode: "6340",
      canton: "Zug",
      cantonCode: "ZG",
      population: 24289,
    },
    {
      name: "Nyon",
      postalCode: "1260",
      canton: "Vaud",
      cantonCode: "VD",
      population: 21718,
    },
    {
      name: "Freienbach",
      postalCode: "8808",
      canton: "Schwyz",
      cantonCode: "SZ",
      population: 16642,
    },
    {
      name: "Carouge",
      postalCode: "1227",
      canton: "Geneva",
      cantonCode: "GE",
      population: 22576,
    },
    {
      name: "Aarau",
      postalCode: "5000",
      canton: "Aargau",
      cantonCode: "AG",
      population: 21726,
    },
    {
      name: "Pully",
      postalCode: "1009",
      canton: "Vaud",
      cantonCode: "VD",
      population: 18424,
    },

    // Smaller Cities & Towns
    {
      name: "Muttenz",
      postalCode: "4132",
      canton: "Basel-Landschaft",
      cantonCode: "BL",
      population: 17576,
    },
    {
      name: "Vernier",
      postalCode: "1214",
      canton: "Geneva",
      cantonCode: "GE",
      population: 35032,
    },
    {
      name: "Lancy",
      postalCode: "1212",
      canton: "Geneva",
      cantonCode: "GE",
      population: 32802,
    },
    {
      name: "Pratteln",
      postalCode: "4133",
      canton: "Basel-Landschaft",
      cantonCode: "BL",
      population: 16321,
    },
    {
      name: "Onex",
      postalCode: "1213",
      canton: "Geneva",
      cantonCode: "GE",
      population: 18345,
    },
    {
      name: "Wetzikon",
      postalCode: "8620",
      canton: "Zurich",
      cantonCode: "ZH",
      population: 24301,
    },
    {
      name: "Morges",
      postalCode: "1110",
      canton: "Vaud",
      cantonCode: "VD",
      population: 15823,
    },
    {
      name: "Bülach",
      postalCode: "8180",
      canton: "Zurich",
      cantonCode: "ZH",
      population: 21265,
    },
    {
      name: "Reinach",
      postalCode: "4153",
      canton: "Basel-Landschaft",
      cantonCode: "BL",
      population: 19027,
    },
    {
      name: "Horgen",
      postalCode: "8810",
      canton: "Zurich",
      cantonCode: "ZH",
      population: 22773,
    },
    {
      name: "Nyon",
      postalCode: "1260",
      canton: "Vaud",
      cantonCode: "VD",
      population: 21718,
    },
    {
      name: "Meyrin",
      postalCode: "1217",
      canton: "Geneva",
      cantonCode: "GE",
      population: 24512,
    },
    {
      name: "Kloten",
      postalCode: "8302",
      canton: "Zurich",
      cantonCode: "ZH",
      population: 20608,
    },
    {
      name: "Wil",
      postalCode: "9500",
      canton: "St. Gallen",
      cantonCode: "SG",
      population: 24077,
    },
    {
      name: "Baden",
      postalCode: "5400",
      canton: "Aargau",
      cantonCode: "AG",
      population: 19658,
    },
    {
      name: "Affoltern am Albis",
      postalCode: "8910",
      canton: "Zurich",
      cantonCode: "ZH",
      population: 12234,
    },
    {
      name: "Steffisburg",
      postalCode: "3612",
      canton: "Bern",
      cantonCode: "BE",
      population: 15942,
    },
    {
      name: "Olten",
      postalCode: "4600",
      canton: "Solothurn",
      cantonCode: "SO",
      population: 18135,
    },
    {
      name: "Gossau",
      postalCode: "9200",
      canton: "St. Gallen",
      cantonCode: "SG",
      population: 17945,
    },
    {
      name: "Martigny",
      postalCode: "1920",
      canton: "Valais",
      cantonCode: "VS",
      population: 18365,
    },
    {
      name: "Herisau",
      postalCode: "9100",
      canton: "Appenzell Ausserrhoden",
      cantonCode: "AR",
      population: 15688,
    },
    {
      name: "Solothurn",
      postalCode: "4500",
      canton: "Solothurn",
      cantonCode: "SO",
      population: 16777,
    },
    {
      name: "Burgdorf",
      postalCode: "3400",
      canton: "Bern",
      cantonCode: "BE",
      population: 16512,
    },
    {
      name: "Langenthal",
      postalCode: "4900",
      canton: "Bern",
      cantonCode: "BE",
      population: 15817,
    },
    {
      name: "Sierre",
      postalCode: "3960",
      canton: "Valais",
      cantonCode: "VS",
      population: 16332,
    },
    {
      name: "Schwyz",
      postalCode: "6430",
      canton: "Schwyz",
      cantonCode: "SZ",
      population: 15435,
    },
    {
      name: "Liestal",
      postalCode: "4410",
      canton: "Basel-Landschaft",
      cantonCode: "BL",
      population: 14627,
    },
    {
      name: "Rheinfelden",
      postalCode: "4310",
      canton: "Aargau",
      cantonCode: "AG",
      population: 13347,
    },
    {
      name: "Grenchen",
      postalCode: "2540",
      canton: "Solothurn",
      cantonCode: "SO",
      population: 16768,
    },
    {
      name: "Rorschach",
      postalCode: "9400",
      canton: "St. Gallen",
      cantonCode: "SG",
      population: 9274,
    },
    {
      name: "Arbon",
      postalCode: "9320",
      canton: "Thurgau",
      cantonCode: "TG",
      population: 14376,
    },
  ];

  // Try alternative APIs or use local data
  const fetchSwissCities = async () => {
    setLoading(true);

    try {
      // Try GeoNames API as alternative
      const response = await fetch(
        "https://secure.geonames.org/searchJSON?country=CH&featureClass=P&maxRows=1000&username=demo"
      );

      if (response.ok) {
        const data = await response.json();

        if (data.geonames && data.geonames.length > 0) {
          const apiCities = data.geonames
            .map((city, index) => ({
              name: city.name,
              postalCode: city.adminCode2 || "0000",
              canton: city.adminName1,
              cantonCode: city.adminCode1,
              population: city.population || 0,
              id: `${city.geonameId || index}-${city.name}`,
            }))
            .sort((a, b) => b.population - a.population);

          setCities(apiCities);
          setFilteredCities(apiCities);
          setLoading(false);
          return;
        }
      }
    } catch (err) {
      console.log("API failed, using local data:", err.message);
    }

    // Use comprehensive local data
    setCities(swissCitiesData.sort((a, b) => b.population - a.population));
    setFilteredCities(
      swissCitiesData.sort((a, b) => b.population - a.population)
    );
    setLoading(false);
  };

  // Filter cities based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredCities(cities);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = cities.filter(
        (city) =>
          city.name.toLowerCase().includes(query) ||
          city.postalCode.includes(searchQuery) ||
          (city.canton && city.canton.toLowerCase().includes(query)) ||
          (city.cantonCode && city.cantonCode.toLowerCase().includes(query))
      );
      setFilteredCities(filtered);
    }
  }, [searchQuery, cities]);

  const handleOpenModal = () => {
    setShowCityModal(true);
    if (cities.length === 0) {
      fetchSwissCities();
    }
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setShowCityModal(false);
    setSearchQuery("");

    if (onCitySelect) {
      onCitySelect({
        city: city.name,
        postalCode: city.postalCode,
        canton: city.canton,
        cantonCode: city.cantonCode,
        population: city.population,
        fullLocation: `${city.name}, ${city.cantonCode}, Switzerland`,
        displayText: `${city.name} (${city.postalCode})`,
      });
    }
  };

  const displayText = () => {
    if (selectedCity) {
      return `${selectedCity.name} (${selectedCity.postalCode})`;
    }
    return placeholder;
  };

  return (
    <View className="my-2">
      {/* Main Input Field */}
      <TouchableOpacity
        className="flex-row items-center justify-between border-2 border-red-600 rounded-xl px-4 py-4 bg-white shadow-sm"
        onPress={handleOpenModal}
        activeOpacity={0.7}
      >
        <Text
          className={`text-base flex-1 ${!selectedCity ? "text-gray-400" : "text-gray-900 font-medium"}`}
        >
          {displayText()}
        </Text>
        <View className="flex-row items-center ml-3">
          <Text className="text-xl">🇨🇭</Text>
          <Text className="text-sm text-red-600 ml-2 font-bold">▼</Text>
        </View>
      </TouchableOpacity>

      {/* City Selection Modal */}
      <Modal
        visible={showCityModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowCityModal(false)}
      >
        <SafeAreaView className="flex-1 bg-white">
          {/* Modal Header */}
          <View className="flex-row items-center justify-between px-5 py-4 bg-red-600 shadow-sm">
            <TouchableOpacity
              onPress={() => setShowCityModal(false)}
              className="py-2 px-2"
              activeOpacity={0.7}
            >
              <Text className="text-base text-white font-semibold">Cancel</Text>
            </TouchableOpacity>

            <Text className="text-lg font-bold text-white flex-1 text-center">
              🇨🇭 Swiss Cities
            </Text>

            <View className="w-16" />
          </View>

          {/* Search Input */}
          <View className="px-4 py-4 bg-gray-50 border-b border-gray-200">
            <TextInput
              className="border border-gray-300 rounded-xl px-4 py-3 text-base bg-white shadow-sm"
              placeholder="Search cities, postal codes, or cantons..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoCapitalize="words"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Loading State */}
          {loading && (
            <View className="flex-1 justify-center items-center py-20">
              <ActivityIndicator size="large" color="#dc2626" />
              <Text className="mt-4 text-lg text-gray-600 font-medium">
                Loading Swiss cities...
              </Text>
            </View>
          )}

          {/* Cities List */}
          {!loading && (
            <FlatList
              data={filteredCities}
              keyExtractor={(item) => item.id}
              className="flex-1"
              showsVerticalScrollIndicator={true}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="px-5 py-4 border-b border-gray-100 active:bg-gray-50"
                  onPress={() => handleCitySelect(item)}
                  activeOpacity={0.8}
                >
                  <View className="w-full">
                    <Text className="text-lg font-semibold text-gray-900 mb-1">
                      {item.name}
                    </Text>
                    <Text className="text-sm text-gray-600 mb-1">
                      📮 {item.postalCode} • 🏛️ {item.cantonCode}
                    </Text>
                    {item.population > 0 && (
                      <Text className="text-xs text-gray-500">
                        👥 {item.population.toLocaleString()} residents
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                <View className="p-10 items-center">
                  <Text className="text-lg text-gray-500 text-center font-medium">
                    {searchQuery
                      ? `No cities found for "${searchQuery}"`
                      : "No cities available"}
                  </Text>
                  {searchQuery && (
                    <Text className="text-sm text-gray-400 text-center mt-2">
                      Try searching by city name, postal code, or canton
                    </Text>
                  )}
                </View>
              }
            />
          )}
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default SwitzerlandCityPicker;
