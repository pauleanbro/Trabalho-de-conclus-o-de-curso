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
  ButtonApagar,
} from "./styles";
import Grid from "../../../../../components/Jogos/HuntingWords/Grid";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HeaderBack from "../../../../../components/Header";

const data = [
  ["RA", "RE", "RI", "RO", "RU"],
  ["TA", "TE", "TI", "TO", "TU"],
  ["NA", "NE", "NI", "NO", "NU"],
];

const Ex4Md2 = ({ navigation }) => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [undo, setUndo] = useState(false);
  const [words, setWords] = useState([]);

  const [palavras, setPalavras] = useState([]);

  const saveWords = async (words) => {
    try {
      const serializedWords = JSON.stringify(words);
      await AsyncStorage.setItem("palavras", serializedWords);
      console.log("Palavras salvas com sucesso!");
    } catch (error) {
      console.log("Erro ao salvar as palavras:", error);
    }
  };

  useEffect(() => {
    const loadWords = async () => {
      try {
        const serializedWords = await AsyncStorage.getItem("palavras");
        if (serializedWords !== null) {
          const loadedWords = JSON.parse(serializedWords);
          setWords(loadedWords);
        }
      } catch (error) {
        console.log("Erro ao carregar as palavras:", error);
      }
    };

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
      saveWords(newWords, "Ex4Md2"); // Salva as palavras atualizadas no AsyncStorage
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
      <HeaderBack
        text="Exercicio 4"
        onPress={() => navigation.navigate("Modules2")}
      />
      <Container>
        <ContainerWords>
          <TextWords>Escreva 4 palavras com as letras a baixo:</TextWords>
        </ContainerWords>
        <ContainerItens>
          <Grid data={data} onLetterPress={handleLetterPress} />
        </ContainerItens>
        <ContainerButtons>
          <ButtonSalvar onPress={handleSave}>
            <TextButtonAux>Salvar</TextButtonAux>
          </ButtonSalvar>
          <ButtonExcluir onPress={handleUndo}>
            <TextButtonAux>Excluir</TextButtonAux>
          </ButtonExcluir>
        </ContainerButtons>
        <TextWords>{selectedWord}</TextWords>
        <Border />
        <WordsItens>
          {words.map((words, index) => (
            <>
              <TextItens key={index}>{words}</TextItens>
            </>
          ))}
        </WordsItens>
        <View style={{ alignItems: "flex-end", marginRight: 45 }}>
          <ButtonApagar onPress={handleDelete}>
            <TextButtonAux>Apagar</TextButtonAux>
          </ButtonApagar>
        </View>
      </Container>
      {words.length < 4 ? (
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

export default Ex4Md2;
