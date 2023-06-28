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

const CheckMark1 = CheckMark;
const DeniedCheck1 = DeniedCheck;

export default function Modules1({ navigation, route }) {
  const params = route?.params;
  const params2 = route?.params2;
  const params3 = route?.params3;

  console.log(params);
  console.log(params2);
  console.log(params3);

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
