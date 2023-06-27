import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Title, ButtonEnviarCinza, ButtonEnviar, TextButton, TextCaçaPalavras } from "./styles";

import HeaderBack from "../../../../../components/Header";

const data = [
  ["S", "I", "C", "M", "H", "I"],
  ["A", "U", "B", "A", "L", "A"],
  ["L", "L", "O", "P", "H", "E"],
  ["A", "C", "Z", "L", "M", "A"],
  ["R", "R", "O", "V", "O", "O"],
  ["I", "U", "U", "V", "H", "A"],
  ["O", "T", "E", "H", "H", "A"],
];

const wordList = ["SALARIO", "BALA", "OVO"];

const ROW_HEIGHT = 60;
const COL_WIDTH = 60;

export default function Ex3Md1({ navigation }) {
  const [selectedWord, setSelectedWord] = useState("");
  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWordsCells, setFoundWordsCells] = useState([]);
  const [foundWords, setFoundWords] = useState([]);

  useEffect(() => {
    const foundWordsCount = foundWords.length;
    setButtonEnabled(foundWordsCount === 3);
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
        text="Exercicio 3"
        onPress={() => navigation.navigate("Modules1")}
      />
      <GestureHandlerRootView
        style={{
          flex: 1,
          padding: 20,
          marginLeft: 5,
          backgroundColor: "#ffffff",
        }}
      >
        <Title>SALARIO, BALA e OVO</Title>
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
                {row.map((letter, colIndex) => {
                  const cellKey = `${rowIndex}-${colIndex}`;
                  const isSelected = selectedCells.includes(cellKey);
                  const isFound = foundWordsCells.includes(cellKey);
                  const isWordFound = foundWords.includes(selectedWord);
                  const isPartOfWord = selectedWord.includes(letter);

                  const cellStyles = [
                    styles.cell,
                    isSelected ? styles.selectedCell : null,
                    isFound ? styles.foundWordCell : null,
                    isWordFound && isPartOfWord ? styles.correctLetter : null,
                  ];

                  return (
                    <View key={colIndex} style={cellStyles}>
                      <TextCaçaPalavras>{letter}</TextCaçaPalavras>
                    </View>
                  );
                })}
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
          <ButtonEnviar onPress={() => navigation.navigate("Modules1")}>
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
  correctLetter: {
    backgroundColor: "yellow",
  },
});
