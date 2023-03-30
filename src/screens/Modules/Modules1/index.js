import * as React from "react";
import {
  Title,
  Container,
  ContainerIteins,
  ContainerExercicios,
  Check,
} from "./styles";

export default function Modules1({ navigation }) {
  return (
    <Container>
      <ContainerIteins>
        <ContainerExercicios>
          <Title>Exercício 1</Title>
          <Check />
        </ContainerExercicios>
        <ContainerExercicios>
          <Title>Exercício 2</Title>
          <Check />
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
