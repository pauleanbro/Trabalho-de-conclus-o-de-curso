import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
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
  ContainerItensPalavras,
} from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [["FA", "DE", "DI", "GA", "CA"]];

const Ex1Md2 = ({ navigation }) => {
  const [word, setWord] = useState([]);
  const [savedWord, setSavedWord] = useState("");

  const handleLetterClick = (letter) => {
    setWord([...word, letter]);
  };

  const handleReset = () => {
    setWord([]);
  };

  const handleSave = async () => {
    const newWord = word.join(" ");
    console.log(`Palavra Salva: ${newWord}`);
    setSavedWord(newWord);
    await AsyncStorage.setItem("@saved_word", newWord); // Salva a palavra no AsyncStorage
    handleReset();
  };

  useEffect(() => {
    const loadSavedWord = async () => {
      const storedWord = await AsyncStorage.getItem("@saved_word");
      if (storedWord !== null) {
        setSavedWord(storedWord);
      }
    };

    loadSavedWord();
  }, []);

  return (
    <>
      <Container>
        <ContainerWords>
          <TextWords>Fadiga</TextWords>
        </ContainerWords>
        <ContainerItens>
          {data[0].map((letter, index) => (
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
        <ContainerButtons>
          <ButtonSalvar onPress={handleSave}>
            <TextButtonAux>Salvar</TextButtonAux>
          </ButtonSalvar>
          <ButtonExcluir onPress={handleReset}>
            <TextButtonAux>Excluir</TextButtonAux>
          </ButtonExcluir>
        </ContainerButtons>
        <Text style={{ fontSize: 24, marginTop: 20, marginLeft: 10 }}>
          {savedWord}
        </Text>
        <Border />
      </Container>
      {word === true ? (
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
