import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Title } from "./styles";

import HeaderBack from "../../../../../components/Header";

const data = [
  ["h", "I", "C", "I", "H", "I", "j"],
  ["R", "O", "M", "A", "P", "A", "O"],
  ["W", "L", "O", "P", "K", "O", "p"],
  ["S", "C", "Z", "L", "M", "A", "R"],
  ["T", "E", "M", "P", "O", "O", "T"],
  ["D", "T", "E", "M", "Ã", "O", "Z"],
  ["O", "T", "E", "H", "Ç", "A", "U"],
  ["O", "T", "E", "H", "N", "A", "L"],
  ["O", "T", "E", "H", "A", "A", "P"],
  ["O", "T", "E", "H", "C", "A", "N"],
  ["C", "O", "R", "A", "Ç", "Ã", "O"],
];

const wordList = ["AMOR", "CANÇÃO", "TEMPO", "LUZ", "CORAÇÃO"];

const ROW_HEIGHT = 50;
const COL_WIDTH = 50;

export default function Ex3Md5() {
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
        text="Exercicio 2"
        onPress={() => navigation.navigate("Modules1")}
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
                    <Text>{letter}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </PanGestureHandler>
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
