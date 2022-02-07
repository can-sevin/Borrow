import React from 'react';
import {
  SplashTextBottom,
  SplashTextTop,
  SplashView,
} from '../styles/SplashStyles';

const OnBoardingScreen = (props: any) => {
  // const [splash, setSplash] = useState(false);

  /*
    useEffect(() => {
    setTimeout(() => {
      setSplash(true);
    }, SPLASH_TIMEOUT);
  }, []);

  useEffect(() => {
    if (splash) {
      props.navigation.replace('Login');
    }
  }, [splash, props.navigation]);
   */

  return (
    <SplashView
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#514BC3', '#4048BF']}>
      <SplashTextTop>Borrow</SplashTextTop>
      <SplashTextBottom>Get a car.</SplashTextBottom>
    </SplashView>
  );
};

export default OnBoardingScreen;
