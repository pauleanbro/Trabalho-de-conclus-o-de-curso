import * as React from "react";
import {
  Title,
  Container,
  ContainerIteins,
  ContainerButton,
  TextButton,
  Separador,
} from "./styles";

export default function Activites({ navigation }) {
  return (
    <Container>
      <ContainerIteins>
        <Title>Atividades</Title>
        <Separador />
        <ContainerButton onPress={() => navigation.navigate("Modules1")}>
          <TextButton>Módulo 1</TextButton>
        </ContainerButton>
        <ContainerButton onPress={() => navigation.navigate("Modules2")}>
          <TextButton>Módulo 2</TextButton>
        </ContainerButton>
        <ContainerButton onPress={() => navigation.navigate("Modules3")}>
          <TextButton>Módulo 3</TextButton>
        </ContainerButton>
        <ContainerButton onPress={() => navigation.navigate("Modules4")}>
          <TextButton>Módulo 4</TextButton>
        </ContainerButton>
        <ContainerButton onPress={() => navigation.navigate("Modules5")}>
          <TextButton>Módulo 5</TextButton>
        </ContainerButton>
      </ContainerIteins>
    </Container>
  );
}
