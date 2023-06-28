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
import CheckMark from "../../../assets/checkmark.js";

import HeaderBack from "../../../components/Header";

const Hit = HitCheck;
const Denied = CheckMark;

export default function Modules1({ navigation }) {
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
          {parms1 ? <Check /> : <Denied />}
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex2Md1")}>
          <Title>Lição 2</Title>
          <Check />
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex3Md1")}>
          <Title>Lição 3</Title>
          <Check />
        </ContainerExercicios>
        <Border />
      </ContainerIteins>
    </Container>
  );
}
