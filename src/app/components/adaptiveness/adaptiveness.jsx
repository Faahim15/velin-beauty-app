import { Dimensions } from "react-native";

// Base size from your Figma design
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

const { width, height } = Dimensions.get("window");

// Scale based on width
export const scale = (size) => (width / BASE_WIDTH) * size;

// Scale based on height
export const verticalScale = (size) => (height / BASE_HEIGHT) * size;

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");
