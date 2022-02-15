import React from 'react';
import {
  ButtonText,
  CountryInput,
  HeaderText,
  InputView,
  MainView,
  PhoneInput,
} from '../styles/OnBoardingStyles';
import {SplashButton} from '../styles/SplashStyles';

const OnBoardingScreen = (props: any) => {
  const changeScreen = () => {
    props.navigation.replace('OnBoarding');
  };

  return (
    <MainView>
      <HeaderText>Enter your phone number</HeaderText>
      <InputView>
        <CountryInput keyboardType={'number-pad'} maxLength={5} />
        <PhoneInput keyboardType={'number-pad'} maxLength={5} />
      </InputView>
      <SplashButton onPress={changeScreen}>
        <ButtonText>Accept & Continue</ButtonText>
      </SplashButton>
    </MainView>
  );
};

export default OnBoardingScreen;
