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

const Hit = HitCheck;
const Denied = DeniedCheck;

export default function Modules5({ navigation }) {
  return (
    <Container>
      <ContainerIteins>
        <Text>Exercícios</Text>
        <ContainerExercicios onPress={() => navigation.navigate("Ex1Md5")}>
          <Title>Lição 1</Title>
          <Hit />
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex2Md5")}>
          <Title>Lição 2</Title>
            <Denied />
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex3Md5")}>
          <Title>Lição 3</Title>
          <Check />
        </ContainerExercicios>
        <Border />
      </ContainerIteins>
    </Container>
  );
}
