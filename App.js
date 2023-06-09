import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Dimensions,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./component/BlockRGB";
import { useState, useEffect } from "react";
import ColourScreen from "./component/ColourScreen";

function HomeScreen({ navigation }) {
  const [colorArray, setColorArray] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={addColor} title="+" />,
    });
  });

  function renderItem({ item }) {
    let { red, green, blue } = item;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Colour", { ...item })}
        style={{ flex: 1 / numColumns }}
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

  const numColumns = 4;

  return (
    <View style={styles.container}>
      {/* <Button onPress={addColor} title="Add colour" /> */}
      <Button onPress={() => setColorArray([])} title="Reset colours" />
      <FlatList
        style={styles.list}
        data={colorArray}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRight: () => <Button title="+" />,
          }}
        />
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
