import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Image
} from 'react-native';

import {
  ContainerHeader,
  ContainerBar,
  ColumnLeft,
  BackText,
  ColumnRight,
} from './styles';

import IconBack from '../../assets/IconBack.js';
import MenuLogo from '../../assets/Menu.js';

const HeaderBack = (props) => {
  const {
    containerBar = true,
    text,
    onPress = () => {},
  } = props

  return (
    <ContainerHeader>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView>
        {containerBar && (
          <ContainerBar>
            <ColumnLeft
              onPress={() => onPress()}
              activeOpacity={0.7}
              hitSlop={{
                top: 50, bottom: 50, left: 50, right: 50,
              }}
            >
              <IconBack />
              <BackText>{text}</BackText>
            </ColumnLeft>
            <ColumnRight
              onPress={() => RootNavigation.toggleDrawer()}
              activeOpacity={0.7}
              hitSlop={{
                top: 50,
                bottom: 50,
              }}
            >
                <MenuLogo />
            </ColumnRight>
          </ContainerBar>
        )}
      </SafeAreaView>
    </ContainerHeader>
  )
}

export default HeaderBack
