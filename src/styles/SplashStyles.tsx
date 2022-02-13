import styled from 'styled-components';
import {Image, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const SplashView = styled(LinearGradient)`
  flex: 1;
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

export const SplashImage = styled(Animated.Image)`
  width: 445px;
  height: 297px;
  left: 180px;
  align-self: center;
`;

export const SplashLogo = styled(Image)`
  align-self: center;
`;
