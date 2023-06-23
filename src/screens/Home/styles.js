import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
`;

export const ContainerIteins = styled.View`
  align-items: center;
`;

export const Separador = styled.View`
  margin-top: 90px;
`;

export const ContainerButton = styled.TouchableOpacity`
  background-color: #000000;
  width: 130px;
  height: 45px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #282828;
  font-family: 'Roboto-Regular';
`;

export const TextButton = styled.Text`
  font-size: 25px;
  color: #ffffff;
  font-family: 'Roboto-Bold';
`;
