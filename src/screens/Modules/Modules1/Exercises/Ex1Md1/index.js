import React, { useState } from "react";
import { View } from "react-native";
import {
  Container,
  ContainerItens,
  TextItens,
  WordsItens,
  ContainerWords,
  TextWords,
  ContainerButton,
  TextButton,
  Border,
} from "./styles";
import Grid from "../../../../../components/Jogos/HuntingWords/Grid";
import WordList from "../../../../../components/Jogos/HuntingWords/WordList";

const data = [
  ["A", "P", "C", "D", "G", "I", "G"],
  ["E", "R", "G", "H", "L", "H", "E"],
  ["B", "O", "L", "O", "Z", "B", "A"],
  ["M", "V", "O", "P", "Q", "K", "O"],
  ["S", "A", "L", "A", "R", "I", "O"],
];

const Ex1Md1 = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [undo, setUndo] = useState(false);
  const [words, setWords] = useState([]);

  const handleLetterPress = (row, col) => {
    setSelectedLetters([...selectedLetters, { row, col }]);
    setUndo(false);
  };

  const handleUndo = () => {
    setSelectedLetters(selectedLetters.slice(0, -1));
    setUndo(true);
  };

  const handleSave = () => {
    const selectedWord = selectedLetters
      .map((letter) => data[letter.row][letter.col])
      .join("");
    if (selectedWord !== "") {
      setWords([...words, selectedWord]);
      setSelectedLetters([]);
    }
  };

  const selectedWord = selectedLetters
    .map((letter) => data[letter.row][letter.col])
    .join("");

  return (
    <Container>
      <ContainerWords>
        <TextWords>SALARIO</TextWords>
        <TextWords>BOLO</TextWords>
        <TextWords>PROVA</TextWords>
      </ContainerWords>
      <ContainerItens>
        <Grid data={data} onLetterPress={handleLetterPress} />
      </ContainerItens>
      <WordList word={selectedWord} onUndo={handleUndo} onSave={handleSave} />
      <WordsItens>
        {words.map((words, index) => (
          <TextItens key={index}>{words}</TextItens>
        ))}
      </WordsItens>
      <Border />
      <View style={{ alignItems: "center" }}>
        <ContainerButton>
          <TextButton>Enviar</TextButton>
        </ContainerButton>
      </View>
    </Container>
  );
};

export default Ex1Md1;
