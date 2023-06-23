import React, { useState, useEffect } from "react";
import { View } from "react-native";
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
  WordsLetras,
  ButtonApagar,
} from "./styles";
import Grid from "../../../../../components/Jogos/HuntingWords/Grid";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HeaderBack from '../../../../../components/Header'

const data = [["A", "E", "I", "O", "U"]];

const Ex1Md1 = ({ navigation }) => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [undo, setUndo] = useState(false);
  const [words, setWords] = useState([]);
  const [palavras, setPalavras] = useState([]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const wordList = ["AMANDA", "ELZA", "IVONE", "ODILON", "UBALDO"];

  const saveWords = async (key, words) => {
    try {
      const serializedWords = JSON.stringify(words);
      await AsyncStorage.setItem(key, serializedWords);
      console.log("Palavras salvas com sucesso!");
    } catch (error) {
      console.log("Erro ao salvar as palavras:", error);
    }
  };

  const loadWords = async () => {
    try {
      const serializedWords = await AsyncStorage.getItem("palavrasEx1Md1");
      if (serializedWords !== null) {
        const loadedWords = JSON.parse(serializedWords);
        setWords(loadedWords);
      }
    } catch (error) {
      console.log("Erro ao carregar as palavras:", error);
    }
  };

  useEffect(() => {
    loadWords();
  }, []);

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
      const newWords = [...words, selectedWord];
      setWords(newWords);
      setSelectedLetters([]);
      saveWords("palavrasEx1Md1", newWords); // Salva as palavras atualizadas no AsyncStorage

      // Mover para a próxima palavra
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  const handleDelete = async () => {
    const newWords = words.slice(0, -1); // remove a última palavra
    setWords(newWords);
    try {
      const serializedWords = JSON.stringify(newWords);
      await AsyncStorage.setItem("palavrasEx1Md1", serializedWords);
      console.log("Palavra apagada com sucesso!");
    } catch (error) {
      console.log("Erro ao apagar a palavra:", error);
    }
  };

  const selectedWord = selectedLetters
    .map((letter) => data[letter.row][letter.col])
    .join("");

  return (
    <>
      <Container>
        <HeaderBack
          text="Exercicio 1"
          onPress={() => navigation.navigate("Modules1")}
        />
        <ContainerWords>
          <TextWords>{wordList[currentWordIndex]}</TextWords>
        </ContainerWords>
        <ContainerItens>
          <Grid data={data} onLetterPress={handleLetterPress} />
        </ContainerItens>
        <TextWords>{selectedWord}</TextWords>
        <Border />
        <ContainerButtons>
          <ButtonSalvar onPress={handleSave}>
            <TextButtonAux>Salvar</TextButtonAux>
          </ButtonSalvar>
          <ButtonExcluir onPress={handleUndo}>
            <TextButtonAux>Excluir</TextButtonAux>
          </ButtonExcluir>
        </ContainerButtons>
        <WordsItens>
          <View styles={{ flexDirection: "column" }}>
            <WordsLetras>Amanda</WordsLetras>
            <WordsLetras>Elza</WordsLetras>
            <WordsLetras>Ivone</WordsLetras>
            <WordsLetras>Odilon</WordsLetras>
            <WordsLetras>Ubaldo</WordsLetras>
          </View>
          <View style={{ flexDirection: "column" }}>
            {words.map((words, index) => (
              <>
                <TextItens key={index}>{words}</TextItens>
              </>
            ))}
          </View>
        </WordsItens>
        <View style={{ alignItems: "flex-end", marginRight: 40   }}>
          <ButtonApagar onPress={handleDelete}>
            <TextButtonAux>Apagar</TextButtonAux>
          </ButtonApagar>
        </View>
      </Container>
      {words.length < 5 ? (
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

export default Ex1Md1;
