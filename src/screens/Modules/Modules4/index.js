import React, { useState, useEffect } from "react";
import {
  Title,
  Container,
  ContainerIteins,
  ContainerExercicios,
  Separador,
  Text,
} from "./styles";
import CheckMark from "../../../assets/checkmark.js";
import DeniedCheck from "../../../assets/deniedCheck.js";
import { useIsFocused } from "@react-navigation/native";
import HeaderBack from "../../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Modules4({ navigation }) {
  const [paramsEx1Md4, setParamsEx1Md4] = useState(false);

  const isFocused = useIsFocused();

  const getParamsFromStorage = async () => {
    try {
      const storedParams = await AsyncStorage.getItem("paramsEx1Md4");

      setParamsEx1Md4(storedParams === "true");
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
        text="Modulo 4"
        onPress={() => navigation.navigate("Activites")}
      />
      <ContainerIteins>
        <Text>Exercícios</Text>
        <ContainerExercicios onPress={() => navigation.navigate("Ex1Md4")}>
          <Title>Lição 1</Title>
          <Separador />
          {paramsEx1Md4 ? <CheckMark /> : <DeniedCheck />}
        </ContainerExercicios>
      </ContainerIteins>
    </Container>
  );
}
