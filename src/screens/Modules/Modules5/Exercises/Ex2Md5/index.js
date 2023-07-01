import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Title,
  Container,
  ButtonEnviar,
  TextButton,
  ButtonEnviarCinza,
} from "./styles";

import HeaderBack from "../../../../../components/Header";

const Ex2Md5 = ({ navigation }) => {
  const [selectedButtons, setSelectedButtons] = useState({});
  const buttonNumbers = [85, 87, 89, 80];
  const buttonNumbers1 = [40, 46, 49, 48];
  const buttonNumbers2 = [33, 31, 30, 35];
  const buttonNumbers3 = [91, 90, 96, 93];

  useEffect(() => {
    retrieveSelectedButtons();
  }, []);

  useEffect(() => {
    storeSelectedButtons();
  }, [selectedButtons]);

  const retrieveSelectedButtons = async () => {
    try {
      const value = await AsyncStorage.getItem("selectedButtons");
      if (value !== null) {
        setSelectedButtons(JSON.parse(value));
      }
    } catch (error) {
      console.error(
        "Error retrieving selected buttons from AsyncStorage:",
        error
      );
    }
  };

  const storeSelectedButtons = async () => {
    try {
      const value = JSON.stringify(selectedButtons);
      await AsyncStorage.setItem("selectedButtons", value);
    } catch (error) {
      console.error("Error storing selected buttons in AsyncStorage:", error);
    }
  };

  const handleButtonClick = (container, number) => {
    setSelectedButtons((prevState) => ({
      ...prevState,
      [container]: number,
    }));
  };

  const isButtonSelected = (container, number) =>
    selectedButtons[container] === number;

  const isContainerComplete = (container) => !!selectedButtons[container];

  const handleGoBack = async () => {
    try {
      await AsyncStorage.setItem("paramsEx2Md5", "true");
      navigation.navigate("Modules5");
    } catch (error) {
      console.log("Erro ao armazenar os parâmetros no AsyncStorage:", error);
    }
  };

  return (
    <>
      <HeaderBack
        text="Exercicio 2"
        onPress={() => navigation.navigate("Modules5")}
      />

      <Container>
        <Title>86</Title>
        <View style={styles.buttonContainer}>
          {buttonNumbers.map((number) => (
            <TouchableOpacity
              key={number}
              style={[
                styles.button,
                isButtonSelected("container1", number) && styles.selectedButton,
              ]}
              onPress={() => handleButtonClick("container1", number)}
              disabled={isContainerComplete("container1")}
            >
              <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
      <Container>
        <Title>47</Title>
        <View style={styles.buttonContainer}>
          {buttonNumbers1.map((number) => (
            <TouchableOpacity
              key={number}
              style={[
                styles.button,
                isButtonSelected("container2", number) && styles.selectedButton,
              ]}
              onPress={() => handleButtonClick("container2", number)}
              disabled={isContainerComplete("container2")}
            >
              <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
      <Container>
        <Title>32</Title>
        <View style={styles.buttonContainer}>
          {buttonNumbers2.map((number) => (
            <TouchableOpacity
              key={number}
              style={[
                styles.button,
                isButtonSelected("container3", number) && styles.selectedButton,
              ]}
              onPress={() => handleButtonClick("container3", number)}
              disabled={isContainerComplete("container3")}
            >
              <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
      <Container>
        <Title>95</Title>
        <View style={styles.buttonContainer}>
          {buttonNumbers3.map((number) => (
            <TouchableOpacity
              key={number}
              style={[
                styles.button,
                isButtonSelected("container4", number) && styles.selectedButton,
              ]}
              onPress={() => handleButtonClick("container4", number)}
              disabled={isContainerComplete("container4")}
            >
              <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
      {Object.keys(selectedButtons).length === 4 ? (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviar onPress={() => handleGoBack()}>
            <TextButton>Enviar</TextButton>
          </ButtonEnviar>
        </View>
      ) : (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviarCinza>
            <TextButton>Enviar</TextButton>
          </ButtonEnviarCinza>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  selectedButton: {
    backgroundColor: "green",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

export default Ex2Md5;
