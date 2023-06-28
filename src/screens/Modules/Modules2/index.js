import * as React from "react";
import {
  Title,
  Container,
  ContainerIteins,
  ContainerExercicios,
  Check,
  Border,
  Text,
} from "./styles";
import HitCheck from "../../../assets/hitCheck.js";
import DeniedCheck from "../../../assets/deniedCheck.js";

import HeaderBack from "../../../components/Header"

const Hit = HitCheck;
const Denied = DeniedCheck;

export default function Modules2({ navigation }) {
  return (
    <Container>
      <HeaderBack text="Modulo 2" onPress={() => navigation.navigate("Activites")} />
      <ContainerIteins>
        <Text>Exercícios</Text>
        <ContainerExercicios onPress={() => navigation.navigate("Ex1Md2")}>
          <Title>Lição 1</Title>
          <Check />
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex2Md2")}>
          <Title>Lição 2</Title>
          <Check />
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex4Md2")}>
          <Title>Lição 3</Title>
          <Check />
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex5Md2")}>
          <Title>Lição 4</Title>
          <Check />
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex6Md2")}>
          <Title>Lição 5</Title>
          <Check />
        </ContainerExercicios>
        <Border />
      </ContainerIteins>
    </Container>
  );
}
