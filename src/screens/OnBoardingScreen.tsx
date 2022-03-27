import React, {useState} from 'react';
import {
  ButtonText,
  CountryInput,
  ErrorText,
  HeaderText,
  InputView,
  MainView,
  PhoneInput,
  PrivacyText,
  PrivacyTextClickable,
} from '../styles/OnBoardingStyles';
import {SplashButton} from '../styles/SplashStyles';
import {View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';

interface OnBoardingProps {
  country: string;
  number: string;
}

const OnBoardingScreen = (props: any) => {
  const initialValues: OnBoardingProps = {country: '+', number: ''};
  const [confirm, setConfirm] = useState(null);

  async function sendOtpCode(phoneNumber: string) {
    auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(result => {
        setConfirm(result);
        console.log('phoneNumber', result);
      })
      .catch(function (error) {
        console.error(error);
      });
    props.navigation.replace('Otp', {
      item: phoneNumber,
      confirm: confirm,
    });
  }

  const validationSchema = Yup.object({
    country: Yup.string().required('Obligation Input'),
    number: Yup.string().required('Obligation Input'),
  });

  return (
    <MainView>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          sendOtpCode(values.country + values.number);
        }}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <>
            <HeaderText>Enter your phone number</HeaderText>
            <View>
              <InputView>
                <CountryInput
                  keyboardType={'number-pad'}
                  maxLength={4}
                  placeholderTextColor="#FFF"
                  onChangeText={handleChange('country')}
                  onBlur={handleBlur('country')}
                  value={values.country}
                />
                <PhoneInput
                  keyboardType={'number-pad'}
                  maxLength={11}
                  placeholder={'123456789'}
                  placeholderTextColor="#FFF"
                  onChangeText={handleChange('number')}
                  onBlur={handleBlur('number')}
                  value={values.number}
                />
              </InputView>
              <ErrorText>
                {errors.country}
                {errors.number}
              </ErrorText>
              <PrivacyText>
                By countinuing, I confirm I have read the{' '}
                <PrivacyTextClickable>Privacy Policy</PrivacyTextClickable>
              </PrivacyText>
            </View>
            <SplashButton onPress={handleSubmit}>
              <ButtonText>Accept & Continue</ButtonText>
            </SplashButton>
          </>
        )}
      </Formik>
    </MainView>
  );
};

export default OnBoardingScreen;
