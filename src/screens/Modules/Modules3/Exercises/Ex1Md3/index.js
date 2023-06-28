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

import HeaderBack from "../../../../../components/Header";

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

  const saveData = async () => {
  try {
    await AsyncStorage.setItem(
      "selectedNamesEx1Md3",
      JSON.stringify(selectedNames)
    );
    navigation.navigate("Modules3");
  } catch (error) {
    console.log("Error saving data: ", error);
  }
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
          {selectedNames.slice(0, 3).map((name, index) => (
            <ContainerNames key={index}>
              <TextItens onPress={() => handleNameClick(index)}>
                {name}
              </TextItens>
              <Border />
            </ContainerNames>
          ))}
        </View>
        <View style={{ flexDirection: "row" }}>
          {selectedNames.slice(3, 6).map((name, index) => (
            <ContainerNames key={index + 3}>
              <TextItens onPress={() => handleNameClick(index + 3)}>
                {name}
              </TextItens>
              <Border />
            </ContainerNames>
          ))}
        </View>
        <View style={{ flexDirection: "row" }}>
          {selectedNames.slice(6, 9).map((name, index) => (
            <ContainerNames key={index + 6}>
              <TextItens onPress={() => handleNameClick(index + 6)}>
                {name}
              </TextItens>
              <Border />
            </ContainerNames>
          ))}
        </View>
        <View style={{ flexDirection: "row" }}>
          {selectedNames.slice(9, 12).map((name, index) => (
            <ContainerNames key={index + 9}>
              <TextItens onPress={() => handleNameClick(index + 9)}>
                {name}
              </TextItens>
              <Border />
            </ContainerNames>
          ))}
        </View>
      </Container>
      {selectedNames.length < 12 ? (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviarCinza>
            <TextButton>Enviar</TextButton>
          </ButtonEnviarCinza>
        </View>
      ) : (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviar onPress={() => saveData()}>
            <TextButton>Enviar</TextButton>
          </ButtonEnviar>
        </View>
      )}
    </>
  );
};

export default Ex1Md3;
