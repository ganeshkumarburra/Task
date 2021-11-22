import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

import KVStorage from '../KVStorage';

const SplashScreen = ({navigation}: any) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      KVStorage.get('user').then(value =>
        navigation.replace(value ? 'TabNavigator' : 'AuthNavigator'),
      );
    }, 3000);
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/splash.jpg')}
      style={styles.container}>
      <ActivityIndicator
        animating={animating}
        color="#FFF"
        size="large"
        style={styles.activityIndicator}
      />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    opacity: 0.9,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
