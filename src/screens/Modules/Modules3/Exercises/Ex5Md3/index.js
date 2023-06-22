import React, { useState } from "react";
import { View } from "react-native";
import {
  Title,
  Container,
  ButtonColorVermelho,
  ButtonColorAmarelo,
  ButtonColorAzul,
  Palavras,
  ColorBox,
  ButtonColorLaranja,
  ButtonColorRoxo,
  ButtonColorVerde,
} from "./styles";

export default function Ex5Md3({ navigation }) {
  const [colors, setColors] = useState({
    verde: null,
    laranja: null,
    roxo: null,
  });

  const [selectedColors, setSelectedColors] = useState([]);
  const [colorPairs, setColorPairs] = useState([]);

  console.log(selectedColors, '         aqui tem coisa          ', colorPairs);

  const generateColor = () => {
    const updatedColors = { ...colors };

    colorPairs.forEach((pair) => {
      const [color1, color2] = pair.map((color) => color.toLowerCase());

      if (color1 === "vermelho" && color2 === "amarelo") {
        updatedColors.laranja = "laranja";
      } else if (color1 === "azul" && color2 === "vermelho") {
        updatedColors.roxo = "roxo";
      } else if (color1 === "amarelo" && color2 === "azul") {
        updatedColors.verde = "verde";
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

    if (selectedColors.length === 1) {
      setColorPairs((prevColorPairs) => [...prevColorPairs, [selectedColors[0], color]]);
      setSelectedColors([]);
    }

    generateColor();
  };

  return (
    <Container>
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
      <View>
        {colorPairs.map((pair, index) => {
          const [color1, color2] = pair;

          return (
            <View
              style={{
                justifyContent: "space-around",
                alignItems: "flex-start",
                marginTop: 20,
                marginLeft: 40,
              }}
              key={index}
            >
              {color1 === "vermelho" && color2 === "azul" && (
                <ButtonColorRoxo />
              )}
              {color1 === "vermelho" && color2 === "amarelo" && (
                <ButtonColorLaranja />
              )}
              {color1 === "azul" && color2 === "amarelo" && (
                <ButtonColorVerde />
              )}
            </View>
          );
        })}
      </View>
    </Container>
  );
}
