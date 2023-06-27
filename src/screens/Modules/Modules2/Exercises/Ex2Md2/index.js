import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Title,
  ButtonEnviarCinza,
  ButtonEnviar,
  TextButton,
  TextCaçaPalavras,
} from "./styles";

import HeaderBack from "../../../../../components/Header";

const data = [
  ["F", "R", "E", "T", "I", "N", "A"],
  ["A", "U", "K", "V", "J", "A", "N"],
  ["D", "P", "T", "I", "N", "H", "A"],
  ["I", "E", "Z", "D", "M", "A", "I"],
  ["G", "D", "O", "A", "O", "O", "T"],
  ["A", "R", "U", "V", "H", "A", "E"],
  ["C", "A", "M", "I", "N", "H", "O"],
];

const wordList = ["FADIGA", "CAMINHO", "RETINA", "PEDRA", "TINHA", "VIDA"];

const ROW_HEIGHT = 55;
const COL_WIDTH = 55;

export default function Ex3Md1({ navigation }) {
  const [selectedWord, setSelectedWord] = useState("");
  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWordsCells, setFoundWordsCells] = useState([]);
  const [foundWords, setFoundWords] = useState([]);

  useEffect(() => {
    const foundWordsCount = foundWords.length;
    setButtonEnabled(foundWordsCount === 6);
  }, [foundWords]);

  const [isButtonEnabled, setButtonEnabled] = useState(false);

  const handleGestureEvent = (event) => {
    const { x, y } = event.nativeEvent;
    const rowIndex = Math.floor(y / ROW_HEIGHT);
    const colIndex = Math.floor(x / COL_WIDTH);
    if (!selectedCells.includes(`${rowIndex}-${colIndex}`)) {
      setSelectedCells([...selectedCells, `${rowIndex}-${colIndex}`]);
      setSelectedWord(selectedWord + data[rowIndex][colIndex]);
    }
  };

  const handleStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      checkIfWordExists();
      setSelectedCells([]);
      setSelectedWord("");
    }
  };

  const checkIfWordExists = () => {
    if (wordList.includes(selectedWord)) {
      setFoundWordsCells((prevCells) => [...prevCells, ...selectedCells]);
      setFoundWords((prevWords) => [...prevWords, selectedWord]);
      setSelectedWord("");
    }
  };

  return (
    <>
      <HeaderBack
        text="Exercicio 2"
        onPress={() => navigation.navigate("Modules2")}
      />

      <GestureHandlerRootView
        style={{
          flex: 1,
          padding: 20,
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Title>FADIGA - CAMINHO - RETINA{"\n"}PEDRA - TINHA - VIDA</Title>
        <PanGestureHandler
          onGestureEvent={handleGestureEvent}
          onHandlerStateChange={handleStateChange}
        >
          <View
            style={{
              height: ROW_HEIGHT * data.length,
              width: COL_WIDTH * data[0].length,
            }}
          >
            {data.map((row, rowIndex) => (
              <View key={rowIndex} style={{ flexDirection: "row" }}>
                {row.map((letter, colIndex) => (
                  <View
                    key={colIndex}
                    style={[
                      styles.cell,
                      foundWordsCells.includes(`${rowIndex}-${colIndex}`)
                        ? styles.foundWordCell
                        : null,
                      selectedCells.includes(`${rowIndex}-${colIndex}`)
                        ? styles.selectedCell
                        : null,
                    ]}
                  >
                    <TextCaçaPalavras>{letter}</TextCaçaPalavras>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </PanGestureHandler>
      </GestureHandlerRootView>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        {isButtonEnabled ? (
          <ButtonEnviar onPress={() => navigation.navigate("Modules2")}>
            <TextButton>Enviar</TextButton>
          </ButtonEnviar>
        ) : (
          <ButtonEnviarCinza>
            <TextButton>Enviar</TextButton>
          </ButtonEnviarCinza>
        )}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  cell: {
    height: ROW_HEIGHT,
    width: COL_WIDTH,
    borderWidth: 2,
    borderBottomColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  selectedCell: {
    backgroundColor: "lightblue",
  },
  foundWordCell: {
    backgroundColor: "lightgreen",
  },
});
