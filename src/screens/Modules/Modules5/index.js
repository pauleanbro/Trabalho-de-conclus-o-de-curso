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


export default function Modules5({ navigation }) {

  const [paramsEx1Md5, setParamsEx1Md5] = useState(false);
  const [paramsEx2Md5, setParamsEx2Md5] = useState(false);
  const [paramsEx3Md5, setParamsEx3Md5] = useState(false);

  const isFocused = useIsFocused();

  const getParamsFromStorage = async () => {
    try {
      const storedParams = await AsyncStorage.getItem("paramsEx1Md5");
      const storedParams1 = await AsyncStorage.getItem("paramsEx2Md5");
      const storedParams2 = await AsyncStorage.getItem("paramsEx3Md5");

      setParamsEx1Md5(storedParams === "true");
      setParamsEx2Md5(storedParams1 === "true");
      setParamsEx3Md5(storedParams2 === "true");
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
      <HeaderBack text="Modulo 5" onPress={() => navigation.navigate("Activites")} />
      <ContainerIteins>
        <Text>Exercícios</Text>
        <ContainerExercicios onPress={() => navigation.navigate("Ex1Md5")}>
          <Title>Lição 1</Title>
          <Separador />
          {paramsEx1Md5 ? <CheckMark /> : <DeniedCheck />}        
          </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex2Md5")}>
          <Title>Lição 2</Title>
          <Separador />
          {paramsEx2Md5 ? <CheckMark /> : <DeniedCheck />}
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex3Md5")}>
          <Title>Lição 3</Title>
          <Separador />
          {paramsEx3Md5 ? <CheckMark /> : <DeniedCheck />}
        </ContainerExercicios>
        <Border />
      </ContainerIteins>
    </Container>
  );
}
