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
} from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderBack from "../../../../../components/Header";

const data = [
  ["FA", "DE", "DI", "GA", "CA"],
  ["CA", "MI", "LA", "BO", "NHO"],
  ["SI", "TI", "BA", "RE", "NA"],
  ["RU", "DRA", "PE", "DO", "PI"],
  ["TI", "NHA", "PI", "QUI"],
  ["VI", "JU", "QUE", "DA", "FE"],
];

const wordList = ["Fadiga", "Caminho", "Retina", "Pedra", "Tinha", "Vida"];

const Ex1Md2 = ({ navigation }) => {
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
      "@saved_word",
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
      await AsyncStorage.setItem("@saved_word", serializedWords);
      console.log("Última palavra salva apagada com sucesso!");
    } catch (error) {
      console.log("Erro ao apagar a última palavra salva:", error);
    }
  };

  useEffect(() => {
    const loadSavedWord = async () => {
      const storedWord = await AsyncStorage.getItem("@saved_word");
      if (storedWord !== null) {
        setSavedWord(JSON.parse(storedWord));
      }
    };

    loadSavedWord();
  }, []);

  console.log(savedWord);

  return (
    <>
      <Container>
        <HeaderBack
          text="Exercicio 1"
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
                backgroundColor: "#D9D9D9",
                padding: 10,
                margin: 5,
                borderRadius: 5,
              }}
              onPress={() => handleLetterClick(letter)}
            >
              <Text style={{ fontSize: 20 }}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </ContainerItens>
        <ContainerItensPalavras>
          {word.map((letter, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "#D9D9D9",
                padding: 10,
                marginRight: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 20 }}>{letter}</Text>
            </View>
          ))}
        </ContainerItensPalavras>
        <Border />
        <ContainerButtons>
          <ButtonSalvar onPress={handleSave}>
            <TextButtonAux>Salvar</TextButtonAux>
          </ButtonSalvar>
          <ButtonExcluir onPress={handleReset}>
            <TextButtonAux>Excluir</TextButtonAux>
          </ButtonExcluir>
        </ContainerButtons>
        {savedWord.map((word, index) => (
          <View>
            <Text
              key={index}
              style={{ fontSize: 24, marginLeft: 10, marginTop: 10 }}
            >
              {word}
            </Text>
          </View>
        ))}
      </Container>
      <View style={{ alignItems: "flex-end", marginRight: 40, backgroundColor: '#FFFFFF' }}>
        <ButtonApagar onPress={handleDelete}>
          <TextButtonAux>Apagar</TextButtonAux>
        </ButtonApagar>
      </View>
      {savedWord.length < 6 ? (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviarCinza>
            <TextButton>Enviar</TextButton>
          </ButtonEnviarCinza>
        </View>
      ) : (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviar onPress={() => navigation.navigate("Modules2")}>
            <TextButton>Enviar</TextButton>
          </ButtonEnviar>
        </View>
      )}
    </>
  );
};

export default Ex1Md2;
