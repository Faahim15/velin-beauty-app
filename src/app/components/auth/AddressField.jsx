import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  Alert,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Replace with your Google Places API key
const GOOGLE_PLACES_API_KEY = "AIzaSyAszXC1be8aJ37eHuNcBm_-O1clWkPUwV4";

export default function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedStreet, setSelectedStreet] = useState(null);
  const [cities, setCities] = useState([]);
  const [streets, setStreets] = useState([]);
  const [cityModalVisible, setCityModalVisible] = useState(false);
  const [streetModalVisible, setStreetModalVisible] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  const [loadingStreets, setLoadingStreets] = useState(false);
  const [citySearchText, setCitySearchText] = useState("");
  const [streetSearchText, setStreetSearchText] = useState("");
  const [activeInfo, setActiveInfo] = useState(null);

  // Pre-populate with major Swiss cities
  const popularSwissCities = [
    "Zurich",
    "Geneva",
    "Basel",
    "Bern",
    "Lausanne",
    "Winterthur",
    "Lucerne",
    "St. Gallen",
    "Lugano",
    "Biel",
    "Thun",
    "Köniz",
    "La Chaux-de-Fonds",
    "Schaffhausen",
    "Fribourg",
    "Chur",
  ];

  // Fetch cities using Google Places API (Switzerland only)
  const fetchCities = async (searchQuery = "") => {
    setLoadingCities(true);

    // If no search query, show popular Swiss cities
    if (!searchQuery.trim()) {
      try {
        const cityPromises = popularSwissCities.map(async (cityName) => {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(cityName + ", Switzerland")}&inputtype=textquery&fields=place_id,name,formatted_address&key=${GOOGLE_PLACES_API_KEY}`
          );
          const data = await response.json();
          if (data.status === "OK" && data.candidates.length > 0) {
            const place = data.candidates[0];
            return {
              id: place.place_id,
              name: cityName,
              description: place.formatted_address,
              place_id: place.place_id,
            };
          }
          return null;
        });

        const results = await Promise.all(cityPromises);
        const validCities = results.filter((city) => city !== null);
        setCities(validCities);
      } catch (error) {
        console.error("Error fetching popular cities:", error);
        setCities([]);
      }
    } else {
      // Search for cities based on user input
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(searchQuery)}&types=(cities)&components=country:ch&key=${GOOGLE_PLACES_API_KEY}`
        );
        const data = await response.json();

        if (data.status === "OK" && data.predictions) {
          const cityList = data.predictions.map((prediction) => ({
            id: prediction.place_id,
            name: prediction.structured_formatting.main_text,
            description: prediction.description,
            place_id: prediction.place_id,
          }));
          setCities(cityList);
        } else if (data.status === "REQUEST_DENIED") {
          Alert.alert(
            "API Error",
            "Please check your Google Places API key and ensure Places API is enabled."
          );
        } else {
          setCities([]);
        }
      } catch (error) {
        Alert.alert(
          "Error",
          "Failed to fetch cities. Please check your internet connection."
        );
        console.error("Error fetching cities:", error);
      }
    }
    setLoadingCities(false);
  };

  // Fetch street addresses in Switzerland
  const fetchStreets = async (searchQuery = "") => {
    if (!selectedCity) return;

    setLoadingStreets(true);
    try {
      let searchInput = selectedCity.name + ", Switzerland";
      if (searchQuery.trim()) {
        searchInput = searchQuery + ", " + selectedCity.name + ", Switzerland";
      }

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(searchInput)}&types=address&components=country:ch&key=${GOOGLE_PLACES_API_KEY}`
      );
      const data = await response.json();

      if (data.status === "OK" && data.predictions) {
        const streetList = data.predictions.map((prediction) => ({
          id: prediction.place_id,
          name:
            prediction.structured_formatting.main_text ||
            prediction.description,
          description: prediction.description,
          place_id: prediction.place_id,
        }));
        setStreets(streetList);
      } else {
        setStreets([]);
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "Failed to fetch street addresses. Please check your internet connection."
      );
      console.error("Error fetching streets:", error);
    } finally {
      setLoadingStreets(false);
    }
  };

  // Load popular cities when component mounts
  useEffect(() => {
    fetchCities();
  }, []);

  // Debounced search for cities
  useEffect(() => {
    if (!cityModalVisible) return;

    const timeoutId = setTimeout(() => {
      fetchCities(citySearchText);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [citySearchText, cityModalVisible]);

  // Debounced search for streets
  useEffect(() => {
    if (!streetModalVisible || !selectedCity) return;

    const timeoutId = setTimeout(() => {
      fetchStreets(streetSearchText);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [streetSearchText, streetModalVisible, selectedCity]);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSelectedStreet(null); // Reset street selection
    setCityModalVisible(false);
    setCitySearchText("");
    setStreetSearchText("");
    setStreets([]);
  };

  const handleStreetSelect = (street) => {
    setSelectedStreet(street);
    setStreetModalVisible(false);
    setStreetSearchText("");
  };

  const openCityModal = () => {
    setCityModalVisible(true);
    setCitySearchText("");
    fetchCities(); // Load popular cities
  };

  const openStreetModal = () => {
    if (selectedCity) {
      setStreetModalVisible(true);
      setStreetSearchText("");
      fetchStreets(); // Load streets for selected city
    } else {
      Alert.alert("Please select a city first");
    }
  };

  const renderCityItem = ({ item }) => (
    <TouchableOpacity
      className="py-4 px-4 border-b border-gray-200 active:bg-gray-50"
      onPress={() => handleCitySelect(item)}
    >
      <Text className="text-base font-medium text-gray-800">{item.name}</Text>
      <Text className="text-sm text-gray-500 mt-1">{item.description}</Text>
    </TouchableOpacity>
  );

  const renderStreetItem = ({ item }) => (
    <TouchableOpacity
      className="py-4 px-4 border-b border-gray-200 active:bg-gray-50"
      onPress={() => handleStreetSelect(item)}
    >
      <Text className="text-base font-medium text-gray-800">{item.name}</Text>
      <Text className="text-sm text-gray-500 mt-1">{item.description}</Text>
    </TouchableOpacity>
  );

  const handleIbutton = (key) => {
    setActiveInfo((prev) => (prev === key ? null : key)); // toggle
  };
  return (
    <View className="flex-1 bg-white">
      {/* <StatusBar style="auto" /> */}

      <View className="">
        {/* City Dropdown */}
        <View className="mb-0">
          <View className="flex-row items-center mb-2">
            <Text className="font-poppins text-base text-[#060605]">City</Text>
            <TouchableOpacity
              className="flex-row gap-[5%]"
              onPress={() => handleIbutton("city")}
            >
              <View className="w-4 h-4  rounded-full border border-black bg-white ml-2 items-center justify-center">
                <Text className="text-black font-poppins text-xs">i</Text>
              </View>
              {activeInfo === "city" && (
                <Text className="text-black font-poppins text-xs">
                  Mandatory
                </Text>
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="w-full border border-black rounded-md py-[4%] px-[4%]  justify-between flex-row items-center bg-white shadow-sm"
            onPress={openCityModal}
          >
            <Text
              className={
                selectedCity
                  ? "text-gray-800 font-poppins text-base flex-1"
                  : "text-gray-400 font-poppins text-base flex-1"
              }
            >
              {selectedCity ? selectedCity.name : "City"}
            </Text>
            <Ionicons
              className="pt-[1%]"
              name="chevron-down-outline"
              size={16}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        {/* Street Address Dropdown */}
        <View className="mt-[2.36%]">
          <View className="flex-row items-center mb-2">
            <Text className="font-poppins text-base text-[#060605]">
              Street Address
            </Text>
            <TouchableOpacity
              className="flex-row gap-[5%]"
              onPress={() => handleIbutton("street")}
            >
              <View className="w-4 h-4  rounded-full border border-black bg-white ml-2 items-center justify-center">
                <Text className="text-black font-poppins text-xs">i</Text>
              </View>
              {activeInfo === "street" && (
                <Text className="text-black font-poppins text-xs">
                  Mandatory
                </Text>
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className={`w-full border  rounded-md py-[4%] px-[4%] justify-between flex-row items-center  ${
              selectedCity
                ? "border-black  bg-white"
                : "border-gray-200 bg-gray-100"
            }`}
            onPress={openStreetModal}
            disabled={!selectedCity}
          >
            <Text
              className={`text-base font-poppins flex-1 ${
                selectedStreet
                  ? "text-gray-800 "
                  : selectedCity
                    ? "text-gray-400"
                    : "text-gray-300"
              }`}
            >
              {selectedStreet ? selectedStreet.name : "Select Street Address"}
            </Text>
            <Ionicons
              className="pt-[1%]"
              name="chevron-down-outline"
              size={16}
              color={selectedCity ? "#000" : "#9CA3AF"}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* City Dropdown Modal */}
      <Modal
        visible={cityModalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View className="flex-1 bg-white">
          {/* Header */}
          <View className="flex-row justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
            <Text className="text-lg font-semibold text-gray-800">
              Select City in Switzerland
            </Text>
            <TouchableOpacity
              onPress={() => {
                setCityModalVisible(false);
                setCitySearchText("");
              }}
              className="px-3 py-1"
            >
              <Text className="text-blue-600 text-base font-medium">
                Cancel
              </Text>
            </TouchableOpacity>
          </View>

          {/* Search Input */}
          <View className="p-4 bg-white border-b border-gray-100">
            <TextInput
              className="w-full h-10 border border-gray-300 rounded-lg px-3 text-base bg-gray-50"
              placeholder="Search Swiss cities (e.g., Zurich, Geneva)..."
              value={citySearchText}
              onChangeText={setCitySearchText}
              autoFocus={false}
            />
          </View>

          {/* Results */}
          {loadingCities ? (
            <View className="flex-1 justify-center items-center">
              <ActivityIndicator size="large" color="#3B82F6" />
              <Text className="text-gray-600 mt-2">
                Searching Swiss cities...
              </Text>
            </View>
          ) : cities.length > 0 ? (
            <FlatList
              data={cities}
              renderItem={renderCityItem}
              keyExtractor={(item) => item.id}
              className="flex-1"
              showsVerticalScrollIndicator={false}
            />
          ) : citySearchText.length > 0 ? (
            <View className="flex-1 justify-center items-center px-4">
              <Text className="text-gray-600 text-center">
                No Swiss cities found
              </Text>
              <Text className="text-gray-500 text-center mt-2">
                Try searching for Zurich, Geneva, Basel, etc.
              </Text>
            </View>
          ) : (
            <View className="flex-1 justify-center items-center px-4">
              <Text className="text-gray-500 text-center">
                Popular Swiss cities shown above
              </Text>
              <Text className="text-gray-400 text-center mt-2">
                Or type to search for more
              </Text>
            </View>
          )}
        </View>
      </Modal>

      {/* Street Dropdown Modal */}
      <Modal
        visible={streetModalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View className="flex-1 bg-white">
          {/* Header */}
          <View className="flex-row justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-800">
                Select Street Address
              </Text>
              <Text className="text-sm text-gray-600">
                in {selectedCity?.name}, Switzerland
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setStreetModalVisible(false);
                setStreetSearchText("");
              }}
              className="px-3 py-1"
            >
              <Text className="text-blue-600 text-base font-medium">
                Cancel
              </Text>
            </TouchableOpacity>
          </View>

          {/* Search Input */}
          <View className="p-4 bg-white border-b border-gray-100">
            <TextInput
              className="w-full h-10 border border-gray-300 rounded-lg px-3 text-base bg-gray-50"
              placeholder={`Search addresses in ${selectedCity?.name}...`}
              value={streetSearchText}
              onChangeText={setStreetSearchText}
              autoFocus={false}
            />
          </View>

          {/* Results */}
          {loadingStreets ? (
            <View className="flex-1 justify-center items-center">
              <ActivityIndicator size="large" color="#3B82F6" />
              <Text className="text-gray-600 mt-2">Searching addresses...</Text>
            </View>
          ) : streets.length > 0 ? (
            <FlatList
              data={streets}
              renderItem={renderStreetItem}
              keyExtractor={(item) => item.id}
              className="flex-1"
              showsVerticalScrollIndicator={false}
            />
          ) : streetSearchText.length > 0 ? (
            <View className="flex-1 justify-center items-center px-4">
              <Text className="text-gray-600 text-center">
                No addresses found in {selectedCity?.name}
              </Text>
              <Text className="text-gray-500 text-center mt-2">
                Try typing a street name or area
              </Text>
            </View>
          ) : (
            <View className="flex-1 justify-center items-center px-4">
              <Text className="text-gray-500 text-center">
                🇨🇭 Type to search for street addresses
              </Text>
              <Text className="text-gray-400 text-center mt-2">
                in {selectedCity?.name}, Switzerland
              </Text>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
}
