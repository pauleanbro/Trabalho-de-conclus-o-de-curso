import React, { useState } from "react";
import { View } from "react-native";
import { Container, ContainerItens, TextItens, WordsItens } from "./styles";
import Grid from "../../../../../components/Jogos/HuntingWords/Grid";
import WordList from "../../../../../components/Jogos/HuntingWords/WordList";

const data = [
  ["A", "B", "C", "D", "G"],
  ["E", "F", "G", "H", "U"],
  ["I", "J", "K", "L", "Z"],
  ["M", "N", "O", "P", "Q"],
  ["M", "N", "O", "P", "Ç"],
];

const Exercises1 = () => {
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
      <ContainerItens>
        <Grid data={data} onLetterPress={handleLetterPress} />
      </ContainerItens>
      <WordList word={selectedWord} onUndo={handleUndo} onSave={handleSave} />
      <WordsItens>
        {words.map((words, index) => (
          <TextItens key={index}>{words}</TextItens>
        ))}
      </WordsItens>
    </Container>
  );
};

export default Exercises1;
