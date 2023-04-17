import React, { useState } from "react";
import { View } from "react-native";
import {
  Container,
  ContainerItens,
  TextItens,
  WordsItens,
  ContainerButton,
  TextButton,
  Border,
  ContainerWords,
  TextWords,
} from "./styles";
import Grid from "../../../../../components/Jogos/HuntingWords/Grid";
import WordList from "../../../../../components/Jogos/HuntingWords/WordList";

const data = [["A", "E", "I", "O", "U"]];

const Ex4Md1 = () => {
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
        <TextWords>AMANDA</TextWords>
        <TextWords>GUSTAVO</TextWords>
        <TextWords>GUILHERME</TextWords>
      </ContainerWords>
      <ContainerItens>
        <Grid data={data} onLetterPress={handleLetterPress} />
      </ContainerItens>
      <WordList word={selectedWord} onUndo={handleUndo} onSave={handleSave} />
      <WordsItens>
        {words.map((words, index) => (
          <>
            <TextItens key={index}>{words}</TextItens>
          </>
        ))}
        <Border />
      </WordsItens>
      <View style={{ alignItems: "center" }}>
        <ContainerButton>
          <TextButton>Enviar</TextButton>
        </ContainerButton>
      </View>
    </Container>
  );
};

export default Ex4Md1;
