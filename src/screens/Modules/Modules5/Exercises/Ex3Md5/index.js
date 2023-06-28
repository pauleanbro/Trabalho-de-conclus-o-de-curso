import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Title,
  Letras,
  ButtonEnviar,
  ButtonEnviarCinza,
  TextButton,
} from "./styles";

import HeaderBack from "../../../../../components/Header";

import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
  ["G", "U", "C", "I", "H", "O", "j"],
  ["C", "O", "R", "A", "Ç", "Ã", "O"],
  ["T", "E", "M", "P", "O", "Ç", "p"],
  ["A", "C", "Z", "L", "M", "N", "R"],
  ["Ç", "E", "R", "O", "M", "A", "T"],
  ["I", "T", "E", "M", "Ã", "C", "Z"],
  ["O", "T", "E", "H", "Ç", "A", "U"],
  ["O", "T", "E", "H", "N", "A", "L"],
];

const wordList = ["AMOR", "CANÇÃO", "TEMPO", "LUZ", "CORAÇÃO"];

const ROW_HEIGHT = 50;
const COL_WIDTH = 50;

export default function Ex3Md5({ navigation }) {
  const [selectedWord, setSelectedWord] = useState("");
  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWordsCells, setFoundWordsCells] = useState([]); // novo estado
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
      const gameDataString = await AsyncStorage.getItem("gameDataEx3Md5");
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
      await AsyncStorage.setItem("gameDataEx3Md5", JSON.stringify(gameData));
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
      console.log("Palavra encontrada: ", selectedWord);
      setFoundWordsCells((prevCells) => [...prevCells, ...selectedCells]); // adiciona as células selecionadas ao estado
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
      await AsyncStorage.setItem(
        "foundWordsEx3Md5",
        JSON.stringify(foundWords)
      );
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
        text="Exercicio 2"
        onPress={() => navigation.navigate("Modules5")}
      />

      <GestureHandlerRootView
        style={{
          flex: 1,
          padding: 20,
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Title>AMOR - CANÇÃO - TEMPO - LUZ - CORAÇÃO</Title>
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
                    <Letras>{letter}</Letras>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </PanGestureHandler>
      </GestureHandlerRootView>
      {isButtonEnabled ? (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviar onPress={() => saveWords()}>
            <TextButton>Enviar</TextButton>
          </ButtonEnviar>
        </View>
      ) : (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviarCinza>
            <TextButton>Enviar</TextButton>
          </ButtonEnviarCinza>
        </View>
      )}
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
