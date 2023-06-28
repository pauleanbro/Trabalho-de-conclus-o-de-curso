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

import AsyncStorage from "@react-native-async-storage/async-storage";

import HeaderBack from "../../../../../components/Header";

const data = [
  ["B", "E", "B", "P", "S", "I", "R", "A"],
  ["A", "S", "R", "R", "A", "A", "R", "A"],
  ["N", "T", "I", "I", "U", "E", "R", "A"],
  ["A", "I", "N", "M", "D", "A", "R", "A"],
  ["N", "L", "C", "A", "A", "O", "R", "A"],
  ["E", "I", "A", "V", "D", "A", "R", "A"],
  ["I", "N", "D", "E", "E", "A", "R", "A"],
  ["R", "G", "E", "R", "H", "A", "R", "A"],
  ["A", "U", "I", "A", "H", "A", "R", "A"],
  ["S", "E", "R", "H", "H", "A", "R", "A"],
  ["O", "T", "A", "U", "R", "O", "R", "A"],
];

const wordList = [
  "AURORA",
  "BANANEIRAS",
  "BRINCADEIRA",
  "ESTILINGUE",
  "PRIMAVERA",
  "SAUDADE",
];

const ROW_HEIGHT = 38;
const COL_WIDTH = 45  ;

export default function Ex1Md5({ navigation }) {
  const [selectedWord, setSelectedWord] = useState("");
  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWordsCells, setFoundWordsCells] = useState([]);
  const [foundWords, setFoundWords] = useState([]);

  useEffect(() => {
    const foundWordsCount = foundWords.length;
    setButtonEnabled(foundWordsCount === 5);
  }, [foundWords]);

  const [isButtonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    loadGame();
  }, []);

  useEffect(() => {
    saveGame();
  }, [selectedCells, foundWords]);

  const loadGame = async () => {
    try {
      const gameDataString = await AsyncStorage.getItem("gameDataEx1Md5");
      if (gameDataString) {
        const gameData = JSON.parse(gameDataString);
        setSelectedCells(gameData.selectedCells);
        setSelectedWord(gameData.selectedWord);
        setFoundWordsCells(gameData.foundWordsCells);
        setFoundWords(gameData.foundWords);
      }
    } catch (error) {
      console.log("Erro ao carregar o jogo:", error);
    }
  };

  const saveGame = async () => {
    try {
      const gameData = {
        selectedCells,
        selectedWord,
        foundWordsCells,
        foundWords,
      };
      await AsyncStorage.setItem("gameDataEx1Md5", JSON.stringify(gameData));
      console.log("Jogo salvo com sucesso!");
    } catch (error) {
      console.log("Erro ao salvar o jogo:", error);
    }
  };

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

  const clearGameData = async () => {
    try {
      await AsyncStorage.removeItem("gameData");
      console.log("Dados do jogo removidos com sucesso!");
    } catch (error) {
      console.log("Erro ao remover os dados do jogo:", error);
    }
  };

  const saveWords = async () => {
    try {
      await AsyncStorage.setItem("foundWordsEx1Md5", JSON.stringify(foundWords));
      console.log("Palavras salvas com sucesso!");
      clearGameData();
      navigation.navigate("Modules5");
    } catch (error) {
      console.log("Erro ao salvar as palavras:", error);
    }
  };

  return (
    <>
      <HeaderBack
        text="Exercicio 3"
        onPress={() => navigation.navigate("Modules5")}
      />
      <GestureHandlerRootView
        style={{
          flex: 1,
          padding: 20,
          marginLeft: 5,
          backgroundColor: "#ffffff",
        }}
      >
        <Title>
          AURORA - BANANEIRAS - BRINCADEIRA - ESTILINGUE - PRIMAVERA - SAUDADE
        </Title>
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
          <ButtonEnviar onPress={() => saveWords()}>
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
