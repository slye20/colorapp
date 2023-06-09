import React from "react";
import { View, Text } from "react-native-web";

export default function BlockRGB({ red, green, blue }) {
  return (
    <View
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        padding: 30,
        width: "100%",
      }}
    ></View>
  );
}
