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

  useEffect(() => {
    loadGame();
  }, []);

  useEffect(() => {
    saveGame();
  }, [selectedCells, foundWords]);

  const loadGame = async () => {
    try {
      const gameDataString = await AsyncStorage.getItem("gameDataEx2Md2");
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
      await AsyncStorage.setItem("gameData1Ex2Md2", JSON.stringify(gameData));
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
      await AsyncStorage.setItem(
        "foundWordsEx2Md2",
        JSON.stringify(foundWords)
      );
      await AsyncStorage.setItem("params1Ex1Md2", "true");
      console.log("Palavras salvas com sucesso!");
      clearGameData();
      navigation.navigate("Modules2");
    } catch (error) {
      console.log("Erro ao salvar as palavras:", error);
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
          paddingTop: 20,
          marginLeft: 5,
          alignItems: 'center',
          backgroundColor: "#ffffff",
        }}
      >
        <Title>FADIGA - CAMINHO - RETINA - PEDRA - TINHA - VIDA</Title>
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
});
