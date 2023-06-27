import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ContainerItens = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
`;

export const ContainerItensPalavras = styled.View`
  flex-direction: row;
  margin: 0px 0 10px 10px;
  height: 48px;
`;

export const ContainerWords = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0px 10px 0px;
`;

export const TextWords = styled.Text`
  font-size: 22px;
  color: #000000;
  font-weight: 500;
  margin-left: 10px;
`;

export const WordsItens = styled.View`
  flex: 3;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  margin-top: 5px;
`;

export const TextItens = styled.Text`
  font-size: 20px;
  color: #282828;
  font-family: "Roboto-Regular";
  flex-wrap: wrap;
  margin: 20px 0 -10px 10px;
`;

export const ButtonEnviar = styled.TouchableOpacity`
  background-color: #5DB075;
  width: 230px;
  height: 55px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ButtonEnviarCinza = styled.TouchableOpacity`
  background-color: #D9D9D9;
  width: 230px;
  height: 55px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerWord = styled.View`
  max-width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  margin: 5px;
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

export const ButtonApagar = styled.TouchableOpacity`
  background-color: #000000;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ButtonSalvar = styled.TouchableOpacity`
  background-color: #5db075;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const TextButtonAux = styled.Text`
  font-size: 20px;
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
  margin: 0 0 10px 10px;
`;
