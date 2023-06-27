import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  Container,
  ContainerItens,
  TextItens,
  WordsItens,
  ContainerWords,
  TextWords,
  ButtonEnviar,
  TextButton,
  Border,
  ButtonExcluir,
  ButtonSalvar,
  TextButtonAux,
  ContainerButtons,
  ButtonEnviarCinza,
  ButtonApagar,
  ContainerNames,
} from "./styles";
import Grid from "../../../../../components/Jogos/NamesChoices";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HeaderBack from '../../../../../components/Header'

const data = [
  ["Dezembro", "Fevereiro", "Março", "Janeiro"],
  ["Abril", "Julho", "Agosto", "Maio"],
  ["Setembro", "Novembro", "Outubro", "Junho"],
];

const Ex1Md3 = ({ navigation }) => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [undo, setUndo] = useState(false);
  const [selectedNames, setSelectedNames] = useState([]);

  const handleLetterPress = (row, col) => {
    const name = data[row][col];
    setSelectedLetters([...selectedLetters, { row, col }]);
    setSelectedNames([...selectedNames, name]);
    setUndo(false);
  };

  console.log(selectedNames);

  const handleUndo = () => {
    const lastSelected = selectedLetters[selectedLetters.length - 1];
    const name = data[lastSelected.row][lastSelected.col];
    setSelectedLetters(selectedLetters.slice(0, -1));
    setSelectedNames(
      selectedNames.filter((selectedName) => selectedName !== name)
    );
    setUndo(true);
  };

  const selectedWord = selectedLetters
    .map((letter) => data[letter.row][letter.col])
    .join("\n");

  const handleNameClick = (index) => {
    // Lógica para mostrar o nome selecionado embaixo da borda correspondente
  };

  return (
    <>
      <HeaderBack
        text="Exercicio 1"
        onPress={() => navigation.navigate("Modules3")}
      />

      <Container>
        <ContainerWords>
          <TextWords>Escolha nomes correspondentes:</TextWords>
        </ContainerWords>
        <ContainerItens>
          <Grid data={data} onLetterPress={handleLetterPress} />
        </ContainerItens>
        <ContainerButtons>
          <ButtonExcluir onPress={handleUndo}>
            <TextButtonAux>Excluir</TextButtonAux>
          </ButtonExcluir>
        </ContainerButtons>
        <View style={{ flexDirection: "row" }}>
          <ContainerNames>
            <TextItens onPress={() => handleNameClick(0)}>
              {selectedNames[0]}
            </TextItens>
            <Border />
          </ContainerNames>
          <ContainerNames>
            <TextItens onPress={() => handleNameClick(0)}>
              {selectedNames[1]}
            </TextItens>
            <Border />
          </ContainerNames>
          <ContainerNames>
            <TextItens onPress={() => handleNameClick(0)}>
              {selectedNames[2]}
            </TextItens>
            <Border />
          </ContainerNames>
        </View>
        <View style={{ flexDirection: "row" }}>
          <ContainerNames>
            <TextItens onPress={() => handleNameClick(0)}>
              {selectedNames[3]}
            </TextItens>
            <Border />
          </ContainerNames>
          <ContainerNames>
            <TextItens onPress={() => handleNameClick(0)}>
              {selectedNames[4]}
            </TextItens>
            <Border />
          </ContainerNames>
          <ContainerNames>
            <TextItens onPress={() => handleNameClick(0)}>
              {selectedNames[5]}
            </TextItens>
            <Border />
          </ContainerNames>
        </View>
        <View style={{ flexDirection: "row" }}>
          <ContainerNames>
            <TextItens onPress={() => handleNameClick(0)}>
              {selectedNames[6]}
            </TextItens>
            <Border />
          </ContainerNames>
          <ContainerNames>
            <TextItens onPress={() => handleNameClick(0)}>
              {selectedNames[7]}
            </TextItens>
            <Border />
          </ContainerNames>
          <ContainerNames>
            <TextItens onPress={() => handleNameClick(0)}>
              {selectedNames[8]}
            </TextItens>
            <Border />
          </ContainerNames>
        </View>
        <View style={{ flexDirection: "row" }}>
          <ContainerNames>
            <TextItens onPress={() => handleNameClick(0)}>
              {selectedNames[9]}
            </TextItens>
            <Border />
          </ContainerNames>
          <ContainerNames>
            <TextItens onPress={() => handleNameClick(0)}>
              {selectedNames[10]}
            </TextItens>
            <Border />
          </ContainerNames>
          <ContainerNames>
            <TextItens onPress={() => handleNameClick(0)}>
              {selectedNames[11]}
            </TextItens>
            <Border />
          </ContainerNames>
        </View>
      </Container>
      {selectedNames.length < 11 ? (
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
    </>
  );
};

export default Ex1Md3;
