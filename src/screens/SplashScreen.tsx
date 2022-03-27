import React, {useEffect, useRef, useState} from 'react';
import {
  ButtonText,
  MainView,
  SplashButton,
  SplashImage,
  SplashLinear,
  SplashTextBottom,
  SplashTextTop,
  SplashView,
} from '../styles/SplashStyles';
import {Animated, Dimensions} from 'react-native';

const SplashScreen = (props: any) => {
  const {height} = Dimensions.get('window');
  const anim = useRef(new Animated.Value(0)).current;
  const fadeImg = useRef(new Animated.Value(0)).current;
  const animImg = useRef(new Animated.Value(0)).current;
  const [carIndex, setCarIndex] = useState(0);

  const carImg = [
    require('../assets/image/2017-volkswagen-gti-se-5door-hatchback-front-view.png'),
    require('../assets/image/Alfa-Romeo-Car-PNG.png'),
    require('../assets/image/black_bmw.png'),
    require('../assets/image/blue_mustang.png'),
  ];

  const changeScreen = () => {
    props.navigation.replace('OnBoarding');
  };

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(anim, {
          toValue: -height * 0.06,
          duration: 3500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeImg, {
          toValue: 1,
          duration: 3500,
          useNativeDriver: true,
        }),
      ]).start();
    }, 3000);
    Animated.loop(
      Animated.sequence([
        Animated.delay(6000),
        Animated.timing(animImg, {
          toValue: 220,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.delay(3000),
        Animated.timing(animImg, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCarIndex(Math.floor(Math.random() * 4));
      console.log('carIndex', carIndex);
    }, 7000);
  });

  return (
    <MainView>
      <SplashView>
        <SplashLinear
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#514BC3', '#4048BF']}>
          <SplashTextTop style={{transform: [{translateY: anim}]}}>
            Borrow
          </SplashTextTop>
          <SplashTextBottom style={{transform: [{translateY: anim}]}}>
            Get a car.
          </SplashTextBottom>
          <SplashImage
            style={{opacity: fadeImg, transform: [{translateX: animImg}]}}
            source={carImg[carIndex]}
          />
        </SplashLinear>
      </SplashView>
      <SplashButton onPress={changeScreen}>
        <ButtonText>Get Started</ButtonText>
      </SplashButton>
    </MainView>
  );
};

export default SplashScreen;
