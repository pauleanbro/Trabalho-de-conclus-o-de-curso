import styled from 'styled-components/native'
import {Platform, StatusBar} from 'react-native'

export const HeaderBarHeight = 62

export const ContainerHeader = styled.View`
  background-color: #FCFCFC;
`

export const ContainerBar = styled.View`
  height: ${HeaderBarHeight}px;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 24px;
  margin-left: 24px;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0 || 0}px;
`

export const ColumnLeft = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 5px;
`

export const BackText = styled.Text`
  margin-left: 24px;
  font-family: 'AleloTexto-Medium';
  font-size: 17px;
  color: #000;
`

export const ColumnRight = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 5px;
`