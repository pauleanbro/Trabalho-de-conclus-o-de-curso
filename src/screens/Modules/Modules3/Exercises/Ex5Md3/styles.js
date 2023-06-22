import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #282828;
  font-family: 'Roboto-Medium';
  text-align: center;
  margin: 10px 0px 40px 0px;
`;

export const ButtonColorVermelho = styled.TouchableOpacity`
  background-color: #FF0100;
  width: 55px;
  height: 55px;
`;

export const ButtonColorAzul = styled.TouchableOpacity`
  background-color: #FFFF00;
  width: 55px;
  height: 55px;
`;

export const ButtonColorAmarelo = styled.TouchableOpacity`
  background-color: #001162;
  width: 55px;
  height: 55px;
`;

export const Palavras = styled.Text`
  font-size: 22px;
  color: #282828;
  font-family: 'Roboto-Medium';
  margin: 20px 0px 20px 20px;
`;

export const ColorBox = styled.View`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.color || "transparent"};
`;

export const ButtonColorLaranja = styled.View`
  background-color: #7122AC;
  width: 55px;
  height: 55px;
`;

export const ButtonColorRoxo = styled.View`
  background-color: #FF9B00;
  width: 55px;
  height: 55px;
`;

export const ButtonColorVerde = styled.View`
  background-color: #00A301;
  width: 55px;
  height: 55px;
`;

