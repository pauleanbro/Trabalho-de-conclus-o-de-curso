import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ContainerItens = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const ContainerNames = styled.View`
  width: 120px;
  margin: 0px 10px 0px 0px;
  align-items: center;
`;

export const ContainerWords = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0px 10px 0px;
`;

export const TextWords = styled.Text`
  font-size: 20px;
  color: #000000;
  margin-left: 10px;
  border-bottom: 1px #000000;
`;

export const WordsItens = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const TextItens = styled.Text`
  font-size: 20px;
  color: #282828;
  font-family: "Roboto-Regular";
  font-weight: 700;
  margin: 20px 0 0px 10px;
`;

export const ButtonEnviar = styled.TouchableOpacity`
  background-color: #5db075;
  width: 230px;
  height: 55px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ButtonEnviarCinza = styled.TouchableOpacity`
  background-color: #d9d9d9;
  width: 230px;
  height: 55px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 18px;
`;

export const ButtonExcluir = styled.TouchableOpacity`
  background-color: #db675e;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ButtonSalvar = styled.TouchableOpacity`
  background-color: #5db075;
  width: 60px;
  height: 30px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ButtonApagar = styled.TouchableOpacity`
  background-color: #0099f0;
  width: 60px;
  height: 30px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const TextButtonAux = styled.Text`
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
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
