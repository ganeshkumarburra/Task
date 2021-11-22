import React from 'react';
import {View, Text, Dimensions, TouchableOpacity, Animated} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../Screens/Home';
import Products from '../Screens/Products';
import Feedback from '../Screens/Feedback';

const Tab = createMaterialTopTabNavigator();
const {width, height} = Dimensions.get('window');

function MyTabBar({state, descriptors, navigation, position}: any) {
  return (
    <View style={{flexDirection: 'row', padding: 2}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={index}
            onLongPress={onLongPress}
            style={[
              {
                flex: 1,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                paddingTop: 20,
                backgroundColor: '#E9ECEF',
                marginHorizontal: 3,
                borderRadius: 15,
              },
              isFocused && {borderWidth: 2, backgroundColor: '#f19c79'},
            ]}>
            {route.name === 'Feedback' && (
              <MaterialIcons
                name="feedback"
                size={isFocused ? 17 : 15}
                style={{paddingBottom: 10, marginRight: 5}}
              />
            )}
            {route.name === 'Home' && (
              <FontAwesome5
                name="home"
                size={isFocused ? 17 : 15}
                style={{paddingBottom: 10, marginRight: 5}}
              />
            )}
            {route.name === 'Products' && (
              <MaterialIcons
                name="local-grocery-store"
                size={isFocused ? 17 : 15}
                style={{paddingBottom: 10, marginRight: 5}}
              />
            )}
            <Animated.Text
              style={{color: isFocused ? 'white' : 'black', paddingBottom: 10}}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabNavigator = () => {
  return (
    <View style={{height: height - 30, width}}>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={{
          tabBarStyle: {
            flexDirection: 'column',
            height: 70,
            // backgroundColor: 'red',
          },
          tabBarIconStyle: {alignSelf: 'flex-start'},
          tabBarBounces: false,
        }}>
        <Tab.Screen
          name={'Home'}
          component={Home}
          options={({route}) => ({
            tabBarIcon: ({color, focused}) => {
              return <FontAwesome5 name="home" size={focused ? 17 : 15} />;
            },
          })}
        />
        <Tab.Screen
          name={'Products'}
          component={Products}
          options={({route}) => ({
            tabBarIcon: ({color, focused}) => {
              return (
                <MaterialIcons
                  name="local-grocery-store"
                  size={focused ? 17 : 15}
                />
              );
            },
          })}
        />
        <Tab.Screen
          name={'Feedback'}
          component={Feedback}
          options={({route}) => ({
            tabBarIcon: ({color, focused}) => {
              return <MaterialIcons name="feedback" size={focused ? 17 : 15} />;
            },
          })}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
