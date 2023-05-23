import React from "react";
import { View, Text } from "react-native";
import {
  Container,
  TextWord,
  ContainerButton,
  TextButton,
  ContainerApagar,
} from "./styles";

const WordList = ({ word, onUndo, onSave }) => {
  return (
    <Container>
      <ContainerApagar>
        <ContainerButton onPress={onSave}>
          <TextButton>Salvar</TextButton>
        </ContainerButton>
        <ContainerButton onPress={onUndo}>
          <TextButton>Apagar</TextButton>
        </ContainerButton>
      </ContainerApagar>
    </Container>
  );
};

export default WordList;
