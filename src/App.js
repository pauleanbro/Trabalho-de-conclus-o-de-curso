import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Activites from "./screens/Activites";
import Modules1 from "./screens/Modules/Modules1";
import Ex1Md1 from "./screens/Modules/Modules1/Exercises/Ex1Md1";
import Ex2Md1 from "./screens/Modules/Modules1/Exercises/Ex2Md1";
import Ex3Md1 from "./screens/Modules/Modules1/Exercises/Ex3Md1";
import Modules2 from "./screens/Modules/Modules2";
import Ex1Md2 from "./screens/Modules/Modules2/Exercises/Ex1Md2";
import Ex2Md2 from "./screens/Modules/Modules2/Exercises/Ex2Md2";
import Ex3Md2 from "./screens/Modules/Modules2/Exercises/Ex3Md2";
import Ex4Md2 from "./screens/Modules/Modules2/Exercises/Ex4Md2";
import Ex5Md2 from "./screens/Modules/Modules2/Exercises/Ex5Md2";
import Ex6Md2 from "./screens/Modules/Modules2/Exercises/Ex6Md2";
import Modules3 from "./screens/Modules/Modules3";
import Ex1Md3 from "./screens/Modules/Modules3/Exercises/Ex1Md3";
import Ex2Md3 from "./screens/Modules/Modules3/Exercises/Ex2Md3";
import Ex3Md3 from "./screens/Modules/Modules3/Exercises/Ex3Md3";
import Ex4Md3 from "./screens/Modules/Modules3/Exercises/Ex4Md3";
import Ex5Md3 from "./screens/Modules/Modules3/Exercises/Ex5Md3";
import Modules4 from "./screens/Modules/Modules4";
import Ex1Md4 from "./screens/Modules/Modules4/Exercises/Ex1Md4";
import Modules5 from "./screens/Modules/Modules5";
import Ex1Md5 from "./screens/Modules/Modules5/Exercises/Ex1Md5";
import Ex2Md5 from "./screens/Modules/Modules5/Exercises/Ex2Md5";
import Ex3Md5 from "./screens/Modules/Modules5/Exercises/Ex3Md5";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Activites" component={Activites} />
        <Stack.Screen name="Modules1" component={Modules1} />
        <Stack.Screen name="Ex1Md1" component={Ex1Md1} />
        <Stack.Screen name="Ex2Md1" component={Ex2Md1} />
        <Stack.Screen name="Ex3Md1" component={Ex3Md1} />
        <Stack.Screen name="Modules2" component={Modules2} />
        <Stack.Screen name="Ex1Md2" component={Ex1Md2} />
        <Stack.Screen name="Ex2Md2" component={Ex2Md2} />
        <Stack.Screen name="Ex3Md2" component={Ex3Md2} />
        <Stack.Screen name="Ex4Md2" component={Ex4Md2} />
        <Stack.Screen name="Ex5Md2" component={Ex5Md2} />
        <Stack.Screen name="Ex6Md2" component={Ex6Md2} />
        <Stack.Screen name="Modules3" component={Modules3} />
        <Stack.Screen name="Ex1Md3" component={Ex1Md3} />
        <Stack.Screen name="Ex2Md3" component={Ex2Md3} />
        <Stack.Screen name="Ex3Md3" component={Ex3Md3} />
        <Stack.Screen name="Ex4Md3" component={Ex4Md3} />
        <Stack.Screen name="Ex5Md3" component={Ex5Md3} />
        <Stack.Screen name="Modules4" component={Modules4} />
        <Stack.Screen name="Ex1Md4" component={Ex1Md4} />
        <Stack.Screen name="Modules5" component={Modules5} />
        <Stack.Screen name="Ex1Md5" component={Ex1Md5} />
        <Stack.Screen name="Ex2Md5" component={Ex2Md5} />
        <Stack.Screen name="Ex3Md5" component={Ex3Md5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
