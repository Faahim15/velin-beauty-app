import { View, Text, Pressable } from "react-native";

function Button({ children, onPress, buttonStyle }) {
  const isDisabled = buttonStyle.reviewText.trim().length === 0;
  return (
    <View className="mt-[3.5%]">
      <Pressable disabled={isDisabled} onPress={onPress}>
        <View
          className={`border px-[2.5%] py-[4%] rounded-md bg-[${buttonStyle.backgroundColor}] border-[${buttonStyle.borderColor}] ${
            isDisabled ? "opacity-50" : ""
          }`}
        >
          <Text
            className={`font-poppinsMedium text-base text-center text-[${buttonStyle.textColor}]`}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;
