import React, {useState} from 'react';
import {SplashButton} from '../styles/SplashStyles';
import {TextInput, View} from 'react-native';
import {Formik} from 'formik';
import {
  ButtonText,
  HeaderText,
  InputView,
  MainView,
  OtpInput,
  OtpText,
  PrivacyTextClickable,
} from '../styles/OtpStyles';

interface OtpProps {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
}

const OnBoardingScreen = (props: any) => {
  const initialValues: OtpProps = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: '',
  };
  const [code, setCode] = useState('');

  const code1Ref = React.createRef<TextInput>();
  const code2Ref = React.createRef<TextInput>();
  const code3Ref = React.createRef<TextInput>();
  const code4Ref = React.createRef<TextInput>();
  const code5Ref = React.createRef<TextInput>();
  const code6Ref = React.createRef<TextInput>();

  async function confirmCode() {
    console.log('props.route.params', props.route.params);
    try {
      await props.route.params.confirm.confirm(
        props.code1 +
          props.code2 +
          props.code3 +
          props.code4 +
          props.code5 +
          props.code6,
      );
    } catch (error) {
      console.log('Invalid code.' + error);
    }
  }

  return (
    <MainView>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          setCode(values.code1 + values.code2 + values.code3 + values.code4);
          confirmCode();
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <View style={{justifyContent: 'flex-start', width: '90%'}}>
              <HeaderText>A code has been sent to</HeaderText>
              <OtpText>{props.route.params.item}</OtpText>
            </View>
            <View style={{marginBottom: 196}}>
              <InputView>
                <OtpInput
                  keyboardType={'number-pad'}
                  maxLength={1}
                  ref={code1Ref}
                  placeholderTextColor="#FFF"
                  selectionColor="#FFF"
                  onChangeText={handleChange('code1')}
                  onBlur={handleBlur('code1')}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key !== 'Backspace') {
                      code2Ref.current?.focus();
                    }
                  }}
                  textContentType="oneTimeCode"
                  autoFocus={true}
                  value={values.code1}
                />
                <OtpInput
                  keyboardType={'number-pad'}
                  maxLength={1}
                  ref={code2Ref}
                  selectionColor="#FFF"
                  placeholderTextColor="#FFF"
                  onChangeText={handleChange('code2')}
                  onBlur={handleBlur('code2')}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      code1Ref.current?.focus();
                    } else {
                      code3Ref.current?.focus();
                    }
                  }}
                  textContentType="oneTimeCode"
                  value={values.code2}
                />
                <OtpInput
                  keyboardType={'number-pad'}
                  ref={code3Ref}
                  maxLength={1}
                  placeholderTextColor="#FFF"
                  selectionColor="#FFF"
                  onChangeText={handleChange('code3')}
                  onBlur={handleBlur('code3')}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      code2Ref.current?.focus();
                    } else {
                      code4Ref.current?.focus();
                    }
                  }}
                  textContentType="oneTimeCode"
                  value={values.code3}
                />
                <OtpInput
                  keyboardType={'number-pad'}
                  maxLength={1}
                  ref={code4Ref}
                  placeholderTextColor="#FFF"
                  selectionColor="#FFF"
                  onChangeText={handleChange('code4')}
                  onBlur={handleBlur('code4')}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      code3Ref.current?.focus();
                    } else {
                      code5Ref.current?.focus();
                    }
                  }}
                  textContentType="oneTimeCode"
                  value={values.code4}
                />
                <OtpInput
                  keyboardType={'number-pad'}
                  maxLength={1}
                  ref={code5Ref}
                  placeholderTextColor="#FFF"
                  selectionColor="#FFF"
                  onChangeText={handleChange('code5')}
                  onBlur={handleBlur('code5')}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      code4Ref.current?.focus();
                    } else {
                      code6Ref.current?.focus();
                    }
                  }}
                  textContentType="oneTimeCode"
                  value={values.code5}
                />
                <OtpInput
                  keyboardType={'number-pad'}
                  maxLength={1}
                  ref={code6Ref}
                  placeholderTextColor="#FFF"
                  selectionColor="#FFF"
                  onChangeText={handleChange('code6')}
                  onBlur={handleBlur('code6')}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      code5Ref.current?.focus();
                    }
                  }}
                  textContentType="oneTimeCode"
                  value={values.code6}
                />
              </InputView>
              <PrivacyTextClickable>Send another code</PrivacyTextClickable>
            </View>
            <SplashButton onPress={handleSubmit}>
              <ButtonText>Next</ButtonText>
            </SplashButton>
          </>
        )}
      </Formik>
    </MainView>
  );
};

export default OnBoardingScreen;
