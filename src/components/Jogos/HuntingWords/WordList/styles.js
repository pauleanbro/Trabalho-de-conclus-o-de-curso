import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const TextWord = styled.Text`
  font-size: 20px;
  color: #282828;
  font-family: 'Roboto-Regular';
`;

export const TextButton = styled.Text`
  font-size: 10px;
  color: #FFFFFF;
  font-family: 'Roboto-Regular';
`;

export const ContainerButton = styled.TouchableOpacity`
  background-color: #000000;
  width: 45px;
  height: 25px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;