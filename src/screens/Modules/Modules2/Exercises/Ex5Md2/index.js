import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import {
  Container,
  ContainerItens,
  ButtonApagar,
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
  ContainerItensPalavras,
  ContainerButtons1,
} from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderBack from "../../../../../components/Header";

const data = [
  ["P", "E", "I", "R", "D", "A", "B", "O"],
  ["O", "T", "A", "R", "O", "N", "I", "E"],
  ["O", "N", "J", "B", "O", "A", "T", "I"],
  ["D", "E", "L", "U", "A", "R", "O", "T"],
  ["R", "N", "O", "D", "I", "T", "B", "E"],
];

const wordList = ["Pedro", "Antônio", "João", "Eduardo", "Benedito"];

const Ex5Md2 = ({ navigation }) => {
  const [word, setWord] = useState([]);
  const [savedWord, setSavedWord] = useState([]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleLetterClick = (letter) => {
    setWord([...word, letter]);
  };

  const handleReset = () => {
    setWord([]);
  };

  const handleSave = async () => {
    const newWord = word.join("");
    setSavedWord([...savedWord, newWord]);
    await AsyncStorage.setItem(
      "@saved_wordEx2Md2",
      JSON.stringify([...savedWord, newWord])
    );
    handleReset();
    setCurrentWordIndex((currentWordIndex + 1) % wordList.length);
  };

  const handleDelete = async () => {
    const newSavedWords = savedWord.slice(0, -1); // remove a última palavra salva
    setSavedWord(newSavedWords);
    try {
      const serializedWords = JSON.stringify(newSavedWords);
      await AsyncStorage.setItem("@saved_wordEx2Md2", serializedWords);
      console.log("Última palavra salva apagada com sucesso!");
    } catch (error) {
      console.log("Erro ao apagar a última palavra salva:", error);
    }
  };

  useEffect(() => {
    const loadSavedWord = async () => {
      const storedWord = await AsyncStorage.getItem("@saved_wordEx2Md2");
      if (storedWord !== null) {
        setSavedWord(JSON.parse(storedWord));
      }
    };

    loadSavedWord();
  }, []);

  const handleGoBack = async () => {
    try {
      await AsyncStorage.setItem("params3Ex3Md2", "true");
      navigation.navigate("Modules2");
    } catch (error) {
      console.log("Erro ao armazenar os parâmetros no AsyncStorage:", error);
    }
  };

  return (
    <>
      <Container>
        <HeaderBack
          text="Exercicio 4"
          onPress={() => navigation.navigate("Modules2")}
        />

        <ContainerWords>
          <TextWords>{wordList[currentWordIndex]}</TextWords>
        </ContainerWords>
        <ContainerItens>
          {data[currentWordIndex].map((letter, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#D9D9D9",
                margin: 5,
                borderRadius: 5,
              }}
              onPress={() => handleLetterClick(letter)}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "#000000",
                  fontFamily: "Roboto-Bold",
                }}
              >
                {letter}
              </Text>
            </TouchableOpacity>
          ))}
        </ContainerItens>
        <ContainerItensPalavras>
          {word.map((letter, index) => (
            <View
              key={index}
              style={{
                padding: 10,
                marginRight: 5,
                borderBottomWidth: 2,
              }}
            >
              <Text style={{ fontSize: 30 }}>{letter}</Text>
            </View>
          ))}
        </ContainerItensPalavras>
        <ContainerButtons>
          <ButtonSalvar onPress={handleSave}>
            <TextButtonAux>Salvar</TextButtonAux>
          </ButtonSalvar>
          <ButtonExcluir onPress={handleReset}>
            <TextButtonAux>Excluir</TextButtonAux>
          </ButtonExcluir>
        </ContainerButtons>
        <Text style={{ fontSize: 22, marginLeft: 10, marginTop: 10 }}>
          {savedWord[0]}
        </Text>
        <Text style={{ fontSize: 22, marginLeft: 10, marginTop: 10 }}>
          {savedWord[1]}
        </Text>
        <Text style={{ fontSize: 22, marginLeft: 10, marginTop: 10 }}>
          {savedWord[2]}
        </Text>
        <Text style={{ fontSize: 22, marginLeft: 10, marginTop: 10 }}>
          {savedWord[3]}
        </Text>
        <Text style={{ fontSize: 22, marginLeft: 10, marginTop: 10 }}>
          {savedWord[4]}
        </Text>
      </Container>
      <ContainerButtons1>
        <ButtonApagar onPress={handleDelete}>
          <TextButtonAux>Apagar</TextButtonAux>
        </ButtonApagar>
      </ContainerButtons1>
      {savedWord.length < 5 ? (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviarCinza>
            <TextButton>Enviar</TextButton>
          </ButtonEnviarCinza>
        </View>
      ) : (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviar onPress={() => handleGoBack()}>
            <TextButton>Enviar</TextButton>
          </ButtonEnviar>
        </View>
      )}
    </>
  );
};

export default Ex5Md2;
