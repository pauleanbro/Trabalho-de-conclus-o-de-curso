import React, { useState } from "react";
import {
  Dimensions,
  PanResponder,
  Button,
  View,
  StyleSheet,
} from "react-native";
import Svg, { Circle, Line } from "react-native-svg";
import { Container, ContainerButton, TextButton } from "./styles";

const window = Dimensions.get("window");

const Ex6Md2 = () => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(null);

  const dots = [
    { x: 50, y: window.height / 5, color: "blue" },
    { x: 50, y: (window.height / 5) * 2, color: "black" },
    { x: 50, y: (window.height / 5) * 3, color: "red" },
    { x: 50, y: (window.height / 5) * 4, color: "yellow" },
    { x: window.width - 50, y: window.height / 5, color: "blue" },
    { x: window.width - 50, y: (window.height / 5) * 2, color: "black" },
    { x: window.width - 50, y: (window.height / 5) * 3, color: "red" },
    { x: window.width - 50, y: (window.height / 5) * 4, color: "yellow" },
  ];

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt, gestureState) => {
      dots.forEach((dot, index) => {
        if (
          Math.abs(gestureState.x0 - dot.x) < 30 &&
          Math.abs(gestureState.y0 - dot.y) < 30 &&
          dot.x === 50
        ) {
          setCurrentLine({
            start: { x: dot.x, y: dot.y, color: dot.color },
            end: { x: dot.x, y: dot.y, color: dot.color },
          });
        }
      });
    },
    onPanResponderMove: (evt, gestureState) => {
      if (currentLine) {
        setCurrentLine({
          ...currentLine,
          end: { x: gestureState.moveX, y: gestureState.moveY },
        });
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (currentLine) {
        dots.forEach((dot, index) => {
          if (
            Math.abs(gestureState.moveX - dot.x) < 30 &&
            Math.abs(gestureState.moveY - dot.y) < 30 &&
            dot.x === window.width - 50 &&
            dot.color === currentLine.start.color
          ) {
            setLines([
              ...lines,
              {
                ...currentLine,
                end: { x: dot.x, y: dot.y, color: dot.color },
              },
            ]);
            setCurrentLine(null);
          }
        });
      }
      if (currentLine && !lines.includes(currentLine)) {
        setCurrentLine(null);
      }
    },
  });

  console.log(currentLine)

  return (
    <>
      <View {...panResponder.panHandlers} style={styles.container}>
        <Svg
          height="100%"
          width="100%"
          viewBox={`0 0 ${window.width} ${window.height}`}
        >
          {dots.map((dot, index) => (
            <Circle key={index} cx={dot.x} cy={dot.y} r="20" fill={dot.color} />
          ))}
          {lines.map((line, index) => (
            <Line
              key={index}
              x1={line.start.x}
              y1={line.start.y}
              x2={line.end.x}
              y2={line.end.y}
              stroke={line.start.color}
              strokeWidth="2"
            />
          ))}
          {currentLine && (
            <Line
              x1={currentLine.start.x}
              y1={currentLine.start.y}
              x2={currentLine.end.x}
              y2={currentLine.end.y}
              stroke={currentLine.start.color}
              strokeWidth="2"
            />
          )}
        </Svg>
        <Container>
          <ContainerButton onPress={() => {}}>
            <TextButton>Enviar</TextButton>
          </ContainerButton>
        </Container>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginBottom: 40,
    alignItems: "center",
  },
});

export default Ex6Md2;
