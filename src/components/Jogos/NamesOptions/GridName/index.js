import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, ButtonWord, TextButton } from './styles';

const GridName = ({ data, onLetterPress }) => {
  return (
    <Container>
      {data.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={{ flexDirection: 'row' }}>
          {row.map((letter, colIndex) => (
            <ButtonWord key={`col-${colIndex}`} onPress={() => onLetterPress(rowIndex, colIndex)}>
              <TextButton style={{ margin: 5 }}>{letter}</TextButton>
            </ButtonWord>
          ))}
        </View>
      ))}
    </Container>
  );
};

export default GridName;
