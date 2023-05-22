import React, { useState } from "react";
import { StyleSheet, View, PanResponder, Dimensions } from "react-native";
import Svg, { Circle, Line } from "react-native-svg";
import { Container, LetrasMaiusculas, ContainerButton } from "./styles";

const { width, height } =
  Dimensions.get("window");

const CirclePoint = ({ cx, cy }) => (
  <Circle cx={cx} cy={cy} r="10" fill="black" />
);

const CirclePoint2 = ({ cx, cy }) => (
  <Circle cx={cx} cy={cy} r="10" fill="yellow" />
);

const CirclePoint3 = ({ cx, cy }) => (
  <Circle cx={cx} cy={cy} r="10" fill="blue" />
);

const CirclePoint4 = ({ cx, cy }) => (
  <Circle cx={cx} cy={cy} r="10" fill="red" />
);

const Ex3Md1 = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [lineDrawn, setLineDrawn] = useState(false);

  const verticalCenter = height / 9;
  const startPoint = { x: 50, y: verticalCenter };
  const endPoint = { x: width - 50, y: verticalCenter };
  
  const verticalCenter2 = height / 9 + 120;
  const startPoint2 = { x: 50, y: verticalCenter2 };
  const endPoint2 = { x: width - 50, y: verticalCenter2 };

  const verticalCenter3 = height / 2;
  const startPoint3 = { x: 50, y: verticalCenter3 };
  const endPoint3 = { x: width - 50, y: verticalCenter3 };

  const verticalCenter4 = height / 2 + 120;
  const startPoint4 = { x: 50, y: verticalCenter4 };
  const endPoint4 = { x: width - 50, y: verticalCenter4 };
  
  const touchRadius = 30;

  const panResponder = PanResponder.create({
    //retorna verdadeiro para indicar que este componente deve se tornar o respondente para este evento de toque.
    onStartShouldSetPanResponder: () => true,

    //é chamado quando o toque começa. Se o toque começa perto do ponto inicial, currentPosition é definido como o ponto inicial.
    onPanResponderGrant: (event, gestureState) => {
      if (
        Math.abs(gestureState.x0 - startPoint.x) < 20 &&
        Math.abs(gestureState.y0 - startPoint.y) < 20 
      ) {
        setCurrentPosition({ x: gestureState.x0, y: gestureState.y0 });
      }
    },

    //é chamado quando o usuário move o dedo pela tela. Atualiza currentPosition para a localização atual do toque.
    onPanResponderMove: (event, gestureState) => {
      setCurrentPosition({ x: gestureState.moveX, y: gestureState.moveY });
    },

    //é chamado quando o usuário levanta o dedo da tela. Se o toque terminar perto do ponto final,
    //lineDrawn é definido como true. Caso contrário, currentPosition é resetado para null, apagando a linha temporária.
    onPanResponderRelease: (event, gestureState) => {
      if (Math.abs(gestureState.moveX - endPoint.x) < 20 && Math.abs(gestureState.moveY - endPoint.y) < 20) {
        setLineDrawn(true);
      } else {
        setCurrentPosition(null);
      }
    },
  });

  console.log(startPoint.x);
  console.log(startPoint.y);
  console.log(currentPosition);
  console.log(
    "######################################################################################"
  );
  console.log(endPoint.x);
  console.log(endPoint.y);
  
  return (
      <Container {...panResponder.panHandlers}>
        <Svg height="100%" width="100%" viewBox={`0 0 ${width} ${height}`}>
          <CirclePoint cx={startPoint.x} cy={startPoint.y} />
          <CirclePoint cx={endPoint.x} cy={endPoint.y} />
          <CirclePoint2 cx={startPoint2.x} cy={startPoint2.y} />
          <CirclePoint2 cx={endPoint2.x} cy={endPoint2.y} />
          <CirclePoint3 cx={startPoint3.x} cy={startPoint3.y} />
          <CirclePoint3 cx={endPoint3.x} cy={endPoint3.y} />
          <CirclePoint4 cx={startPoint4.x} cy={startPoint4.y} />
          <CirclePoint4 cx={endPoint4.x} cy={endPoint4.y} />

          {currentPosition && !lineDrawn && (
            <Line
              x1={startPoint.x}
              y1={startPoint.y}
              x2={currentPosition.x}
              y2={currentPosition.y}
              stroke="black"
            />
          )}

          {lineDrawn && (
            <Line
              x1={startPoint.x}
              y1={startPoint.y}
              x2={endPoint.x}
              y2={endPoint.y}
              stroke="black"
            />
          )}
        </Svg>
      </Container>
  );
};

export default Ex3Md1;
