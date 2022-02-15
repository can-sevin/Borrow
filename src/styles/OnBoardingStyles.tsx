import styled from 'styled-components';
import {Animated, View, Text, TextInput, TouchableOpacity} from 'react-native';

export const MainView = styled(View)`
  flex: 1;
  background-color: #0d1724;
  justify-content: space-evenly;
  align-items: center;
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

export const HeaderText = styled(ButtonText)`
  width: 90%;
  text-align: left;
  font-family: 'Lato-Regular';
`;

export const CountryInput = styled(TextInput)`
  width: 14.6%;
  height: 48px;
  font-size: 18px;
  color: white;
  border: none;
  margin-right: 5.3%;
  border-bottom-width: 1px;
  border-bottom-color: #4048bf;
`;

export const InputView = styled(View)`
  flex-direction: row;
`;

export const PhoneInput = styled(TextInput)`
  width: 64%;
  height: 48px;
  font-size: 18px;
  color: white;
  border: none;
  border-bottom-width: 1px;
  border-bottom-color: #4048bf;
`;

export const NextButton = styled(TouchableOpacity)`
  width: 84%;
  height: 6.8%;
  border-radius: 8px;
  margin-bottom: 16%;
  background-color: #514bc3;
  justify-content: center;
  align-items: center;
`;
