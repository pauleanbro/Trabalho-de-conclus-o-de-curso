import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Title, Letras,ButtonEnviar, ButtonEnviarCinza, TextButton } from "./styles";

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

const ROW_HEIGHT = 40;
const COL_WIDTH = 48;

export default function Ex1Md5({navigation}) {
  const [selectedWord, setSelectedWord] = useState("");
  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWordsCells, setFoundWordsCells] = useState([]); // novo estado

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

  return (
    <>
      <HeaderBack
        text="Exercicio 1"
        onPress={() => navigation.navigate("Modules5")}
      />

      <GestureHandlerRootView
        style={{
          flex: 1,
          padding: 10,
          alignItems: "center",
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
        {foundWordsCells.length < 4 ? (
          <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
            <ButtonEnviarCinza>
              <TextButton>Enviar</TextButton>
            </ButtonEnviarCinza>
          </View>
        ) : (
          <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
            <ButtonEnviar onPress={() => navigation.navigate("Modules1")}>
              <TextButton>Enviar</TextButton>
            </ButtonEnviar>
          </View>
        )}
      </GestureHandlerRootView>
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
