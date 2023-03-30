import * as React from "react";
import {
  Title,
  Container,
  ContainerIteins,
  ContainerExercicios,
  Check,
  Separador,
} from "./styles";
import HitCheck from "../../../assets/hitCheck.js";
import DeniedCheck from "../../../assets/deniedCheck.js";

const Hit = HitCheck;
const Denied = DeniedCheck;

export default function Modules1({ navigation }) {
  return (
    <Container>
      <ContainerIteins>
        <ContainerExercicios>
          <Title>Exercício 1</Title>
          <Hit />
          <Separador />
        </ContainerExercicios>
        <ContainerExercicios>
          <Title>Exercício 2</Title>
            <Denied />
        </ContainerExercicios>
        <ContainerExercicios>
          <Title>Exercício 3</Title>
          <Check />
        </ContainerExercicios>
        <ContainerExercicios>
          <Title>Exercício 4</Title>
          <Check />
        </ContainerExercicios>
      </ContainerIteins>
    </Container>
  );
}
