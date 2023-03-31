import React from "react";
import { View, Text } from "react-native";
import { Container, TextWord, ContainerButton, TextButton } from "./styles";

const WordList = ({ word, onUndo, onSave }) => {
  return (
    <Container>
      <TextWord style={{ margin: 5 }}>{word}</TextWord>
      <ContainerButton onPress={onUndo}>
        <TextButton>Apagar</TextButton>
      </ContainerButton>
      <ContainerButton onPress={onSave}>
        <TextButton>Salvar</TextButton>
      </ContainerButton>
    </Container>
  );
};

export default WordList;
