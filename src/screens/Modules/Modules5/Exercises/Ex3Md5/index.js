import React, { useState } from "react";
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
      {foundWordsCells.length > 3 ? (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviar onPress={() => navigation.navigate("Modules5")}>
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
