import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

import KVStorage from '../KVStorage';

const Home = () => {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    KVStorage.get('user').then(result => {
      result && setUserName(JSON.parse(result).userName);
    });
  }, []);
  return (
    <ImageBackground
      source={require('../../assets/images/welcome.jpeg')}
      style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text}>{userName}</Text>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'cyan',
    opacity: 0.7,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
});
