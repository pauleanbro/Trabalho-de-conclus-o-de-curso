import React, { useState } from "react";
import { View } from "react-native";
import {
  Title,
  Container,
  ButtonColorVermelho,
  ButtonColorAmarelo,
  ButtonColorAzul,
  ButtonEnviar,
  ButtonEnviarCinza,
  ButtonColorLaranja,
  ButtonColorRoxo,
  ButtonColorVerde,
  TextButton,
} from "./styles";

import HeaderBack from "../../../../../components/Header";

export default function Ex5Md3({ navigation }) {
  const [colors, setColors] = useState({
    verde: null,
    laranja: null,
    roxo: null,
  });

  const [selectedColors, setSelectedColors] = useState([]);
  const [colorPairs, setColorPairs] = useState([]);

  console.log(selectedColors, "         aqui tem coisa          ", colorPairs);

  const generateColor = () => {
    const updatedColors = { ...colors };

    colorPairs.forEach((pair) => {
      const [color1, color2] = pair.map((color) => color.toLowerCase());

      if (color1 === "vermelho" && color2 === "amarelo") {
        updatedColors.laranja = "laranja";
      } else if (color1 === "amarelo" && color2 === "vermelho") {
        updatedColors.roxo = "laranja";
      } else if (color1 === "amarelo" && color2 === "azul") {
        updatedColors.verde = "verde";
      } else if (color1 === "azul" && color2 === "amarelo") {
        updatedColors.verde = "verde";
      } else if (color1 === "vermelho" && color2 === "azul") {
        updatedColors.verde = "roxo";
      } else if (color1 === "azul" && color2 === "vermelho") {
        updatedColors.verde = "roxo";
      }
    });

    setColors(updatedColors);
  };

  const handleColorPress = (color) => {
    setSelectedColors((prevSelectedColors) => {
      if (prevSelectedColors.includes(color)) {
        return prevSelectedColors.filter((c) => c !== color);
      } else {
        return [...prevSelectedColors, color];
      }
    });

    if (selectedColors.length === 1 && isPrimaryColor(color)) {
      const primaryColor1 = selectedColors[0];
      const primaryColor2 = color;
      const resultColor = mixColors(primaryColor1, primaryColor2);

      // Verificar se a cor já existe em colorPairs
      if (!colorPairs.includes(resultColor)) {
        setColorPairs((prevColorPairs) => [...prevColorPairs, resultColor]);
      }

      setSelectedColors([]);
    }
  };

  const isPrimaryColor = (color) => {
    return color === "vermelho" || color === "amarelo" || color === "azul";
  };

  const mixColors = (color1, color2) => {
    if (color1 === "vermelho" && color2 === "amarelo") {
      return "laranja";
    } else if (color1 === "amarelo" && color2 === "vermelho") {
      return "laranja";
    } else if (color1 === "azul" && color2 === "vermelho") {
      return "roxo";
    } else if (color1 === "vermelho" && color2 === "azul") {
      return "roxo";
    } else if (color1 === "amarelo" && color2 === "azul") {
      return "verde";
    } else if (color1 === "azul" && color2 === "amarelo") {
      return "verde";
    }
  };

  return (
    <>
      <Container>
        <HeaderBack
          text="Exercicio 4"
          onPress={() => navigation.navigate("Modules3")}
        />

        <Title>Crie Cores:</Title>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <ButtonColorVermelho
            selected={selectedColors.includes("vermelho")}
            onPress={() => handleColorPress("vermelho")}
          />
          <ButtonColorAmarelo
            selected={selectedColors.includes("amarelo")}
            onPress={() => handleColorPress("azul")}
          />
          <ButtonColorAzul
            selected={selectedColors.includes("azul")}
            onPress={() => handleColorPress("amarelo")}
          />
        </View>
        <Title>Cores Criadas:</Title>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {colorPairs.map((color, index) => (
            <View
              style={{
                marginTop: 20,
              }}
              key={index}
            >
              {color === "laranja" && <ButtonColorRoxo />}
              {color === "roxo" && <ButtonColorLaranja />}
              {color === "verde" && <ButtonColorVerde />}
            </View>
          ))}
        </View>
      </Container>
      {colorPairs.length < 3 ? (
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            justifyContent: "flex-end",
          }}
        >
          <ButtonEnviarCinza>
            <TextButton>Enviar</TextButton>
          </ButtonEnviarCinza>
        </View>
      ) : (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviar onPress={() => navigation.navigate("Modules3")}>
            <TextButton>Enviar</TextButton>
          </ButtonEnviar>
        </View>
      )}
    </>
  );
}
