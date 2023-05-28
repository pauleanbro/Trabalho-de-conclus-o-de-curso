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

export default function Modules4({ navigation }) {
  return (
    <Container>
      <ContainerIteins>
        <Text>Exercícios</Text>
        <ContainerExercicios onPress={() => navigation.navigate("Ex1Md4")}>
          <Title>Lição 1</Title>
          <Hit />
        </ContainerExercicios>
      </ContainerIteins>
    </Container>
  );
}
