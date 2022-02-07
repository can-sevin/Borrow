import React, {useEffect, useRef} from 'react';
import {
  SplashImage,
  SplashTextBottom,
  SplashTextTop,
  SplashView,
} from '../styles/SplashStyles';
import {Animated, Dimensions} from 'react-native';

const SplashScreen = (props: any) => {
  const {width, height} = Dimensions.get('window');
  const anim = useRef(new Animated.Value(0)).current;
  const fadeImg = useRef(new Animated.Value(0)).current;
  const animImg = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(anim, {
          toValue: -height * 0.16,
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
  }, []);

  setTimeout(() => {
    Animated.timing(animImg, {
      toValue: -width * 1.5,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, 9000);

  return (
    <SplashView
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
        source={require('../assets/image/2017-volkswagen-gti-se-5door-hatchback-front-view.png')}
      />
    </SplashView>
  );
};

export default SplashScreen;
