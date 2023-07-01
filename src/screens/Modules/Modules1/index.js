import React, { useState, useEffect } from "react";
import {
  Title,
  Container,
  ContainerIteins,
  ContainerExercicios,
  Check,
  Border,
  Separeitor,
  Text,
} from "./styles";
import CheckMark from "../../../assets/checkmark.js";
import DeniedCheck from "../../../assets/deniedCheck.js";

import HeaderBack from "../../../components/Header";

import AsyncStorage from '@react-native-async-storage/async-storage';

const CheckMark1 = CheckMark;
const DeniedCheck1 = DeniedCheck;

export default function Modules1({ navigation, route }) {
  const [params, setParams] = useState(false);
  const [params2, setParams2] = useState(false);
  const [params3, setParams3] = useState(false);

  console.log(params)

  const getParamsFromStorage = async () => {
    try {
      const storedParams = await AsyncStorage.getItem('params');
      const storedParams2 = await AsyncStorage.getItem('params2');
      const storedParams3 = await AsyncStorage.getItem('params3');
      
      setParams(storedParams === 'true');
      setParams2(storedParams2 === 'true');
      setParams3(storedParams3 === 'true');
    } catch (error) {
      console.log('Erro ao obter os parâmetros do AsyncStorage:', error);
    }
  };
  
  useEffect(() => {
    getParamsFromStorage();
  }, []);
  

  return (
    <Container>
      <HeaderBack
        text="Modulo 1"
        onPress={() => navigation.navigate("Activites")}
      />
      <ContainerIteins>
        <Text>Exercícios</Text> 
        <ContainerExercicios onPress={() => navigation.navigate("Ex1Md1")}>
          <Title>Lição 1</Title>
          <Separeitor />
          {params ? <CheckMark1 /> : <DeniedCheck1 />}
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex2Md1")}>
          <Title>Lição 2</Title>
          <Separeitor />
          {params2 ? <CheckMark1 /> : <DeniedCheck1 />}
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex3Md1")}>
          <Title>Lição 3</Title>
          <Separeitor />
          {params3 ? <CheckMark1 /> : <DeniedCheck1 />}
        </ContainerExercicios>
        <Border />
      </ContainerIteins>
    </Container>
  );
}
