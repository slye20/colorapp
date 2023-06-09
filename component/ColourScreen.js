import { View, Text } from "react-native";

export default function ColourScreen({ route }) {
  const { red, green, blue } = route.params;
  const darkMode = red + green + blue < 400 ? true : false;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      }}
    >
      <Text style={{ color: darkMode ? "white" : "black" }}>Red: {red}</Text>
      <Text style={{ color: darkMode ? "white" : "black" }}>
        Green: {green}
      </Text>
      <Text style={{ color: darkMode ? "white" : "black" }}>Blue: {blue}</Text>
    </View>
  );
}
