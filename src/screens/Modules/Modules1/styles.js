import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ContainerIteins = styled.View`
  padding-horizontal: 24px;
  padding-top: 36px;
`;

export const ContainerExercicios = styled.View`
  flex-direction: row;
  margin-bottom: 50px;
  justify-content: space-between;
`;

export const Check = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border: solid 4px #000000;
  border-radius: 5px;
  margin-right: 30px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #282828;
`;
