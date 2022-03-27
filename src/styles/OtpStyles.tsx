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

export const OtpText = styled(ButtonText)`
  width: 90%;
  line-height: 30px;
  text-align: left;
  font-family: 'Poppins-SemiBold';
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

export const PrivacyTextClickable = styled(PrivacyText)`
  color: #4048bf;
  text-align: center;
  align-self: center;
`;

export const InputView = styled(View)`
  flex-direction: row;
  justify-content: space-evenly;
  width: 84%;
`;

export const OtpInput = styled(TextInput)`
  width: 14%;
  background-color: #58517b;
  height: 73px;
  align-self: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  font-family: 'Poppins-Regular';
  color: white;
  border: none;
  border-radius: 16px;
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
