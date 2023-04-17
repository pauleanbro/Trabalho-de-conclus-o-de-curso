import React, { useState, useRef } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';

const Ex2Md1 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouching, setIsTouching] = useState(false);
  const [prevPosition, setPrevPosition] = useState(null);
  const boxRef = useRef(null);

  const handlePanResponderMove = (event, gestureState) => {
    const { moveX, moveY } = gestureState;
    setPosition({ x: moveX, y: moveY });

    if (boxRef.current) {
      const boxPosition = boxRef.current.measureInWindow((x, y, width, height) => {
        const boxBounds = { x, y, width, height };
        const touchBounds = { x: moveX, y: moveY, width: 1, height: 1 };
        const isTouching = intersects(boxBounds, touchBounds);
        setIsTouching(isTouching);
      });
    }

    if (prevPosition) {
      const { x: prevX, y: prevY } = prevPosition;
      const dx = moveX - prevX;
      const dy = moveY - prevY;
      const lineLength = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
      const transform = [{ translateX: prevX }, { translateY: prevY }, { rotateZ: `${angle}deg` }];
      const lineStyle = {
        position: 'absolute',
        width: lineLength,
        height: 2,
        top: 0,
        left: 0,
        borderTopWidth: 2,
        borderTopColor: 'black',
        transform,
      };
      setLine(lineStyle);
    }

    setPrevPosition({ x: moveX, y: moveY });
  };

  const intersects = (rect1, rect2) => {
    return !(
      rect1.x + rect1.width < rect2.x ||
      rect2.x + rect2.width < rect1.x ||
      rect1.y + rect1.height < rect2.y ||
      rect2.y + rect2.height < rect1.y
    );
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: handlePanResponderMove,
    onPanResponderRelease: () => {
      setIsTouching(false);
      setPrevPosition(null);
      setLine(null);
    },
    onPanResponderTerminate: () => {
      setIsTouching(false);
      setPrevPosition(null);
      setLine(null);
    },
  });

  const [line, setLine] = useState(null);

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <View style={styles.lineContainer}>
        {line && <View style={[styles.line, isTouching && styles.touchedLine, line]} />}
      </View>
      <View
        style={[styles.box, isTouching && styles.touchedBox]}
        ref={boxRef}
      />
      <View
        style={[styles.pointer, { left: position.x, top: position.y }]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    left: 150,
    top: 150,
  },
  touchedBox: {
    backgroundColor: 'red',
  },
  pointer: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
});

export default Ex2Md1;
