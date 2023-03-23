import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Gustavo</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Activites')}>
        <Text>VAMOS TESTAR</Text>
      </TouchableOpacity>
    </View>
  );
}