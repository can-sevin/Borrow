import styled from 'styled-components';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export const MainView = styled(View)`
  flex: 1;
  background-color: #0d1724;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  font-size: 15px;
  color: white;
  align-self: center;
  align-content: center;
  font-family: 'Poppins-Bold';
`;

export const HeaderText = styled(ButtonText)`
  width: 90%;
  line-height: 30px;
  margin-top: 16%;
  text-align: left;
  font-family: 'Poppins-Regular';
`;

export const PrivacyText = styled(ButtonText)`
  font-size: 12px;
  width: 180px;
  text-align: left;
  line-height: 18px;
  align-self: flex-start;
  align-content: flex-start;
  margin-top: 16px;
  font-family: 'Poppins-Regular';
`;

export const ErrorText = styled(PrivacyText)`
  font-size: 16px;
  color: #4048bf;
  font-family: 'Poppins-SemiBold';
`;

export const PrivacyTextClickable = styled(PrivacyText)`
  color: #4048bf;
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
  border-radius: 16px;
  margin-bottom: 16%;
  background-color: #514bc3;
  justify-content: center;
  align-items: center;
`;
