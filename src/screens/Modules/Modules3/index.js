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

import HeaderBack from "../../../components/Header";

const Hit = HitCheck;
const Denied = DeniedCheck;

export default function Modules3({ navigation }) {
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
          <Check />
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex2Md3")}>
          <Title>Lição 2</Title>
          <Check />
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex3Md3")}>
          <Title>Lição 3</Title>
          <Check />
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex5Md3")}>
          <Title>Lição 4</Title>
          <Check />
        </ContainerExercicios>
        <Border />
      </ContainerIteins>
    </Container>
  );
}
