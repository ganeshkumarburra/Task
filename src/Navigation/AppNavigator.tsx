import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import SplashScreen from '../Screens/SplashScreen';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';
import ProductDetails from '../Screens/ProductDetails';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={SplashScreen}
        name="SpalshScreen"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={AuthNavigator}
        name="AuthNavigator"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={TabNavigator}
        name="TabNavigator"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ProductDetails}
        name={'ProductDetails'}
        options={{
          headerBackgroundContainerStyle: {backgroundColor: 'green'},
          headerStyle: {
            height: 25,
          },
          headerBackTitleVisible: false,
          headerTitleStyle: {display: 'none'},
          headerBackTitleStyle: {left: 0},
          headerBackImage: () => {
            return (
              <FontAwesome5Icon
                name="arrow-circle-left"
                size={20}
                style={{position: 'absolute', left: 0}}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
