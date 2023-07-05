import React, { useState, useEffect } from "react";
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
  TextColors,
  ContainerColors,
} from "./styles";

import HeaderBack from "../../../../../components/Header";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Ex5Md3({ navigation }) {
  const [selectedColors, setSelectedColors] = useState([]);
  const [colorPairs, setColorPairs] = useState([]);

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

      saveColorPairs();
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

  const saveColorPairs = async () => {
    try {
      await AsyncStorage.setItem("colorPairs", JSON.stringify(colorPairs));
      console.log("Color pairs saved successfully.");
    } catch (error) {
      console.log("Error saving color pairs:", error);
    }
  };

  const loadColorPairs = async () => {
    try {
      const savedColorPairs = await AsyncStorage.getItem("colorPairs");
      if (savedColorPairs) {
        setColorPairs(JSON.parse(savedColorPairs));
        console.log("Color pairs loaded successfully.", savedColorPairs);
      }
    } catch (error) {
      console.log("Error loading color pairs:", error);
    }
  };

  useEffect(() => {
    loadColorPairs();
  }, []);

  useEffect(() => {
    saveColorPairs();
  }, [colorPairs]);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("paramsEx3Md3", "true");
      navigation.navigate("Modules3");
    } catch (error) {
      console.log("Error saving data: ", error);
    }
  };

  return (
    <>
      <Container>
        <HeaderBack
          text="Exercicio 3"
          onPress={() => navigation.navigate("Modules3")}
        />

        <Title>Crie cores:</Title>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <ContainerColors>
            <TextColors>Vermelho</TextColors>
            <ButtonColorVermelho
              selected={selectedColors.includes("vermelho")}
              onPress={() => handleColorPress("vermelho")}
            />
          </ContainerColors>
          <ContainerColors>
            <TextColors>Azul</TextColors>
            <ButtonColorAmarelo
              selected={selectedColors.includes("azul")}
              onPress={() => handleColorPress("azul")}
            />
          </ContainerColors>
          <ContainerColors>
            <TextColors>Amarelo</TextColors>
            <ButtonColorAzul
              selected={selectedColors.includes("amarelo")}
              onPress={() => handleColorPress("amarelo")}
            />
          </ContainerColors>
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
              {color === "laranja" && (
                <ContainerColors>
                  <TextColors>Laranja</TextColors>
                  <ButtonColorRoxo />
                </ContainerColors>
              )}
              {color === "roxo" && (
                <ContainerColors>
                  <TextColors>Roxo</TextColors>
                  <ButtonColorLaranja />
                </ContainerColors>
              )}

              {color === "verde" && (
                <ContainerColors>
                  <TextColors>Verde</TextColors>
                  <ButtonColorVerde />
                </ContainerColors>
              )}
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
          <ButtonEnviar onPress={() => saveData()}>
            <TextButton>Enviar</TextButton>
          </ButtonEnviar>
        </View>
      )}
    </>
  );
}
