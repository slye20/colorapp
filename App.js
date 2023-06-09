import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./component/BlockRGB";
import { useState } from "react";

function HomeScreen({ navigation }) {
  const [colorArray, setColorArray] = useState([]);

  function renderItem({ item }) {
    let { red, green, blue } = item;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Colour", { ...item })}
      >
        <BlockRGB red={red} green={green} blue={blue} />
      </TouchableOpacity>
    );
  }

  function addColor() {
    let colorObj = {
      red: Math.ceil(Math.random() * 255),
      green: Math.ceil(Math.random() * 255),
      blue: Math.ceil(Math.random() * 255),
      id: colorArray.length.toString(),
    };
    setColorArray([colorObj, ...colorArray]);
  }

  return (
    <View style={styles.container}>
      <Button onPress={addColor} title="Add colour" />
      <FlatList style={styles.list} data={colorArray} renderItem={renderItem} />
    </View>
  );
}

function ColourScreen({ route }) {
  const { red, green, blue } = route.params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      }}
    >
      <Text>Red: {red}</Text>
      <Text>Green: {green}</Text>
      <Text>Blue: {blue}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Colour" component={ColourScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
  },
});
