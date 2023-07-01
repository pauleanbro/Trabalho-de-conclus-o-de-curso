import React, { useState, useEffect } from "react";
import {
  Title,
  Container,
  ContainerIteins,
  ContainerExercicios,
  Separador,
  Border,
  Text,
} from "./styles";
import CheckMark from "../../../assets/checkmark.js";
import DeniedCheck from "../../../assets/deniedCheck.js";
import { useIsFocused } from "@react-navigation/native";
import HeaderBack from "../../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Modules3({ navigation }) {
  const [paramsEx1Md3, setParamsEx1Md3] = useState(false);
  const [paramsEx2Md3, setParamsEx2Md3] = useState(false);
  const [paramsEx3Md3, setParamsEx3Md3] = useState(false);

  const isFocused = useIsFocused();

  const getParamsFromStorage = async () => {
    try {
      const storedParams = await AsyncStorage.getItem("paramsEx1Md3");
      const storedParams2 = await AsyncStorage.getItem("paramsEx2Md3");
      const storedParams3 = await AsyncStorage.getItem("paramsEx3Md3");

      setParamsEx1Md3(storedParams === "true");
      setParamsEx2Md3(storedParams2 === "true");
      setParamsEx3Md3(storedParams3 === "true");
    } catch (error) {
      console.log("Erro ao obter os parâmetros do AsyncStorage:", error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getParamsFromStorage();
    }
  }, [isFocused]);

  return (
    <Container>
      <HeaderBack
        text="Modulo 3"
        onPress={() => navigation.navigate("Activites")}
      />
      <ContainerIteins>
        <Text>Exercícios</Text>
        <ContainerExercicios onPress={() => navigation.navigate("Ex1Md3")}>
          <Title>Lição 1</Title>
          <Separador />
          {paramsEx1Md3 ? <CheckMark /> : <DeniedCheck />}
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex3Md3")}>
          <Title>Lição 2</Title>
          <Separador />
          {paramsEx2Md3 ? <CheckMark /> : <DeniedCheck />}
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex5Md3")}>
          <Title>Lição 3</Title>
          <Separador />
          {paramsEx3Md3 ? <CheckMark /> : <DeniedCheck />}
        </ContainerExercicios>
        <Border />
      </ContainerIteins>
    </Container>
  );
}
