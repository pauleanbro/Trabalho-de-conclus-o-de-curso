import React, { useState, useEffect } from "react";
import {
  Title,
  Container,
  ContainerIteins,
  ContainerExercicios,
  Separeitor,
  Border,
  Text,
} from "./styles";
import CheckMark from "../../../assets/checkmark.js";
import DeniedCheck from "../../../assets/deniedCheck.js";

import AsyncStorage from "@react-native-async-storage/async-storage";

import HeaderBack from "../../../components/Header";

export default function Modules2({ navigation }) {
  const [paramsEx1Md2, setParamsEx1Md2] = useState(false);
  const [params1Ex1Md2, setParams1Ex1Md2] = useState(false);
  const [params2Ex1Md2, setParams2Ex1Md2] = useState(false);
  const [params3Ex1Md2, setParams3Ex1Md2] = useState(false);
  const [params4Ex1Md2, setParams4Ex1Md2] = useState(false);
  

  const getParamsFromStorage = async () => {
    try {
      const storedParams = await AsyncStorage.getItem("paramsEx1Md2");
      const storedParams1 = await AsyncStorage.getItem("params1Ex1Md2");
      const storedParams2 = await AsyncStorage.getItem("params2Ex2Md2");
      const storedParams3 = await AsyncStorage.getItem("params3Ex3Md2");
      const storedParams4 = await AsyncStorage.getItem("params4Ex4Md2");

      setParamsEx1Md2(storedParams === "true");
      setParams1Ex1Md2(storedParams1 === "true");
      setParams2Ex1Md2(storedParams2 === "true");
      setParams3Ex1Md2(storedParams3 === "true");
      setParams4Ex1Md2(storedParams4 === "true");
    } catch (error) {
      console.log("Erro ao obter os parâmetros do AsyncStorage:", error);
    }
  };

  useEffect(() => {
    getParamsFromStorage();
  }, []);

  console.log(params1Ex1Md2)

  return (
    <Container>
      <HeaderBack
        text="Modulo 2"
        onPress={() => navigation.navigate("Activites")}
      />
      <ContainerIteins>
        <Text>Exercícios</Text>
        <ContainerExercicios onPress={() => navigation.navigate("Ex1Md2")}>
          <Title>Lição 1</Title>
          <Separeitor />
          {paramsEx1Md2 ? <CheckMark /> : <DeniedCheck />}
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex2Md2")}>
          <Title>Lição 2</Title>
          <Separeitor />
          {params1Ex1Md2 ? <CheckMark /> : <DeniedCheck />}
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex4Md2")}>
          <Title>Lição 3</Title>
          <Separeitor />
          {params2Ex1Md2 ? <CheckMark /> : <DeniedCheck />}
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex5Md2")}>
          <Title>Lição 4</Title>
          <Separeitor />
          {params3Ex1Md2 ? <CheckMark /> : <DeniedCheck />}
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex6Md2")}>
          <Title>Lição 5</Title>
          <Separeitor />
          {params4Ex1Md2 ? <CheckMark /> : <DeniedCheck />}
        </ContainerExercicios>
        <Border />
      </ContainerIteins>
    </Container>
  );
}
