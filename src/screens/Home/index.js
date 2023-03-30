import * as React from "react";
import {
  Title,
  Container,
  ContainerButton,
  TextButton,
  ContainerIteins,
  Separador,
} from "./styles";

export default function Home({ navigation }) {
  return (
    <Container>
      <ContainerIteins>
        <Title>Educação de Jovens e Adultos</Title>
        <Separador />
        <ContainerButton onPress={() => navigation.navigate("Activites")}>
          <TextButton>Iniciar</TextButton>
        </ContainerButton>
      </ContainerIteins>
    </Container>
  );
}
