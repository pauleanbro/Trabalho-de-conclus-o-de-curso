import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Ex4Md3 = () => {
  const words = ["Branca", "Preta", "Azul", "Amarelo", "Vermelho", "Lilás"];
  
  const [syllables, setSyllables] = useState(Array(words.length).fill(""));

  const handleSyllablePress = (index, syllable) => {
    const updatedSyllables = [...syllables];
    updatedSyllables[index] += syllable;
    setSyllables(updatedSyllables);
  };

  return (
    <View>
      {words.map((word, index) => (
        <View key={index}>
          <Text>{word}</Text>
          {syllables[index] === word ? (
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {syllables[index]}
            </Text>
          ) : (
            <TouchableOpacity>
              {syllables.map((syllable, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => handleSyllablePress(index, syllable)}
                >
                  <Text>{syllable}</Text>
                </TouchableOpacity>
              ))}
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
};

export default Ex4Md3;
