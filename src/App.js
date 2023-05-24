
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import Activites from './screens/Activites'
import Modules1 from './screens/Modules/Modules1'
import Ex1Md1 from './screens/Modules/Modules1/Exercises/Ex1Md1'
import Ex2Md1 from './screens/Modules/Modules1/Exercises/Ex2Md1'
import Ex3Md1 from './screens/Modules/Modules1/Exercises/Ex3Md1'
import Ex4Md1 from './screens/Modules/Modules1/Exercises/Ex4Md1'
import Modules2 from './screens/Modules/Modules2'
import Ex1Md2 from './screens/Modules/Modules2/Exercises/Ex1Md2'
import Ex2Md2 from './screens/Modules/Modules2/Exercises/Ex2Md2'

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
        <Stack.Screen name="Ex4Md1" component={Ex4Md1} />
        <Stack.Screen name="Modules2" component={Modules2} />
        <Stack.Screen name="Ex1Md2" component={Ex1Md2} />
        <Stack.Screen name="Ex2Md2" component={Ex2Md2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;