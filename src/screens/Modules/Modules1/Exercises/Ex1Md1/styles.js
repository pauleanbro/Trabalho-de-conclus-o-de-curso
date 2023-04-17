import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: space-around;
`;

export const ContainerItens = styled.View`
  align-items: center;
`;

export const ContainerWords = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TextWords = styled.Text`
  font-size: 20px;
  color: #000000;
`;

export const WordsItens = styled.View`
  flex-direction: row;
  align-items: center;
`;


export const TextItens = styled.Text`
  font-size: 20px;
  color: #282828;
  font-family: 'Roboto-Regular';
  flex-wrap: wrap;
  margin: 20px 0 -10px 10px;
`;

export const ContainerButton = styled.TouchableOpacity`
  background-color: #5DB075;
  width: 230px;
  height: 55px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const TextButton = styled.Text`
  font-size: 25px;
  color: #ffffff;
`;

export const Border = styled.View`
  width: 94%;
  height: 1.5px;
  background-color: #000000;
  margin: 0 0 0 10px;
`;