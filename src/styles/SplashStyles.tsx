import styled from 'styled-components';
import {Animated, View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const SplashLinear = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SplashView = styled(View)`
  height: 76%;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
`;

export const MainView = styled(View)`
  flex: 1;
  background-color: #0d1724;
  justify-content: space-between;
  align-items: center;
`;

export const SplashButton = styled(TouchableOpacity)`
  width: 84%;
  height: 6.8%;
  border-radius: 8px;
  margin-bottom: 16%;
  background-color: #514bc3;
  justify-content: center;
  align-items: center;
`;

export const SplashTextTop = styled(Animated.Text)`
  font-size: 52px;
  color: white;
  align-self: center;
  align-content: center;
  font-family: 'Lato-Black';
  margin-bottom: 22px;
`;

export const SplashTextBottom = styled(Animated.Text)`
  font-size: 24px;
  color: white;
  align-self: center;
  align-content: center;
  font-family: 'Lato-Bold';
`;

export const ButtonText = styled(Text)`
  font-size: 15px;
  color: white;
  align-self: center;
  align-content: center;
  font-family: 'Lato-Bold';
`;

export const SplashImage = styled(Animated.Image)`
  width: 445px;
  height: 297px;
  left: 180px;
  align-self: center;
`;
