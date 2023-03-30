
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import Activites from './screens/Activites'
import Modules1 from './screens/Modules/Modules1'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Activites" component={Activites} />
        <Stack.Screen name="Modules1" component={Modules1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;